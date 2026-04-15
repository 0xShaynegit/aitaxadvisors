#!/usr/bin/env python3
"""
Thailand Article Rewrite - Comprehensive Update Script
Updates meta tags, content sections, and prepares for file renames
"""

import re
from pathlib import Path

# Define article updates
articles = {
    "01-pillar.html": {
        "new_file": "master-guide.html",
        "title": "U.S. Expat Taxes in Thailand 2026: The Complete Guide for Americans",
        "description": "Complete guide to US expat taxes in Thailand 2026. Covers 180-day rule, foreign income, remittance rules, Thai and US tax filing, FEIE, FTC, and FBAR compliance.",
        "canonical": "https://aitaxadvisors.com/thailand/us-expat-taxes-thailand-2026/",
        "og_url": "https://aitaxadvisors.com/thailand/us-expat-taxes-thailand-2026/",
        "og_title": "U.S. Expat Taxes in Thailand 2026: Complete Guide for Americans",
        "og_description": "Expert guide to US expat taxes in Thailand 2026. Master the 180-day rule, foreign-sourced income, remittance doctrine, FEIE strategy, and cross-border tax compliance."
    },
    "02-residency.html": {
        "new_file": "residency-180-day.html",
        "title": "Thailand Tax Residency and the 180-Day Rule for U.S. Citizens (2026 Guide)",
        "description": "Expert guide to Thai tax residency and the 180-day rule. Learn how residency status affects your worldwide income taxation and filing obligations.",
        "canonical": "https://aitaxadvisors.com/thailand/tax-residency-180-day-rule/",
        "og_url": "https://aitaxadvisors.com/thailand/tax-residency-180-day-rule/",
        "og_title": "Thailand Tax Residency: The 180-Day Rule for U.S. Citizens",
        "og_description": "Master Thailand's 180-day tax residency rule. Understand day counting, grace periods, multi-year planning, and how residency status affects your tax obligations."
    },
    "03-foreign-income.html": {
        "new_file": "foreign-income.html",
        "title": "Do Americans Pay Thai Tax on Foreign Income in 2026? A U.S.-Thailand Perspective",
        "description": "Expert analysis of Thailand's remittance doctrine and foreign-sourced income taxation. Learn what triggers Thai tax on income earned abroad.",
        "canonical": "https://aitaxadvisors.com/thailand/foreign-sourced-income-remittance/",
        "og_url": "https://aitaxadvisors.com/thailand/foreign-sourced-income-remittance/",
        "og_title": "Foreign-Sourced Income & Remittance Doctrine for Thailand Expats",
        "og_description": "Understand Thailand's remittance doctrine: when foreign-sourced income becomes taxable in Thailand, planning strategies, and the 2024-2026 grace period."
    },
    "04-digital-nomads.html": {
        "new_file": "digital-nomads.html",
        "title": "Digital Nomad in Thailand? U.S. Tax & Thai Tax Rules You Can't Ignore (2026)",
        "description": "Complete tax guide for digital nomads and remote workers in Thailand. DTV visa rules, US FEIE strategy, Thai residency thresholds, and compliance essentials.",
        "canonical": "https://aitaxadvisors.com/thailand/digital-nomads-remote-workers-thailand/",
        "og_url": "https://aitaxadvisors.com/thailand/digital-nomads-remote-workers-thailand/",
        "og_title": "Digital Nomads & Remote Workers in Thailand: 2026 Tax Rules",
        "og_description": "Tax guide for digital nomads in Thailand. Master DTV visa implications, FEIE strategy, 180-day residency planning, and staying compliant while working online."
    },
    "05-retiring.html": {
        "new_file": "retiring-thailand.html",
        "title": "Retiring in Thailand as an American: U.S. & Thai Tax Planning for 2026",
        "description": "Tax planning guide for American retirees in Thailand. Social Security, pensions, 401(k), IRA withdrawals, visa strategies, and cross-border tax coordination.",
        "canonical": "https://aitaxadvisors.com/thailand/retiring-in-thailand-us-tax-planning/",
        "og_url": "https://aitaxadvisors.com/thailand/retiring-in-thailand-us-tax-planning/",
        "og_title": "Retiring in Thailand: U.S. & Thai Tax Planning for Americans",
        "og_description": "Retirement tax planning for Americans in Thailand. Master Social Security taxation, pension income, RMDs, investment income, and visa-based tax strategies."
    },
    "06-thai-filing.html": {
        "new_file": "thai-filing.html",
        "title": "How to File Thai Income Tax as a U.S. Expat: PND 90/91 Step-by-Step (2026)",
        "description": "Step-by-step guide to filing PND 90 and PND 91 Thai income tax forms. Deductions, documents, deadlines, and working with Thai accountants.",
        "canonical": "https://aitaxadvisors.com/thailand/how-to-file-thai-tax-as-an-expat/",
        "og_url": "https://aitaxadvisors.com/thailand/how-to-file-thai-tax-as-an-expat/",
        "og_title": "Thai Income Tax Filing: PND 90/91 for U.S. Expats",
        "og_description": "Master Thai tax filing: PND 90 and PND 91 forms, deductible expenses, documents needed, deadlines, extensions, and how to work with Thai accountants."
    },
    "07-us-filing.html": {
        "new_file": "us-filing-thailand.html",
        "title": "Filing U.S. Taxes from Thailand: FEIE, FTC, FBAR & Avoiding Double Taxation (2026)",
        "description": "Complete US tax filing guide for expats in Thailand. FEIE vs FTC strategy, FBAR and FATCA compliance, forms, deadlines, and avoiding double taxation.",
        "canonical": "https://aitaxadvisors.com/thailand/filing-us-taxes-from-thailand/",
        "og_url": "https://aitaxadvisors.com/thailand/filing-us-taxes-from-thailand/",
        "og_title": "Filing U.S. Taxes from Thailand: FEIE, FTC, FBAR Strategy",
        "og_description": "US tax filing for Thailand expats: FEIE vs FTC strategy, FBAR and FATCA requirements, forms, deadlines, estimated tax payments, and avoiding double taxation."
    }
}

