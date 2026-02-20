import type { StructureBuilder } from 'sanity/structure';

export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Site Settings')
                .id('siteSettings')
                .child(
                    S.document()
                        .schemaType('siteSettings')
                        .documentId('siteSettings')
                        .title('Site Settings')
                ),
            S.divider(),
            S.listItem()
                .title('Services')
                .schemaType('service')
                .child(S.documentTypeList('service').title('Services')),
            S.divider(),
            S.listItem()
                .title('Blog Posts')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Blog Posts')),
            S.listItem()
                .title('Authors')
                .schemaType('author')
                .child(S.documentTypeList('author').title('Authors')),
            S.listItem()
                .title('Categories')
                .schemaType('category')
                .child(S.documentTypeList('category').title('Categories')),
        ]);

export const defaultDocumentNode = (S: StructureBuilder) =>
    S.document().views([S.view.form()]);
