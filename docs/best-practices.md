# Best Practices for Using TokoAI

This guide covers best practices for getting the most out of TokoAI's AI-powered customer acquisition platform.

## 🎯 Define Your Ideal Customer Profile (ICP)

### Be Specific About Your Product

❌ **Too vague**: "We sell electronics"
✅ **Specific**: "We manufacture monocrystalline solar panels, 400W+, Tier 1 certified"

❌ **Too vague**: "We export furniture"
✅ **Specific**: "We produce solid wood dining tables and chairs, FSC certified"

### Why Specificity Matters

- AI matching is more accurate
- You attract qualified buyers
- Higher conversion rates
- Less wasted outreach

### Template for Product Definition

```
We [manufacture/trade/supply] [specific product]
with [key features/certifications]
for [target application/industry].
```

**Example**:
```
We manufacture stainless steel kitchen sinks
with nano-coating technology and water-saving faucets
for residential and commercial applications.
```

## 🌍 Target the Right Markets

### Research Market Demand

```python
# Before committing to a market, analyze demand
market_analysis = client.analyze_market(
    product="solar panels",
    regions=["Germany", "Italy", "Spain", "France"]
)

for region in market_analysis:
    print(f"{region['name']}:")
    print(f"  Import volume: ${region['import_volume']:,}")
    print(f"  Growth rate: {region['growth_rate']}%")
    print(f"  Competition: {region['competition_level']}")
    print(f"  Recommended: {region['recommendation']}")
```

### Prioritize Markets

Focus on markets with:
- ✅ High import volume
- ✅ Positive growth rate
- ✅ Moderate competition
- ✅ Good payment terms history

### Market Entry Strategy

```python
# Phase 1: Test markets
test_markets = ["US", "UK"]
buyers = client.find_buyers(
    product="your product",
    regions=test_markets,
    limit=20  # Small test batch
)

# Phase 2: Scale successful markets
if conversion_rate > 5%:
    scale_markets = ["US", "UK", "Germany", "Australia"]
    buyers = client.find_buyers(
        product="your product",
        regions=scale_markets,
        limit=100
    )
```

## 📧 Craft Effective Outreach

### Email Subject Lines

**Good subject lines**:
- "Solar Panel Supply for [Company Name]"
- "Partnership Opportunity: [Your Company] × [Their Company]"
- "[Product] Supplier - [Key Benefit]"

**Bad subject lines**:
- "Hello" (too generic)
- "Business Proposal" (vague)
- "URGENT: Read Now" (spammy)

### Email Body Structure

```
1. Personalization (1-2 sentences)
   - Mention their import history
   - Reference their company specifically

2. Value Proposition (2-3 sentences)
   - What you offer
   - Why it matters to them
   - Key differentiators

3. Social Proof (1-2 sentences)
   - Certifications
   - Notable clients
   - Track record

4. Call to Action (1 sentence)
   - Clear next step
   - Low commitment (e.g., "15-minute call")
```

### Example Email

```
Subject: Solar Panel Supply for Green Energy Distributors

Hi [Name],

I noticed Green Energy Distributors imported 2.5MW of solar panels last year. 
We're a Tier 1 manufacturer specializing in high-efficiency monocrystalline panels.

Our 400W+ panels come with 25-year warranty and are currently supplying 
projects across Europe. We offer competitive pricing and reliable delivery.

Would you be open to a 15-minute call next week to discuss how we can 
support your 2026 procurement plans?

Best regards,
[Your Name]
```

## 📊 Track and Optimize

### Key Metrics to Monitor

```python
# Track campaign performance
campaign_stats = client.get_campaign_stats(campaign_id="solar-eu-2026")

print(f"Emails sent: {campaign_stats['sent']}")
print(f"Open rate: {campaign_stats['open_rate']}%")
print(f"Click rate: {campaign_stats['click_rate']}%")
print(f"Reply rate: {campaign_stats['reply_rate']}%")
print(f"Conversion rate: {campaign_stats['conversion_rate']}%")
```

### Benchmark Targets

| Metric | Target | Action if Below |
|--------|--------|-----------------|
| Open rate | >50% | Improve subject lines |
| Click rate | >15% | Improve email content |
| Reply rate | >10% | Better targeting |
| Conversion rate | >3% | Qualify buyers better |

### A/B Testing

```python
# Test different approaches
campaign_a = client.create_campaign(
    name="solar-test-subject",
    subject="Solar Panel Supply for [Company]",
    buyers=buyers[:50]
)

campaign_b = client.create_campaign(
    name="solar-test-benefit",
    subject="Cut Solar Costs by 30% - Tier 1 Supplier",
    buyers=buyers[50:100]
)

# Compare results after 7 days
stats_a = client.get_campaign_stats("solar-test-subject")
stats_b = client.get_campaign_stats("solar-test-benefit")

print(f"Campaign A open rate: {stats_a['open_rate']}%")
print(f"Campaign B open rate: {stats_b['open_rate']}%")
```

## 🔄 Follow-Up Strategy

### Follow-Up Sequence

```
Day 0: Initial email
Day 3: Follow-up #1 (add value)
Day 7: Follow-up #2 (case study)
Day 14: Follow-up #3 (final)
```

