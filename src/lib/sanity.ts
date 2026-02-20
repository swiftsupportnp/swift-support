import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'zh1evkmv',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-01-01',
    perspective: 'published',
});

export const previewClient = createClient({
    projectId: 'zh1evkmv',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-01-01',
    perspective: 'previewDrafts',
    token: import.meta.env.SANITY_API_READ_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
    return builder.image(source);
}

export async function sanityFetch<T>({
    query,
    params = {},
    preview = false,
}: {
    query: string;
    params?: Record<string, any>;
    preview?: boolean;
}): Promise<T> {
    const activeClient = preview ? previewClient : client;
    return activeClient.fetch<T>(query, params);
}
