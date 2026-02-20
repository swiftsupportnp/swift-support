import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Site Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Site Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'favicon',
            title: 'Favicon',
            type: 'image',
            description: 'Upload a 32x32 or 64x64 PNG/ICO for the site favicon.',
        }),
        defineField({
            name: 'email',
            title: 'Contact Email',
            type: 'string',
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 2,
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                { name: 'facebook', type: 'url', title: 'Facebook' },
                { name: 'twitter', type: 'url', title: 'Twitter / X' },
                { name: 'linkedin', type: 'url', title: 'LinkedIn' },
                { name: 'instagram', type: 'url', title: 'Instagram' },
            ],
        }),
        defineField({
            name: 'navLinks',
            title: 'Navigation Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', type: 'string', title: 'Label' },
                        { name: 'href', type: 'string', title: 'URL / Path' },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'href' },
                    },
                },
            ],
        }),
        defineField({
            name: 'footerText',
            title: 'Footer Copyright Text',
            type: 'string',
        }),
        defineField({
            name: 'googleAnalyticsId',
            title: 'Google Analytics ID (G-XXXXXXXXXX)',
            type: 'string',
            description: 'Your GA4 Measurement ID',
        }),
        defineField({
            name: 'googleSearchConsoleKey',
            title: 'Google Search Console Verification Key',
            type: 'string',
            description: 'The content attribute value from the Google Verification Meta Tag',
        }),
        defineField({
            name: 'openingHours',
            title: 'Opening Hours',
            type: 'string',
            description: 'Format: Mo-Fr 09:00-18:00 (Schema.org compatible)',
            initialValue: 'Mo-Fr 09:00-18:00',
        }),
        defineField({
            name: 'priceRange',
            title: 'Price Range',
            type: 'string',
            description: 'e.g. $$ or $$$',
            initialValue: '$$',
        }),
        defineField({
            name: 'latitude',
            title: 'Latitude',
            type: 'number',
        }),
        defineField({
            name: 'longitude',
            title: 'Longitude',
            type: 'number',
        }),
    ],
    preview: {
        select: { title: 'title' },
    },
});
