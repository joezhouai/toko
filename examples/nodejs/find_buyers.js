/**
 * 51Toko (拓客AI, TokoAI) API Example: Find Buyers from Customs Data (Node.js)
 * 
 * ⚠️ DISCLAIMER: This is EXAMPLE CODE demonstrating how to use the 51Toko (拓客AI, TokoAI) API.
 * This is NOT the actual 51Toko (拓客AI, TokoAI) product code. The core 51Toko (拓客AI, TokoAI) platform is a 
 * commercial service available at https://51toko.com
 * 
 * This example demonstrates how to find potential buyers
 * using 51Toko (拓客AI, TokoAI)'s customs data integration.
 * 
 * For more information, visit: https://51toko.com
 */

const axios = require('axios');

// Configuration
const API_KEY = 'your-api-key-here'; // Get your API key from https://51toko.com
const BASE_URL = 'https://51toko.com/api/v1';

/**
 * Find potential buyers for your product
 * 
 * @param {string} product - Your product description
 * @param {Array} regions - Target regions (e.g., ["US", "Europe"])
 * @param {number} limit - Maximum number of buyers to return
 * @returns {Promise<Array>} List of potential buyers
 */
async function findBuyers(product, regions = null, limit = 100) {
    const endpoint = `${BASE_URL}/buyers/search`;
    
    const headers = {
        'Authorization': `Bearer ${API_KEY}`,
        'Content-Type': 'application/json'
    };
    
    const payload = {
        product: product,
        limit: limit
    };
    
    if (regions) {
        payload.regions = regions;
    }
    
    try {
        const response = await axios.post(endpoint, payload, { headers });
        const buyers = response.data.buyers || [];
        
        console.log(`\n✅ Found ${buyers.length} potential buyers for '${product}'`);
        
        // Display buyer information
        buyers.slice(0, 10).forEach((buyer, index) => {
            console.log(`\n${index + 1}. ${buyer.company_name || 'Unknown'}`);
            console.log(`   Country: ${buyer.country || 'Unknown'}`);
            console.log(`   Email: ${buyer.email || 'N/A'}`);
            console.log(`   Phone: ${buyer.phone || 'N/A'}`);
            console.log(`   Website: ${buyer.website || 'N/A'}`);
            console.log(`   Import Volume: $${buyer.import_volume || 'N/A'}`);
        });
        
        return buyers;
        
    } catch (error) {
        console.error('❌ Error finding buyers:', error.message);
        return [];
    }
}

/**
 * Main function demonstrating buyer search
 */
async function main() {
    console.log('='.repeat(60));
    console.log('51Toko (拓客AI, TokoAI) - Find Buyers from Customs Data (Node.js)');
    console.log('='.repeat(60));
    
    // Example 1: Find buyers for solar panels in US and Europe
    console.log('\n📋 Example 1: Solar panels in US and Europe');
    const buyersSolar = await findBuyers(
        'solar panels',
        ['US', 'Europe'],
        50
    );
    
    // Example 2: Find buyers for curtain rods globally
    console.log('\n📋 Example 2: Curtain rods globally');
    const buyersCurtain = await findBuyers(
        'curtain rods',
        null,
        100
    );
    
    // Example 3: Find buyers for home appliances in Southeast Asia
    console.log('\n📋 Example 3: Home appliances in Southeast Asia');
    const buyersAppliances = await findBuyers(
        'home appliances',
        ['Southeast Asia'],
        30
    );
    
    console.log('\n' + '='.repeat(60));
    console.log('✅ Search complete!');
    console.log('='.repeat(60));
    
    // Next steps
    console.log('\n📌 Next steps:');
    console.log('1. Review the buyer list');
    console.log('2. Use send_emails.js to reach out');
    console.log('3. Use track_engagement.js to monitor responses');
    console.log('\n💡 Learn more: https://51toko.com');
}

// Run the example
if (require.main === module) {
    main().catch(console.error);
}

module.exports = { findBuyers };
