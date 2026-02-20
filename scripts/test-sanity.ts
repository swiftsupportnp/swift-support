import { client } from '../src/lib/sanity';

console.log('Testing Sanity Client...');
try {
    const data = await client.fetch('*[_type == "siteSettings"][0]');
    console.log('Fetch success:', data ? 'Data found' : 'No data');
} catch (error) {
    console.error('Fetch failed:', error);
}