def update_meta_tags(filepath, article_config):
    """Update meta tags in HTML file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Update title
    content = re.sub(
        r'<title>[^<]+</title>',
        f'<title>{article_config["title"]}</title>',
        content
    )

    # Update description meta tag
    content = re.sub(
        r'<meta name="description" content="[^"]+">',
        f'<meta name="description" content="{article_config["description"]}">',
        content
    )

    # Update canonical
    content = re.sub(
        r'<link rel="canonical" href="[^"]+">',
        f'<link rel="canonical" href="{article_config["canonical"]}">',
        content
    )

    # Update og:url
    content = re.sub(
        r'<meta property="og:url" content="[^"]+">',
        f'<meta property="og:url" content="{article_config["og_url"]}">',
        content
    )

    # Update og:title
    content = re.sub(
        r'<meta property="og:title" content="[^"]+">',
        f'<meta property="og:title" content="{article_config["og_title"]}">',
        content
    )

    # Update og:description
    content = re.sub(
        r'<meta property="og:description" content="[^"]+">',
        f'<meta property="og:description" content="{article_config["og_description"]}">',
        content
    )

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Updated meta tags for {filepath}")

# Process each article
import os
base_path = Path(os.getcwd()) / 'thailand'
if not base_path.exists():
    # Try alternate path
    base_path = Path('/c/ZZZWebsites/aitaxadvisors/thailand')
for old_file, config in articles.items():
    filepath = base_path / old_file
    if filepath.exists():
        try:
            update_meta_tags(filepath, config)
        except Exception as e:
            print(f"Error processing {old_file}: {e}")
    else:
        print(f"File not found: {filepath}")

print("\nMeta tag updates complete!")
print("Next step: Replace content sections in each file")
print("Then: Rename files using git mv")
print("Finally: Commit changes")
