#!/usr/bin/env python3
"""Update all remaining Thailand tax articles with expert content"""
import re

article_contents = {
    "02-residency.html": '''    <section id="content">
      <div class="container">
        <h2 class="reveal">What is the 180-Day Rule?</h2>
        <p class="reveal">Thailand's tax residency is determined by physical presence. If you spend 180 or more days in Thailand during any calendar year, you become a tax resident for that year. Once you reach tax residency status, you owe Thai tax on your worldwide income for that tax year. This is the fundamental principle that shapes your tax planning as an American expat in Thailand. Understanding this rule precisely is essential because miscounting can result in unexpected tax liabilities and filing requirements.</p>

        <h2 class="reveal">How to Count Your Days</h2>
        <p class="reveal">The 180-day rule is strict and mathematical. A day counts toward residency if you are physically present in Thailand at any point during that calendar day, even if you arrive late or depart early. You don't need to spend full days in the country. Crossing the Thai border, entering on a plane, or arriving by land all count as being in Thailand for that day. The tax year runs from January 1 to December 31, and your day count resets each calendar year. If you spent 179 days in Thailand in 2025, your count starts fresh at zero on January 1, 2026. Even a single hour in Thailand on a given day counts as being present that day.</p>

        <h2 class="reveal">Grace Periods and Exemptions</h2>
        <p class="reveal">There is no official grace period that extends your non-residency status beyond 180 days. However, Thailand recognises certain circumstances. If you can document that you are temporarily absent from Thailand (e.g., for medical treatment, official business, or family reasons), and you intend to return, you may be able to argue that brief absences should not count against your day count. The Thai Revenue Department allows a deduction for days spent outside Thailand if you can prove continuous residency intent. Document everything: border crossings, airline tickets, hotel records, and employment contracts all support your case.</p>

        <h2 class="reveal">Mid-Year Arrivals and Departures</h2>
        <p class="reveal">If you arrive in Thailand on day 180 of the year, you are immediately a tax resident for that year. If you arrive on day 181, you are not a tax resident for that calendar year. Timing is critical. Similarly, if you depart Thailand before reaching 180 days, you remain a non-resident and do not file Thai income tax for that year. Many expats strategically time their moves to avoid crossing the 180-day threshold. If you're on day 179 and need to leave Thailand, do so before day 180 ends. Conversely, if you're arriving, plan to stay at least until day 180 if you intend to be a resident.</p>

        <h2 class="reveal">Frequent Travelers and Border Runs</h2>
        <p class="reveal">The 180-day rule is based on total days in Thailand, not continuous residence. Border runs (visa runs to neighbouring countries) count against your day count. If you leave Thailand for 3 days and return, those 3 days spent outside Thailand do not reduce your day count. You can be a tax resident with frequent trips out and back in. The Thai Revenue Department considers each day you are physically in Thailand, regardless of whether you take weekend trips to Laos or Cambodia. Plan accordingly if you're trying to stay below 180 days. A 10-day trip to Vietnam reduces your Thai presence but only if those days are outside the country.</p>

        <h2 class="reveal">Consequences of Residency Status</h2>
        <p class="reveal">Becoming a tax resident in Thailand triggers several obligations. First, you must file the PND 90 form (personal income tax return) by March 31 of the following year. Second, you become liable for Thai tax on worldwide income, not just Thai-sourced income. Third, you must comply with Thailand's foreign exchange and remittance rules. Foreign-sourced income becomes taxable in Thailand when remitted (brought into the country). Once resident, failing to file PND 90 can result in penalties of up to 1,800 baht per month or up to 20% of unpaid taxes. The IRS also notices if you change residency status, as it affects your US tax obligations and your eligibility for certain deductions like the Foreign Earned Income Exclusion (FEIE).</p>

        <h2 class="reveal">Multi-Year Residency Planning</h2>
        <p class="reveal">If you become a tax resident in 2026, you remain a resident only for that calendar year. When 2027 begins, your day count resets to zero. This means it's possible to be a resident one year and non-resident the next. Some expats structure their moves to be non-resident during high-income years and resident during lower-income years. This requires careful planning and documentation. If you're non-resident in a year, you file no PND 90 but may still owe Thai tax on Thailand-sourced income (e.g., rental income from Thai property or business profits in Thailand). If you're resident, you file a complete PND 90 return reporting worldwide income minus deductions and exemptions.</p>

        <h2 class="reveal">Documentation and Proof</h2>
        <p class="reveal">Keep detailed records of your days in and out of Thailand. Immigration stamps in your passport are the primary evidence, but they're not foolproof. Some border crossings may not always be clearly stamped. Save airline tickets, hotel bookings, credit card statements, and any official correspondence from Thai authorities. If you're questioned by the Revenue Department about your residency status, you'll need to present evidence. The same documentation is critical for US tax purposes. When you file your US return, you may claim the Foreign Earned Income Exclusion (FEIE) on Form 2555, which requires proof of foreign residency or physical presence tests. A clear record of your Thailand days supports both Thai and US compliance.</p>

        <h2 class="reveal">Coordinating with US Tax Obligations</h2>
        <p class="reveal">Your Thai residency status does not directly determine your US tax filing requirements. As a US citizen, you must file US taxes annually on worldwide income, regardless of where you live. However, your residency status affects which deductions and exclusions you can claim. If you become a Thai tax resident, you'll be filing both PND 90 (Thai) and Form 1040 (US). You must also coordinate the two filings to avoid double taxation. If you pay Thai tax on income, you can claim a Foreign Tax Credit (FTC) on your US return via Form 1116, or you can use the Foreign Earned Income Exclusion (FEIE) on Form 2555. Choose wisely based on your income level and tax rates.</p>

        <h2 class="reveal">FAQ: 180-Day Rule</h2>
        <p class="reveal"><strong>Q: If I arrive on day 180 of the year, am I a tax resident?</strong><br>A: Yes. The 180-day rule is inclusive. Arriving on day 180 counts as being in Thailand on day 180, making you a tax resident for that calendar year.</p>

        <p class="reveal"><strong>Q: Do visa runs count as leaving Thailand?</strong><br>A: Yes. Days spent outside Thailand (even for visa runs) do not count toward your 180-day residency threshold. If you take a 10-day visa run to Laos, those 10 days are not counted.</p>

        <p class="reveal"><strong>Q: Can I be a tax resident in two countries simultaneously?</strong><br>A: Yes, it's possible. You may be a tax resident in both Thailand and another country. However, many countries have tax treaties that provide rules for determining primary residency. Thailand and the US have a tax treaty that addresses this.</p>

        <p class="reveal"><strong>Q: What if I don't have passport stamps proving my days?</strong><br>A: Without clear immigration stamps, the burden of proof shifts to you. Present supporting evidence: airline tickets, hotel records, bank statements, and employment contracts. The Thai Revenue Department may accept circumstantial evidence of residence.</p>

        <p class="reveal"><strong>Q: Does the 180-day rule apply if I have a permanent address in Thailand?</strong><br>A: No. The 180-day rule is based on physical presence, not address registration. You could have a Thai address but still be a non-resident if you don't spend 180 days in the country that year.</p>

        <div class="back-link">
          <p>
            <a href="/thailand/us-expat-taxes-thailand-2026/">Back to full US Expat Taxes in Thailand 2026 guide</a>
          </p>
        </div>

        <!-- RELATED TOPICS -->
        <div style="padding: 2rem 0; margin: 3rem 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border);">
          <h3 style="font-family: 'Libre Baskerville'; font-size: 1.2rem; margin-bottom: 1.5rem;">Related Topics</h3>
          <ul style="list-style: none; padding: 0; display: flex; gap: 1rem; flex-wrap: wrap;">
            <li><a href="/thailand/foreign-sourced-income-remittance/" style="color: var(--blue-light); text-decoration: none; border-bottom: 1px solid var(--blue-light);">Foreign Income & Remittance</a></li>
            <li><a href="/thailand/digital-nomads-remote-workers-thailand/" style="color: var(--blue-light); text-decoration: none; border-bottom: 1px solid var(--blue-light);">Digital Nomads</a></li>
          </ul>
        </div>
      </div>
    </section>'''
}

def replace_content_in_file(filepath, new_content):
    """Replace content section in file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the opening section tag and closing tag
    pattern = r'    <section id="content">.*?    </section>'

    if re.search(pattern, content, re.DOTALL):
        new_content_with_newline = new_content + '\n'
        new_html = re.sub(pattern, new_content, content, count=1, flags=re.DOTALL)

        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_html)
        return True
    return False

# Update article 2
if replace_content_in_file('thailand/02-residency.html', article_contents["02-residency.html"]):
    print("Successfully updated 02-residency.html")
else:
    print("Failed to update 02-residency.html")
