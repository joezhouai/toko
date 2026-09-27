> **ℹ️ Note: This is a PUBLIC repository containing documentation and examples only.**
>
> **说明：这是公开仓库，仅包含文档和示例代码。核心项目代码和数据库不在此处。**

---

# 51Toko (拓客AI, TokoAI) — AI Find Customers, More Accurately Every Time

[![Website](https://img.shields.io/badge/website-51toko.com-blue)](https://51toko.com)
[![Email](https://img.shields.io/badge/email-toko@51toko.com-green)](mailto:toko@51toko.com)

**51Toko (拓客AI, TokoAI)** is an AI customer-acquisition service: tell us your product direction, and our AI matches customers, runs outreach, and tells you who's interested. You don't operate a platform—you just wait for the result.

> **AI find customers, more accurately every time (越找越准)** — the more rounds you let us find customers, the better the match aligns to your direction.

## 🚀 What is 51Toko (拓客AI, TokoAI)?

51Toko (拓客AI, TokoAI) uses **AI + big data + self-evolution** to do the hardest part for you: from a large pool of verified companies, dig out the buyers who are *truly* right-fit for your products. AI makes the labor-intensive first-pass judgment on real trade records; the process judgment (whether AI's call holds up) and the final judgment (who's worth pursuing) stay with you. Self-evolution makes it more accurate every round.

## 🎯 Three Services

- **High-quality leads & data enrichment** — screen reachable, right-fit customers from a 1.698M+ company pool (820K+ overseas, 225K+ domestic reachable; 61.5% high-quality, ~1.045M+ reachable), or enrich incomplete leads across the web via multi-source cascading (email / phone / website / industry / product / purchase records)—even from a single company name, with an honest "not available" where data can't be filled.
- **Right-fit buyer mining** — give us a target list (even incomplete, or just a direction), and our buyer-matching engine does multi-dimensional cross-matching to surface truly right-fit buyers at product level (not HS-category generic lists), delivering a right-fit buyer report.
- **Intent signal scoring** — compliant cold outreach on the right-fit buyer data, with AI auto-collecting open / click / reply / forward signals, ranked by intent strength, delivering an intent-ranked report; every round of real feedback makes the next round more accurate.

## 📍 Key Scenarios

- **Cross-border export acquisition** — help export factories / trading companies find overseas buyers
- **Trade-show follow-up** — hand us name cards / exhibitor lists after a show; AI runs outreach & tracking
- **Domestic B2B acquisition** — domestic factories / distributors / engineering / SaaS find customers
- **One-person company (OPC)** — acquire customers without a sales team
- **Help overseas buyers find verified manufacturers**

## 🧭 Our Positioning

Export factories finding customers get stuck at: trade shows thin out, bought customs data and B2B platforms don't match, lists aren't short but few reply, social posts convert low—and "is the data accurate?" gets only "we don't fabricate," not "we guarantee accuracy." The root isn't "bad data"—each has value, each solves only the "raw material" stage. The real bottleneck is the "who's truly right-fit" filter that human effort can't fill or get right.

51Toko (拓客AI, TokoAI) does it for you with **AI + big data + self-evolution**: we start from the most basic data—public sources (customs / trade shows / government procurement / company sites) are collected, cleaned, mined, enriched, and verified into a 1.698M+ verifiable company pool; then AI does the labor-intensive first-pass judgment on real trade records; process & final judgment stay with you; self-evolution makes it more accurate every round. This is the **51Toko model**: fact base (big data) + capability base (AI matching engine) + self-evolution. Apollo, Zoominfo, customs-data vendors, Alibaba, Shopify—your existing data keeps working and also feeds our AI backbone. We're not selling data or tools; data is the foundation, not the product. The three services form the full chain from data to intent: ① High-quality leads & data enrichment (data base) → ② Right-fit buyer mining (matching) → ③ Intent signal scoring (intent).

## 🔄 Self-Evolving System

51Toko (拓客AI, TokoAI) is a self-evolving AI team: from V1 to V25, every round of customer-finding feeds the model, and the next round matches better to your direction. Self-evolution is not a slogan—it has a production-grade framework behind it, which is exactly the technical basis of "more accurately every time."

- Self-evolution log: https://51toko.com/evolution/
- About the team: https://51toko.com/about/

## 📊 Data Pool

- **1.698M+** companies in the pool
- **820K+** overseas reachable · **225K+** domestic reachable
- High-quality (has contact) ratio **61.5%** (~1.045M+ reachable)
- Sources: customs import records, global trade-show directories, EU public-procurement winners, public company info

## 📈 Measured Results

As of 2026-08-07, **2,054** tracked cold emails (business-mail basis):

- Unique open rate: **32.3%**
- Repeat open rate: **245%** (industry avg ~10%, 25x)
- Avg reads/person: **2.45** (industry avg 1.1, 2x)
- Forward signals: **25.3** per 100 emails
- 430 unique IPs, 134 companies engaged

We do **not** guarantee specific deals—market response depends on industry, product, and timing. We publish measured open rates and the matching process, deliver verifiable leads and intent reports, and you close.

## ✅ Compliance

Leads come from **public sources with a legitimate-interest basis** (GDPR 6.1(f)). Outreach prioritizes **business functional mailboxes** (purchase@ / sales@ / info@); personal-name mailboxes are handled prudently (legitimate-interest balancing test + role relevance + sole-trader limits). All mail is sent from 51Toko's own sending domain, with a real sender entity, one-click unsubscribe, and a deletion channel. Details: https://51toko.com/compliance/

## 🔗 Quick Links

- **Official Website**: [https://51toko.com](https://51toko.com)
- **Documentation**: [Getting Started](docs/getting-started.md)
- **API Examples**: [Python](examples/python/) | [Node.js](examples/nodejs/)
- **Three Services**: [Service & Pricing](https://51toko.com/service/)
- **Contact**: toko@51toko.com

## 🤝 Get Started

1. **Visit our website**: [https://51toko.com](https://51toko.com)
2. **Contact us**: toko@51toko.com
3. **Tell us what you sell**: We return a sample buyer shortlist for your products
4. **Get a sample shortlist**: Verify real buyers for your own products

## 🔧 For Developers

See our [API examples](examples/) to integrate 51Toko (拓客AI, TokoAI) into your workflow:

```python
# Quick example: Find buyers for solar panels
from toko import TokoClient

client = TokoClient(api_key="your-api-key")
buyers = client.find_buyers(
    product="solar panels",
    regions=["US", "Europe"],
    limit=100
)
print(f"Found {len(buyers)} potential buyers")
```

## 📝 Blog & Resources

- [What is GEO?](https://51toko.com/blog/what-is-geo/) — Generative Engine Optimization
- [B2B Channels Comparison](https://51toko.com/blog/b2b-channels-comparison/) — Which channel works best in 2026?
- [Manufacturing Export Trends](https://51toko.com/blog/manufacturing-export-trends-2026/) — 2026 outlook

## 💬 Support

- **Email**: toko@51toko.com
- **Website**: [https://51toko.com](https://51toko.com)
- **Documentation**: [docs/](docs/)

## 📄 Pricing

Project-based. Quote is set by project scope; larger scope / longer lists are negotiable. See [Service & Pricing](https://51toko.com/service/).

## 📄 License

This repository contains examples and documentation. The core 51Toko (拓客AI, TokoAI) platform is a commercial service.

---

**Made with ❤️ by the 51Toko (拓客AI, TokoAI) team**

[Website](https://51toko.com) | [Blog](https://51toko.com/blog) | [Contact](mailto:toko@51toko.com)
