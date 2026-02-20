import { createClient } from '@sanity/client';
import "dotenv/config";

const client = createClient({
    projectId: 'zh1evkmv',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-02-20',
    token: process.env.SANITY_API_WRITE_TOKEN,
});

async function run() {
    console.log("Patching documents...");
    try {
        await client.patch('87fd8433-3683-47a8-b710-f2a1c4ebdb1d').set({
            name: 'Rajan Shrestha',
            role: 'CEO, Himalayan Exports Pvt. Ltd.',
            initials: 'RS'
        }).unset(['author', 'location']).commit();

        await client.patch('cc83a2b1-09dc-42c0-8436-8437c5e1c6e6').set({
            name: 'Sunita Maharjan',
            role: 'Founder, Kathmandu Crafts',
            initials: 'SM'
        }).unset(['author', 'location']).commit();

        await client.patch('d2a1cc2d-9ff0-4065-972b-5387dd9fbca5').set({
            name: 'Bikash Thapa',
            role: 'Director, Peak Solutions',
            initials: 'BT'
        }).unset(['author', 'location']).commit();

        console.log("Patched successfully!");
    } catch (e) {
        console.error("Error patching:", e.message);
    }
}

run();
