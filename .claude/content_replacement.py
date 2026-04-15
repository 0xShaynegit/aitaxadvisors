#!/usr/bin/env python3
"""
Content replacement for Thailand tax articles
Replaces <section id="content"> ... </section> blocks with new content
"""

import re

# Article 1: Master Guide Content
ARTICLE_1_CONTENT = '''    <section id="content" style="padding: 4rem 0;">
      <div class="container">
        <h2 class="reveal" style="font-size: 2rem; margin-bottom: 1.5rem; font-family: 'Libre Baskerville';">Who This Guide Is For</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;">This guide is designed for Americans living, working, retiring, or considering a move to Thailand. Whether you're a remote worker on a Digital Nomad Visa, a teacher on an education visa, a retiree on a long-stay visa, or an investor exploring Thailand's opportunities, you face unique tax challenges from both Thailand and the United States. Digital nomads staying 3-6 months per year. Remote employees earning US salaries while based in Bangkok. Retirees drawing Social Security and pensions. Business owners with Thai operations. Long-term residents on elite visas. If any of these describes you, navigating the intersection of Thai and US tax law is critical to protecting your income and assets.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">Quick Overview: Thai and US Tax Obligations</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;">Thailand taxes you based on residency and remittance. Become a tax resident (180+ days in Thailand), and you owe Thai tax on worldwide income. Remit foreign-sourced income to Thailand, and it becomes taxable locally. The United States taxes you on worldwide income as a US citizen, regardless of where you live. These two tax systems operate independently, creating potential double taxation if you're not careful. Your strategy must address both sides simultaneously.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Thailand Side:</strong> If you're a tax resident, you file PND 90 (personal income tax) by March 31 of the following year. Thailand's progressive tax rate climbs from 5% to 37% on income exceeding THB 5 million (approximately USD 142,000). Foreign-sourced income is taxable only when remitted to Thailand under the remittance doctrine. The grace period on foreign-sourced income eased in 2024 but remains strict on documentation.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>US Side:</strong> You file Form 1040 by April 15 (June 15 with FBAR filing). You have two strategies to manage double taxation: the Foreign Earned Income Exclusion (FEIE) on Form 2555 or the Foreign Tax Credit (FTC) on Form 1116. FEIE allows you to exclude up to USD 132,900 of earned foreign income in 2026. FBAR reporting is required if your aggregate foreign financial accounts ever exceed USD 10,000. FATCA reporting (Form 8938) applies if you have specified foreign financial assets exceeding USD 200,000 to USD 600,000 depending on your status.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">The 180-Day Rule with Real Examples</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;">Thailand's tax residency threshold is mathematical and unforgiving: 180 days in Thailand during any calendar year triggers residency status. A day counts if you're physically present at any point during that calendar day, even arriving on the last flight or departing early morning. Each calendar year resets the count January 1.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Example 1: Teacher on 10-Month Contract.</strong> You're hired to teach English at a Bangkok international school. Your contract runs March through November (9 months). During those 9 months, you're in Thailand approximately 270 days. You reached the 180-day threshold by early September. On that day, you became a Thai tax resident for calendar year 2026. You must file PND 90 by March 31, 2027, reporting worldwide income for 2026. When you leave in December, your residency status doesn't change (you're already resident). In January 2027, your day count resets to zero.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Example 2: Remote Worker Splitting Time.</strong> You're a software engineer earning USD 120,000 per year from a US employer. You spend January through April in Thailand (120 days), return to the US for May and June, then return for July through October (122 days). Total: 242 days in Thailand in 2026. You became a tax resident in early October. You must file PND 90 for 2026 reporting your USD 120,000 salary. Under the remittance doctrine, if you remit any salary to Thailand, it's taxable in Thailand. On the US side, claim FEIE on Form 2555, excluding USD 120,000 of earned income, resulting in zero US federal income tax. Key: coordinate both filings and document your days meticulously.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Example 3: Digital Nomad on DTV.</strong> You're on Thailand's Digital Nomad Visa (DTV) and stay in Thailand for 5 months per year (approximately 150 days), then travel Southeast Asia for 2 months. In the 5 months in Thailand, you earn USD 60,000 from freelance work (not 180 days, so non-resident). On the US side, you owe tax on the USD 60,000. You file Form 1040 with FEIE on Form 2555, excluding all USD 60,000. On the Thai side, as a non-resident, you owe tax only on Thailand-sourced income (none, if your freelancing is from US clients). Result: zero Thai tax, zero US tax via FEIE.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">Foreign-Sourced Income and the Remittance Doctrine</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;">This is where misunderstanding costs money. Foreign-sourced income earned outside Thailand is generally not taxable in Thailand unless you bring it into the country (remit it). This is Thailand's remittance doctrine. However, recent changes (2024-2026) have tightened enforcement and definition. Prior to 2024, many expats believed foreign income was entirely tax-free in Thailand. That interpretation has been challenged by the Thai Revenue Department.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>What Is Foreign-Sourced Income?</strong> Income earned outside Thailand where the work is performed abroad or income legally generated outside Thailand. Examples include salary from a US employer paid to your US bank account, dividends from US stocks deposited to your brokerage, rental income from US real estate, capital gains from selling US investments, and freelance income from international clients. The location of payment doesn't determine sourcing; the location of work or asset location does.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>The Remittance Doctrine in Practice.</strong> Foreign-sourced income is taxable in Thailand only when you remit it to Thailand. Remitting means bringing money into Thailand: depositing to a Thai bank account, using it to buy property or pay expenses in Thailand, or converting it to Thai baht. If your US employer deposits USD 5,000 per month to your US bank account and you don't bring any to Thailand, it's not taxed in Thailand (assuming you're also not a Thai business owner earning Thai-sourced income). If you transfer USD 2,000 per month from that US account to a Thai bank account, that USD 2,000 becomes taxable in Thailand under the remittance doctrine.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Grace Period and 2024-2026 Changes.</strong> A grace period offered in 2024 eased enforcement on foreign-sourced income for first-time compliance. However, the grace period is expiring, and enforcement is tightening. Do not assume foreign income is tax-free; plan for taxation. The safest approach is to remit only what you need in Thailand and keep excess earnings in a US account. This avoids triggering Thai tax on amounts you're not spending in Thailand.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>YouTube Myths vs. Reality.</strong> Myth: I can earn income from YouTube ads outside Thailand, so it's not taxed in Thailand. Reality: YouTube income earned through your channel, even if you're located in Thailand as the creator, may be Thailand-sourced if content creation occurs in Thailand. Similarly, if you remit those earnings to a Thai account, remittance doctrine applies. Myth: If I don't bring money to Thailand, I never owe Thai tax. Reality: Thailand's Revenue Department has expanded the definition of remitting to include indirect benefits. Save documentation of all foreign-source income and remittances to demonstrate bona fide non-remittance.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">How Thai and US Taxes Interact: A Real Scenario</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Scenario: You earn USD 80,000 salary, remit USD 30,000 to Thailand, receive USD 5,000 in dividends.</strong></p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Thai Tax Side (if resident).</strong> Salary remitted to Thailand: USD 30,000 (approximately THB 1,050,000 at 35 THB/USD). This is taxable income in Thailand. At Thailand's progressive rate of approximately 15% on this bracket, you owe approximately THB 157,500 (USD 4,500) in Thai tax. The remaining USD 50,000 salary stays in your US account; not remitted, so not taxed in Thailand. Dividends: If not remitted to Thailand, not taxed. If remitted, taxed as foreign-sourced income at a similar rate. Your Thai tax liability: approximately USD 4,500.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>US Tax Side.</strong> You file Form 1040 on worldwide income: USD 80,000 salary plus USD 5,000 dividends. Gross: USD 85,000. You have two choices.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;">Option A: FEIE (Form 2555). You exclude USD 80,000 of earned foreign income (salary). Your taxable income: USD 5,000 (dividends). At approximately 22% federal rate plus self-employment tax (if self-employed), you owe approximately USD 1,100 in US federal tax (plus state taxes depending on your US home state).</p>

        <p class="reveal" style="margin-bottom: 1.5rem;">Option B: FTC (Form 1116). You claim a foreign tax credit for Thai taxes paid (USD 4,500). Your US tax before credit: approximately USD 18,700 (on USD 85,000 at 22% federal rate). Your credit: USD 4,500. Your US tax after credit: USD 14,200. Option A saves you approximately USD 13,100. FEIE is better here.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Total Scenario.</strong> You earned USD 85,000, paid USD 4,500 Thai tax, paid USD 1,100 US tax. Effective rate: 6.7%. This is the power of FEIE: it avoids double taxation on earned foreign income.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">Visa Type Implications for Tax Planning</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Digital Nomad Visa (DTV).</strong> New in 2024, designed for remote workers and freelancers. Allows 180-day stay per permission. Tax implication: you can stay up to 180 days and remain a non-resident if you're careful about your day count. If you spend 180 days in Thailand on DTV, you become a tax resident and must file PND 90.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Non-Immigrant B Visa.</strong> Standard for employees and business owners. If you're employed by a Thai company, you're likely working in Thailand (Thailand-sourced income), taxable in Thailand. If you're remote working for a US employer on NI-B, you're still subject to the 180-day rule and remittance doctrine.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Elite Card / Long-Term Resident.</strong> These visas allow multi-year stays. Tax implication: you're likely to become a tax resident once you've been in Thailand 180 days in a calendar year. Plan for permanent Thai tax residency status.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>O-A (Retirement Visa).</strong> For retirees over 50. No work allowed. If you're on O-A with foreign pensions or investment income, you become a tax resident if you spend 180 days in Thailand. Foreign-sourced retirement income is taxable in Thailand on remittance.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">Documents to Keep and Forms to File</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Thai Side (PND 90/91 Filing).</strong> Keep passport with border stamps, employment contract or letter from US employer, bank statements (Thai and US) showing foreign income remittance, proof of income (pay stubs, 1099s, business records), receipts for deductible expenses (office rent, utilities, professional fees), lease agreement or property ownership documents, and visa extension approval letters. Keep these records for 5 years minimum.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>US Side (Form 1040 Filing).</strong> Keep W-2 or 1099 from US employer, proof of foreign tax paid (Thai tax receipts, Form 1042-S), proof of foreign residency (passport stamps, lease, visa extension documents), bank statements, and investment statements showing capital gains/dividends. Keep these records for 6 years minimum.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Key Forms.</strong> Thailand: PND 90 (personal income tax return), PND 91 (tax withheld reconciliation), TM.47 (90-day report, quarterly reminders to stay in compliance). US: Form 1040 (income tax return), Form 2555 (Foreign Earned Income Exclusion) or Form 1116 (Foreign Tax Credit), FinCEN Form 114 (FBAR), Form 8938 (FATCA). All deadlines: Thai filing by March 31, US filing by April 15 (June 15 with FBAR).</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">When to Consult a Specialist</h2>
        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Multiple Income Sources.</strong> Salary plus dividends, salary plus rental income, self-employment income plus business ownership. Coordinating FEIE vs. FTC becomes complex and requires specialist guidance.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Business Ownership.</strong> If you own a Thai business or a US business with Thai operations, tax liability expands significantly. Thai corporate tax, withholding tax, dividend treatment all require specialist guidance.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Large Remittances.</strong> If you're remitting significant amounts (USD 50,000+), tax planning around remittance timing can save thousands. A specialist can model scenarios.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Investments and Capital Gains.</strong> Selling US stocks or real estate while in Thailand creates capital gains tax consequences in both countries. Plan before selling.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Change in Residency Status.</strong> Moving to Thailand from the US, or vice versa, requires transition planning. Different filing deadlines and FEIE/FTC elections apply mid-year.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Visa Type Changes.</strong> Switching from DTV to Non-Immigrant B, or applying for Elite, affects your tax residency status and planning window.</p>

        <h2 class="reveal" style="font-size: 1.8rem; margin-bottom: 1rem; font-family: 'Libre Baskerville'; margin-top: 2.5rem;">FAQ: U.S. Expat Taxes in Thailand 2026</h2>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: Do I become a tax resident if I arrive on day 180?</strong> A: Yes. The 180-day rule is inclusive. Arriving on calendar day 180 counts as day 180, triggering tax residency.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: Can I use FEIE if I'm a Thai tax resident?</strong> A: Yes, but you must file Form 8833 (Treaty-Based Return Position Disclosure) if claiming benefits inconsistent with Thai tax residency. Coordinate carefully with a specialist.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: What if I earn income in cryptocurrency?</strong> A: Crypto gains are treated like any foreign-sourced income. Remittance doctrine applies: only amounts remitted to Thailand are taxed in Thailand. The US taxes all crypto gains regardless of remittance.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: Do I file Thai tax if I'm non-resident?</strong> A: No PND 90 if you're non-resident under the 180-day test. However, you may owe Thai tax on Thailand-sourced income (rental property, Thai business). You also still file US taxes on worldwide income.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: What's the FBAR threshold?</strong> A: USD 10,000 aggregate across all foreign financial accounts. If the total ever exceeds 10k in a calendar year, you must file FinCEN Form 114 (FBAR) by April 15.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: Can I deduct my cost of living in Thailand?</strong> A: No. Living expenses are non-deductible. However, if you're self-employed, legitimate business expenses (office rent, internet, professional services) are deductible on both Thai and US returns.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: What if I'm not sure whether I hit 180 days?</strong> A: Document every border crossing. If you're unsure, assume you're a tax resident and file PND 90. Failing to file when required incurs penalties. Proactive filing is safer.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;"><strong>Q: Can I amend a prior Thai or US tax return?</strong> A: Yes. Thailand allows amendments within 5 years of filing. The US allows amendments within 3 years of filing. Contact a specialist to review whether amending saves you money.</p>

        <p class="reveal" style="margin-bottom: 1.5rem;">For more details on specific topics, explore our related guides on <a href="/thailand/tax-residency-180-day-rule/" style="color: var(--blue-light); text-decoration: none; border-bottom: 1px solid var(--blue-light);">Tax Residency & 180-Day Rule</a>, <a href="/thailand/foreign-sourced-income-remittance/" style="color: var(--blue-light); text-decoration: none; border-bottom: 1px solid var(--blue-light);">Foreign Income & Remittance</a>, and <a href="/thailand/digital-nomads-remote-workers-thailand/" style="color: var(--blue-light); text-decoration: none; border-bottom: 1px solid var(--blue-light);">Digital Nomads & Remote Workers</a>.</p>
      </div>
    </section>'''

def replace_content_section(filepath, new_content):
    """Replace the <section id="content"> ... </section> block with new content"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Use regex to find and replace the content section
    # Match from <section id="content"... to </section> (the closing tag)
    pattern = r'    <!-- PAGE CONTENT.*?\n    <section id="content".*?</section>'

    # Extract the opening comment and start of content section
    opening = re.search(r'    <!-- PAGE CONTENT.*?\n', content)

    if opening:
        # Replace from opening comment to closing </section>
        start_pos = opening.start()
        # Find the matching closing </section> tag
        content_start = content.find('<section id="content"', start_pos)
        if content_start != -1:
            # Find closing section tag
            close_pos = content.find('    </section>', content_start)
            if close_pos != -1:
                close_pos += len('    </section>')
                # Replace the old content with new
                new_html = content[:start_pos] + '    <!-- PAGE CONTENT - OVERRIDE PER PAGE -->\n' + new_content + '\n' + content[close_pos:]

                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_html)
                return True

    return False

# Test with article 1
filepath = 'thailand/01-pillar.html'
if replace_content_section(filepath, ARTICLE_1_CONTENT):
    print(f"Successfully updated {filepath}")
else:
    print(f"Failed to update {filepath}")
