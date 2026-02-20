// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://swiftsupportandsolutions.com.np',
    output: 'server',
    adapter: vercel({
        webAnalytics: { enabled: true },
    }),
    integrations: [react(), tailwind({
        applyBaseStyles: false,
    }), sanity({
        projectId: 'zh1evkmv',
        dataset: 'production',
        useCdn: false,
        apiVersion: '2025-01-01',
        studioBasePath: '/studio',
    }), partytown({
        config: {
            forward: ['dataLayer.push'],
        },
    }), sitemap()],
});