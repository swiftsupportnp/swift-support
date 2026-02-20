import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'clientLogo',
    title: 'Client Logo',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Company Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Logo Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            description: 'Used to sort logos. Lower numbers appear first.',
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
});
