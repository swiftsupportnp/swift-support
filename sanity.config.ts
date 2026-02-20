import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { presentationTool } from 'sanity/presentation';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';
import { structure, defaultDocumentNode } from './src/sanity/structure';

export default defineConfig({
    name: 'swift-support',
    title: 'Swift Support',
    projectId: 'zh1evkmv',
    dataset: 'production',
    basePath: '/studio',
    plugins: [
        structureTool({
            structure,
            defaultDocumentNode,
        }),
        presentationTool({
            previewUrl: {
                origin: typeof window !== 'undefined' ? window.location.origin : 'http://localhost:4321',
                preview: '/',
                draftMode: {
                    enable: '/api/draft-mode/enable',
                },
            },
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
    },
});
