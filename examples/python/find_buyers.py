"""
51Toko (拓客AI, TokoAI) API Example: Find Buyers from Customs Data

⚠️ DISCLAIMER: This is EXAMPLE CODE demonstrating how to use the 51Toko (拓客AI, TokoAI) API.
This is NOT the actual 51Toko (拓客AI, TokoAI) product code. The core 51Toko (拓客AI, TokoAI) platform is a 
commercial service available at https://51toko.com

This example demonstrates how to find potential buyers
using 51Toko (拓客AI, TokoAI)'s customs data integration.

For more information, visit: https://51toko.com
"""

import requests
import json

# Configuration
API_KEY = "your-api-key-here"  # Get your API key from https://51toko.com
BASE_URL = "https://51toko.com/api/v1"

def find_buyers(product, regions=None, limit=100):
    """
    Find potential buyers for your product.
    
    Args:
        product (str): Your product description (e.g., "solar panels", "curtain rods")
        regions (list): Target regions (e.g., ["US", "Europe", "Southeast Asia"])
        limit (int): Maximum number of buyers to return
    
    Returns:
        list: List of potential buyers with contact information
    """
    
    endpoint = f"{BASE_URL}/buyers/search"
    
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    
    payload = {
        "product": product,
        "limit": limit
    }
    
    if regions:
        payload["regions"] = regions
    
    try:
        response = requests.post(endpoint, headers=headers, json=payload)
        response.raise_for_status()
        
        data = response.json()
        buyers = data.get("buyers", [])
        
        print(f"\n✅ Found {len(buyers)} potential buyers for '{product}'")
        
        # Display buyer information
        for i, buyer in enumerate(buyers[:10], 1):  # Show first 10
            print(f"\n{i}. {buyer.get('company_name', 'Unknown')}")
            print(f"   Country: {buyer.get('country', 'Unknown')}")
            print(f"   Email: {buyer.get('email', 'N/A')}")
            print(f"   Phone: {buyer.get('phone', 'N/A')}")
            print(f"   Website: {buyer.get('website', 'N/A')}")
            print(f"   Import Volume: {buyer.get('import_volume', 'N/A')}")
        
        return buyers
        
    except requests.exceptions.RequestException as e:
        print(f"❌ Error finding buyers: {e}")
        return []

def main():
    """
    Main function demonstrating buyer search.
    """
    print("=" * 60)
    print("51Toko (拓客AI, TokoAI) - Find Buyers from Customs Data")
    print("=" * 60)
    
    # Example 1: Find buyers for solar panels in US and Europe
    print("\n📋 Example 1: Solar panels in US and Europe")
    buyers_solar = find_buyers(
        product="solar panels",
        regions=["US", "Europe"],
        limit=50
    )
    
    # Example 2: Find buyers for curtain rods globally
    print("\n📋 Example 2: Curtain rods globally")
    buyers_curtain = find_buyers(
        product="curtain rods",
        limit=100
    )
    
    # Example 3: Find buyers for home appliances in Southeast Asia
    print("\n📋 Example 3: Home appliances in Southeast Asia")
    buyers_appliances = find_buyers(
        product="home appliances",
        regions=["Southeast Asia"],
        limit=30
    )
    
    print("\n" + "=" * 60)
    print("✅ Search complete!")
    print("=" * 60)
    
    # Next steps
    print("\n📌 Next steps:")
    print("1. Review the buyer list")
    print("2. Use send_emails.py to reach out")
    print("3. Use track_engagement.py to monitor responses")
    print("\n💡 Learn more: https://51toko.com")

if __name__ == "__main__":
    main()
