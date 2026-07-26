// Cloudflare Pages Function: POST /api/chat
// Retrieves relevant page chunks from Vectorize, then asks a Workers AI chat
// model to answer using only that context.

const EMBED_MODEL = "@cf/baai/bge-base-en-v1.5";
const CHAT_MODEL = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";
const TOP_K = 6;
const MAX_HISTORY_TURNS = 6;

export async function onRequestPost(context) {
  const { request, env } = context;

  let body;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ error: "Invalid JSON body" }, 400);
  }

  const question = (body.question || "").toString().trim().slice(0, 1000);
  if (!question) {
    return jsonResponse({ error: "Missing 'question'" }, 400);
  }

  const history = sanitizeHistory(body.history);

  // Retrieve using the current question plus recent user turns, so follow-ups
  // like "how much does that cost?" still retrieve relevant context.
  const retrievalQuery = [
    ...history.filter((m) => m.role === "user").slice(-2).map((m) => m.content),
    question,
  ].join("\n");

  const embedded = await env.AI.run(EMBED_MODEL, { text: [retrievalQuery] });
  const vector = embedded.data[0];

  const matches = await env.VECTOR_INDEX.query(vector, {
    topK: TOP_K,
    returnMetadata: true,
  });

  const contextChunks = matches.matches
    .filter((m) => m.score > 0.4)
    .map((m) => m.metadata);

  if (contextChunks.length === 0) {
    return jsonResponse({
      answer:
        "I couldn't find anything about that on AI Tax Advisors. Try rephrasing, or browse the country tax guides directly.",
      sources: [],
    });
  }

  const contextText = contextChunks
    .map((c, i) => `[${i + 1}] (${c.url}) ${c.title}\n${c.text}`)
    .join("\n\n");

  const systemPrompt = `You are the AI Tax Advisors website assistant. AI Tax Advisors is a site for US expats covering US expat tax compliance topics (FEIE, FTC, FBAR, FATCA, tax treaties) across many countries. Answer the user's question using ONLY the context below, which is pulled from the site's own pages.

Guidelines:
- If the context doesn't contain the answer, say you don't have that information on the site and suggest a related country/topic guide instead of guessing.
- Never state a specific tax figure, deadline, or legal conclusion as certain if the context is ambiguous or country-specific rules may have changed — hedge and point to the relevant guide page instead of guessing.
- This is informational content, not individualized tax advice — if a question sounds like it needs a personalized answer (specific dollar amounts, filing decisions), say so and suggest the user consult the guide plus a professional.
- Be proactive: after answering, suggest a relevant next step or related page (e.g. a specific country's guide, FBAR vs FATCA comparison), if the context supports it.
- Use conversation history for follow-up questions ("what about FBAR?", "does that apply to self-employed people?").
- Keep answers concise (2-5 sentences unless the question needs a list).
- Cite the page URL(s) you used in parentheses at the end.

Context:
${contextText}`;

  const messages = [
    { role: "system", content: systemPrompt },
    ...history,
    { role: "user", content: question },
  ];

  const chatResult = await env.AI.run(CHAT_MODEL, {
    messages,
    max_tokens: 450,
  });

  const uniqueSources = [...new Map(contextChunks.map((c) => [c.url, c.title])).entries()].map(
    ([url, title]) => ({ url, title })
  );

  return jsonResponse({
    answer: chatResult.response,
    sources: uniqueSources,
  });
}

function sanitizeHistory(raw) {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (m) =>
        m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY_TURNS * 2)
    .map((m) => ({ role: m.role, content: m.content.toString().slice(0, 1000) }));
}

export async function onRequestOptions() {
  return new Response(null, { headers: corsHeaders() });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
}

function jsonResponse(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: { "Content-Type": "application/json", ...corsHeaders() },
  });
}
