import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Service Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title', maxLength: 96 },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tagline',
            title: 'Short Tagline',
            type: 'string',
            description: 'One sentence shown on the services listing page.',
        }),
        defineField({
            name: 'description',
            title: 'Full Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Image',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'icon',
            title: 'Icon Name (Lucide)',
            type: 'string',
            description: 'Lucide icon identifier, e.g. "MonitorSmartphone"',
        }),
        defineField({
            name: 'benefits',
            title: 'Key Benefits',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'title', type: 'string', title: 'Benefit Title' },
                        { name: 'description', type: 'text', title: 'Description', rows: 2 },
                    ],
                    preview: { select: { title: 'title' } },
                },
            ],
        }),
        defineField({
            name: 'processSteps',
            title: 'How We Work (Process Steps)',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'step', type: 'number', title: 'Step Number' },
                        { name: 'title', type: 'string', title: 'Step Title' },
                        { name: 'description', type: 'text', title: 'Description', rows: 2 },
                    ],
                    preview: { select: { title: 'title' } },
                },
            ],
        }),
        defineField({
            name: 'body',
            title: 'Page Content (Rich Text)',
            type: 'array',
            of: [
                { type: 'block' },
                {
                    type: 'image',
                    options: { hotspot: true },
                },
            ],
        }),
        defineField({
            name: 'faqs',
            title: 'FAQs',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', type: 'string', title: 'Question' },
                        { name: 'answer', type: 'text', title: 'Answer', rows: 3 },
                    ],
                    preview: { select: { title: 'question' } },
                },
            ],
        }),
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'object',
            fields: [
                { name: 'title', type: 'string', title: 'Meta Title' },
                { name: 'description', type: 'text', title: 'Meta Description', rows: 2 },
            ],
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers will appear first.',
        }),
        defineField({
            name: 'featured',
            title: 'Featured on Homepage?',
            type: 'boolean',
            initialValue: false,
        }),
    ],
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
    preview: {
        select: { title: 'title', subtitle: 'tagline' },
    },
});