### Follow-Up Email Examples

**Follow-up #1 (Day 3)**:
```
Subject: Re: Solar Panel Supply for [Company]

Hi [Name],

Just following up on my previous email. I wanted to share our latest 
product catalog featuring 2026's most efficient panels.

[Link to catalog]

Happy to answer any questions.

Best,
[Your Name]
```

**Follow-up #2 (Day 7)**:
```
Subject: Case Study: How [Similar Company] Reduced Costs 25%

Hi [Name],

I thought you might find this case study interesting. [Similar Company] 
switched to our panels and reduced their LCOE by 25%.

[Link to case study]

Would love to discuss how we can achieve similar results for you.

Best,
[Your Name]
```

**Follow-up #3 (Day 14)**:
```
Subject: Final follow-up

Hi [Name],

I understand you're busy. If solar panel sourcing isn't a priority 
right now, no worries at all.

If things change, feel free to reach out. We're here to help.

Best regards,
[Your Name]
```

## 🎨 Personalization at Scale

### Use Buyer Data

```python
for buyer in buyers:
    # Personalize based on their import history
    if "solar panels" in buyer['import_history']:
        product_focus = "solar panels"
    elif "inverters" in buyer['import_history']:
        product_focus = "complete solar solutions"
    else:
        product_focus = "renewable energy products"
    
    # Personalize based on their region
    if buyer['region'] == "Europe":
        certification_focus = "CE, TUV certified"
    elif buyer['region'] == "US":
        certification_focus = "UL certified"
    
    email = client.generate_email(
        buyer=buyer,
        product_focus=product_focus,
        certification_focus=certification_focus
    )
```

### Dynamic Content

```python
# Customize email content based on buyer profile
def customize_email(buyer):
    content = {
        "greeting": f"Hi {buyer['contact_name']}",
        "company_reference": buyer['company_name'],
        "product_match": match_products(buyer['imports'], our_products),
        "certification": get_regional_certifications(buyer['region']),
        "case_study": get_relevant_case_study(buyer['industry'])
    }
    return content
```

## 📈 Scale Successfully

### Phase 1: Validation (Month 1)
- Target: 1-2 markets
- Buyers: 50-100
- Goal: Validate messaging and targeting

### Phase 2: Optimization (Month 2-3)
- Target: 3-5 markets
- Buyers: 200-500
- Goal: Optimize based on data

### Phase 3: Scale (Month 4+)
- Target: 5-10 markets
- Buyers: 500-1000+
- Goal: Maximize ROI

### Scaling Checklist

- [ ] Messaging validated (open rate >50%)
- [ ] Targeting refined (reply rate >10%)
- [ ] Follow-up sequence tested
- [ ] CRM integration ready
- [ ] Sales team trained
- [ ] Fulfillment capacity confirmed

## 🛡️ Avoid Common Mistakes

### ❌ Mistake 1: Too Generic

**Problem**: "We sell electronics" to everyone
**Solution**: Specific product + specific buyer

### ❌ Mistake 2: Ignoring Data

**Problem**: Not tracking open/click/reply rates
**Solution**: Monitor metrics weekly, optimize monthly

### ❌ Mistake 3: No Follow-Up

**Problem**: Single email, then give up
**Solution**: 3-4 follow-ups over 2 weeks

### ❌ Mistake 4: Poor Targeting

**Problem**: Contacting irrelevant buyers
**Solution**: Use filters (import volume, buyer type, region)

### ❌ Mistake 5: Spammy Emails

**Problem**: ALL CAPS, excessive punctuation, spam words
**Solution**: Professional, personalized, value-focused

## 🔧 Advanced Tips

### Use HS Codes for Precision

```python
# HS codes provide precise product matching
buyers = client.find_buyers(
    hs_code="854140",  # Solar cells/modules
    regions=["US", "Europe"],
    limit=100
)
```

### Leverage Seasonal Trends

```python
# Identify seasonal buying patterns
seasonal_data = client.get_seasonal_trends(
    product="outdoor furniture",
    regions=["US"]
)

# Result: Peak ordering in Q1 for summer season
# Start outreach in January
```

### Multi-Channel Approach

```python
# Combine email with other channels
for buyer in buyers:
    # Email
    client.send_email(to=buyer['email'], ...)
    
    # LinkedIn (if available)
    if buyer['linkedin']:
        client.send_linkedin_message(to=buyer['linkedin'], ...)
    
    # Phone (for high-value prospects)
    if buyer['import_volume'] > 1000000:
        client.schedule_call(buyer['phone'], ...)
```

## 📚 Resources

- **Documentation**: [Getting Started](getting-started.md)
- **API Examples**: [Python](../examples/python/) | [Node.js](../examples/nodejs/)
- **Use Cases**: [Manufacturing](../use-cases/manufacturing.md) | [Trading](../use-cases/trading.md) | [E-commerce](../use-cases/ecommerce.md)
- **Website**: [https://51toko.com](https://51toko.com)
- **Support**: toko@51toko.com

---

**Ready to implement these best practices?** [Start your free trial](https://51toko.com)
