# Getting Started with TokoAI

Welcome to TokoAI! This guide will help you get started with AI-powered B2B customer acquisition.

## 🚀 Quick Start

### 1. Sign Up

Visit [https://51toko.com](https://51toko.com) and create an account.

### 2. Get Your API Key

1. Log in to your account
2. Navigate to **Settings** → **API Keys**
3. Click **Generate New Key**
4. Copy your API key (you'll need it for the examples)

### 3. Install Dependencies

```bash
pip install requests
```

### 4. Run Your First Search

```python
from toko import TokoClient

client = TokoClient(api_key="your-api-key-here")
buyers = client.find_buyers(product="solar panels", limit=10)
print(f"Found {len(buyers)} buyers!")
```

## 📚 What is TokoAI?

TokoAI is an AI-powered customer acquisition platform that helps you:

- **Find overseas buyers** from global customs data, trade shows, and industry databases
- **Match automatically** based on your product and target markets
- **Reach out** with AI-generated personalized emails
- **Track engagement** - see who opens, clicks, and responds
- **Learn and improve** - the system gets smarter with every interaction

## 🎯 Key Features

### 1. AI Buyer Matching

Our AI analyzes:
- Global customs import/export records
- Trade show exhibitor and visitor data
- Industry directories and databases
- Company websites and product catalogs

To find buyers who are actively importing products like yours.

### 2. Automated Outreach

- AI-generated personalized emails
- Multi-language support
- Follow-up sequences
- A/B testing capabilities

### 3. Engagement Tracking

Real-time visibility into:
- Email opens
- Link clicks
- Reply rates
- Buyer interest signals

### 4. Self-Evolving System

The system learns from:
- Which buyers respond
- What messages work best
- Which industries convert
- Seasonal patterns

## 💡 Use Cases

### For Manufacturers

**Scenario**: You manufacture solar panels and want to find importers in Europe.

**Solution**:
```python
buyers = client.find_buyers(
    product="solar panels",
    regions=["Germany", "France", "Italy", "Spain"],
    import_volume_min=100000  # Minimum $100k annual imports
)
```

**Result**: List of European companies actively importing solar panels, with contact information.

### For Trading Companies

**Scenario**: You trade in home appliances and want to expand to Southeast Asia.

**Solution**:
```python
buyers = client.find_buyers(
    product="home appliances",
    regions=["Vietnam", "Thailand", "Indonesia", "Malaysia"],
    limit=100
)
```

**Result**: 100 potential distributors and retailers in Southeast Asia.

### For Cross-Border E-commerce

**Scenario**: You sell curtain rods and want to find B2B customers.

**Solution**:
```python
buyers = client.find_buyers(
    product="curtain rods",
    buyer_type=["distributor", "retailer", "wholesaler"],
    limit=50
)
```

**Result**: B2B buyers who purchase curtain rods in bulk.

## 🔧 API Examples

See our code examples:
- [Python Examples](../examples/python/)
- [Node.js Examples](../examples/nodejs/) (coming soon)

## 📊 Expected Results

Our customers typically see:
- **70%+** time saved on prospecting
- **3x** more qualified leads
- **50%** reduction in customer acquisition cost
- **Real-time** visibility into buyer interest

## 🌍 Global Coverage

TokoAI covers buyers worldwide:
- **North America**: USA, Canada, Mexico
- **Europe**: UK, Germany, France, Italy, Spain, Netherlands, Poland
- **Asia Pacific**: Australia, Japan, South Korea, Southeast Asia
- **Middle East**: UAE, Saudi Arabia, Turkey
- **Africa**: South Africa, Nigeria, Egypt
- **Latin America**: Brazil, Argentina, Chile, Colombia

## 💬 Support

- **Email**: toko@51toko.com
- **Website**: [https://51toko.com](https://51toko.com)
- **Documentation**: [https://51toko.com/docs](https://51toko.com/docs)

## 🎓 Next Steps

1. **Read the examples** - See how to use the API
2. **Try a search** - Find buyers for your product
3. **Send outreach** - Contact matched buyers
4. **Track results** - Monitor engagement
5. **Optimize** - Refine your strategy based on data

---

**Ready to get started?** [Sign up at 51toko.com](https://51toko.com)
