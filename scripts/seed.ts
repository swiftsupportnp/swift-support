/**
 * Swift Support Solutions - Sanity Content Seed Script
 *
 * Populates Sanity with:
 * - Site Settings (singleton)
 * - Author
 * - Blog Categories
 * - 9 consulting services (Nepal-compliant)
 * - 5 Nepal business-focused blog posts
 *
 * Usage:
 *   npx ts-node --esm scripts/seed.ts
 *
 * Make sure SANITY_API_WRITE_TOKEN is set in your .env file.
 */

import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';

dotenv.config();

const client = createClient({
    projectId: 'zh1evkmv',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2025-01-01',
    token: process.env.SANITY_API_WRITE_TOKEN,
});

// ─── Helpers ─────────────────────────────────────────────────────────────────

function toBlock(text: string) {
    return [
        {
            _type: 'block',
            _key: Math.random().toString(36).slice(2),
            style: 'normal',
            children: [
                {
                    _type: 'span',
                    _key: Math.random().toString(36).slice(2),
                    text,
                    marks: [],
                },
            ],
        },
    ];
}

// ─── Site Settings ────────────────────────────────────────────────────────────

const SITE_SETTINGS = {
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'Swift Support Solutions',
    tagline: 'Professional Business Consulting in Nepal',
    description:
        'Swift Support Solutions provides professional business consulting, financial advisory, accounting, tax support, events management, marketing, and business development services in Nepal.',
    email: 'info@swiftsupportandsolutions.com.np',
    phone: '+977-9849755708',
    address: 'Annapurna Tower, Tinkune, Kathmandu, Nepal',
    openingHours: 'Mo-Fr 09:00-18:00',
    priceRange: '$$',
    googleAnalyticsId: 'G-XXXXXXXXXX', // Placeholder
    latitude: 27.6855, // Approximate location for Tinkune
    longitude: 85.3476,
    socialLinks: {
        facebook: 'https://facebook.com/swiftsupportsolutions',
        linkedin: 'https://linkedin.com/company/swiftsupportsolutions',
        instagram: 'https://instagram.com/swiftsupportsolutions',
        twitter: 'https://x.com/swiftsupportsolutions',
    },
    navLinks: [
        { _key: 'n1', label: 'Home', href: '/' },
        { _key: 'n2', label: 'Services', href: '/services' },
        { _key: 'n3', label: 'About', href: '/about' },
        { _key: 'n4', label: 'Blog', href: '/blog' },
        { _key: 'n5', label: 'Contact', href: '/contact' },
    ],
    footerText: `© ${new Date().getFullYear()} Swift Support Solutions Pvt. Ltd. All rights reserved. Registered under Companies Act 2063, Nepal.`,
};

// ─── Author ───────────────────────────────────────────────────────────────────

const AUTHOR = {
    _type: 'author',
    _id: 'author-swift-team',
    name: 'Swift Support Team',
    slug: { _type: 'slug', current: 'swift-support-team' },
    role: 'Business Consulting Specialists',
    bio: 'The Swift Support Solutions team is made up of certified business consultants, financial advisors, tax specialists, and operations professionals based in Kathmandu, Nepal.',
};

// ─── Categories ───────────────────────────────────────────────────────────────

const CATEGORIES = [
    { _id: 'cat-consulting', _type: 'category', title: 'Business Consulting', slug: { _type: 'slug', current: 'business-consulting' }, description: 'Insights on strategy, company registration, and business management in Nepal.' },
    { _id: 'cat-finance', _type: 'category', title: 'Finance & Accounting', slug: { _type: 'slug', current: 'finance-accounting' }, description: 'Financial planning, NFRS compliance, bookkeeping, and advisory.' },
    { _id: 'cat-tax', _type: 'category', title: 'Tax & Compliance', slug: { _type: 'slug', current: 'tax-compliance' }, description: 'Nepal tax, VAT, IRD guidelines, and regulatory compliance.' },
    { _id: 'cat-marketing', _type: 'category', title: 'Marketing & Growth', slug: { _type: 'slug', current: 'marketing-growth' }, description: 'Branding, digital marketing, and business development strategies.' },
    { _id: 'cat-operations', _type: 'category', title: 'Operations & Projects', slug: { _type: 'slug', current: 'operations-projects' }, description: 'Project management, events, and operational excellence.' },
];

// ─── Services ─────────────────────────────────────────────────────────────────

const SERVICES = [
    {
        _type: 'service',
        _id: 'service-business-consultation',
        title: 'Business Consultation',
        slug: { _type: 'slug', current: 'business-consultation' },
        tagline: 'Strategic guidance to start, scale, and sustain your business in Nepal.',
        description: 'Whether you are starting a new venture, repositioning an existing business, or navigating a critical growth phase, our seasoned business consultants provide structured, actionable advice. We help with feasibility studies, business plan development, company registration at the OCR, and strategic planning aligned with Nepal\'s regulatory environment.',
        icon: '💼',
        order: 1,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Expert Guidance from Day One', description: 'Our consultants bring 10+ years of experience across Nepal\'s business landscape.' },
            { _key: 'b2', title: 'Company Registration Support', description: 'We guide you through OCR registration, PAN/VAT enrolment, and all required government filings.' },
            { _key: 'b3', title: 'Feasibility & Business Plans', description: 'Bankable business plans and feasibility reports accepted by financial institutions.' },
            { _key: 'b4', title: 'Ongoing Strategic Advisory', description: 'Quarterly strategy reviews to keep your business on track and compliant.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Initial Consultation', description: 'We understand your business goals, current situation, and key challenges in a free 30-minute call.' },
            { _key: 's2', step: 2, title: 'Diagnostic Assessment', description: 'We assess your business structure, compliance status, and market positioning.' },
            { _key: 's3', step: 3, title: 'Strategy Development', description: 'We prepare a tailored strategic roadmap with specific, actionable recommendations.' },
            { _key: 's4', step: 4, title: 'Implementation Support', description: 'We support you through execution, adjusting the strategy as market conditions evolve.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Can you help with company registration in Nepal?', answer: 'Yes. We handle the full process from name reservation at OCR to PAN/VAT registration at IRD.' },
            { _key: 'f2', question: 'Do you work with foreign-invested companies?', answer: 'Yes. We are experienced with Nepal\'s Foreign Investment and Technology Transfer Act (FITTA) 2075 and can guide FDI approvals.' },
        ],
        seo: {
            title: 'Business Consultation Services in Nepal | Swift Support Solutions',
            description: 'Professional business consulting in Nepal. Company registration, feasibility studies, strategic planning, and OCR/IRD compliance support.',
        },
    },
    {
        _type: 'service',
        _id: 'service-business-financial',
        title: 'Business Financial',
        slug: { _type: 'slug', current: 'business-financial' },
        tagline: 'Financial planning, forecasting, and advisory for sustainable business growth.',
        description: 'Sound financial management is the foundation of every successful business. Our financial advisory team provides cash flow planning, financial modelling, investment appraisal, and capital structure advice. All our financial reports are prepared in accordance with Nepal Financial Reporting Standards (NFRS) and Nepal Accounting Standards (NAS).',
        icon: '📈',
        order: 2,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'NFRS-Compliant Reporting', description: 'Financial statements prepared to the standard required by Nepal Rastra Bank and financial institutions.' },
            { _key: 'b2', title: 'Cash Flow Management', description: 'Proactive planning to ensure your business never faces avoidable liquidity shortfalls.' },
            { _key: 'b3', title: 'Investment Appraisal', description: 'Evidence-based analysis to guide major capital expenditure decisions.' },
            { _key: 'b4', title: 'Loan & Grant Proposal Support', description: 'Financial documentation prepared to meet BFI and development bank requirements.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Financial Health Check', description: 'We review your current financial position, ratios, and cash flow patterns.' },
            { _key: 's2', step: 2, title: 'Goal Setting', description: 'We align financial planning with your business growth targets.' },
            { _key: 's3', step: 3, title: 'Financial Model Development', description: 'We build a robust financial model covering 3–5 year projections.' },
            { _key: 's4', step: 4, title: 'Ongoing Advisory', description: 'Monthly reviews to track performance against the financial plan.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Do you prepare reports for bank loan applications?', answer: 'Yes. We prepare CMA (Credit Monitoring Arrangement) data and project reports required by commercial banks in Nepal.' },
            { _key: 'f2', question: 'Are your reports NFRS-compliant?', answer: 'All our financial statements follow Nepal Financial Reporting Standards (NFRS) as mandated by the Accounting Standards Board Nepal (ASBANE).' },
        ],
        seo: {
            title: 'Business Financial Advisory in Nepal | Swift Support Solutions',
            description: 'Financial planning, NFRS-compliant reporting, cash flow management, and investment advisory for businesses across Nepal.',
        },
    },
    {
        _type: 'service',
        _id: 'service-events-management',
        title: 'Events Management',
        slug: { _type: 'slug', current: 'events-management' },
        tagline: 'End-to-end corporate and community event planning with precision and professionalism.',
        description: 'From corporate conferences and product launches to award ceremonies and government-invited events, our events management team handles every detail. We manage venue selection, vendor coordination, logistics, guest management, and post-event reporting for events across Nepal.',
        icon: '🎪',
        order: 3,
        featured: false,
        benefits: [
            { _key: 'b1', title: 'Full-Service Event Planning', description: 'From concept to completion — we handle every aspect of your event.' },
            { _key: 'b2', title: 'Nepal-Wide Venue Network', description: 'Established relationships with hotels, convention centres, and outdoor venues across Nepal.' },
            { _key: 'b3', title: 'Vendor Coordination', description: 'We manage caterers, AV technicians, security, and other vendors on your behalf.' },
            { _key: 'b4', title: 'Budget Management', description: 'Transparent budgeting and rigorous cost control throughout the planning process.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Brief and Objectives', description: 'We understand your event objectives, audience, and budget constraints.' },
            { _key: 's2', step: 2, title: 'Planning and Proposals', description: 'We develop a detailed event plan including venue options, timeline, and budget.' },
            { _key: 's3', step: 3, title: 'Coordination', description: 'We manage all vendors and logistics in the weeks leading up to the event.' },
            { _key: 's4', step: 4, title: 'Execution and Review', description: 'We run the event on the day and provide a post-event report.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Do you manage events outside Kathmandu?', answer: 'Yes. We have managed events in Pokhara, Chitwan, Biratnagar, and other locations.' },
            { _key: 'f2', question: 'Can you manage government or NGO events?', answer: 'Yes. We have experience managing events for government bodies, development organisations, and INGOs operating in Nepal.' },
        ],
        seo: {
            title: 'Events Management Services in Nepal | Swift Support Solutions',
            description: 'Professional corporate and community event planning in Nepal. Venue, vendors, logistics, and full-service management.',
        },
    },
    {
        _type: 'service',
        _id: 'service-accounting-bookkeeping',
        title: 'Accounting & Bookkeeping',
        slug: { _type: 'slug', current: 'accounting-bookkeeping' },
        tagline: 'Accurate records and NFRS-compliant financial statements for your business.',
        description: 'Accurate bookkeeping is the foundation of good financial management and regulatory compliance. Our accounting team maintains your records in Tally, QuickBooks, or Excel-based systems, preparing monthly management accounts, annual financial statements, and all supporting documentation required for tax and audit purposes under Nepal law.',
        icon: '📒',
        order: 4,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Monthly Management Accounts', description: 'Clear P&L, balance sheet, and cash flow statements every month.' },
            { _key: 'b2', title: 'NAS/NFRS Compliance', description: 'Books maintained and financial statements prepared per Nepal Accounting Standards.' },
            { _key: 'b3', title: 'Payroll Processing', description: 'Accurate salary computation including PF, CIT, and SSF contributions as applicable.' },
            { _key: 'b4', title: 'Year-End Preparation', description: 'All year-end closing entries and documentation ready for audit submission.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Onboarding', description: 'We review your existing records and set up a structured accounting system suited to your business.' },
            { _key: 's2', step: 2, title: 'Monthly Recording', description: 'We record all transactions accurately throughout the month.' },
            { _key: 's3', step: 3, title: 'Reconciliation', description: 'Bank reconciliation and accounts payable/receivable review each month.' },
            { _key: 's4', step: 4, title: 'Reporting', description: 'Monthly management accounts delivered within 7 working days of month-end.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Do you handle PF and SSF contributions?', answer: 'Yes. We compute and facilitate Employees Provident Fund (EPF), Employees Contributory Fund, and Social Security Fund (SSF) contributions as applicable under Nepal law.' },
            { _key: 'f2', question: 'Do you work with Tally software?', answer: 'Yes. We work with Tally Prime, QuickBooks, and custom Excel-based systems depending on your business needs.' },
        ],
        seo: {
            title: 'Accounting & Bookkeeping Services Nepal | Swift Support Solutions',
            description: 'Professional accounting and bookkeeping for Nepal businesses. NFRS-compliant financial statements, payroll, and monthly management accounts.',
        },
    },
    {
        _type: 'service',
        _id: 'service-tax-vat-audit',
        title: 'Tax, VAT & Audit Support',
        slug: { _type: 'slug', current: 'tax-vat-audit' },
        tagline: 'IRD-registered tax and VAT filing with full compliance to Nepal\'s tax laws.',
        description: 'Nepal\'s tax environment is complex and frequently updated. Our tax specialists handle income tax return filing (under the Income Tax Act 2058), VAT return submission (under the VAT Act 2052), TDS filings, and full audit support for businesses across Nepal. We represent clients at IRD for queries, notices, and assessments.',
        icon: '🧾',
        order: 5,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Income Tax Return Filing', description: 'Accurate annual income tax returns under the Income Tax Act 2058 filed on time.' },
            { _key: 'b2', title: 'Monthly VAT Returns', description: 'VAT return preparation and submission to IRD every Ashadh and Poush as applicable.' },
            { _key: 'b3', title: 'TDS Compliance', description: 'Monthly TDS calculations and BSP/advance tax submissions handled correctly.' },
            { _key: 'b4', title: 'IRD Representation', description: 'We attend IRD for assessments, notices, and queries on your behalf.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Tax Health Check', description: 'We review your current filing status and identify any compliance gaps.' },
            { _key: 's2', step: 2, title: 'Tax Planning', description: 'We identify legitimate tax optimisation opportunities within Nepal law.' },
            { _key: 's3', step: 3, title: 'Preparation & Filing', description: 'Accurate preparation and timely submission of all required tax returns.' },
            { _key: 's4', step: 4, title: 'Audit & Dispute Support', description: 'We handle IRD audits and respond to assessment notices professionally.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Who needs to register for VAT in Nepal?', answer: 'Businesses with annual turnover exceeding NPR 5 million for goods or NPR 2 million for services are required to register for VAT under the VAT Act 2052.' },
            { _key: 'f2', question: 'What is the current corporate income tax rate in Nepal?', answer: 'The standard corporate income tax rate is 25%. Entities in manufacturing enjoy 20%, while banks and financial institutions pay 30%. Special rates apply to some sectors under the Income Tax Act 2058.' },
        ],
        seo: {
            title: 'Tax, VAT & Audit Services Nepal | Swift Support Solutions',
            description: 'Professional income tax, VAT, TDS filing, and audit support for Nepal businesses. IRD-compliant and registered tax advisors.',
        },
    },
    {
        _type: 'service',
        _id: 'service-fundraising-solutions',
        title: 'Fundraising Solutions',
        slug: { _type: 'slug', current: 'fundraising-solutions' },
        tagline: 'Connect with investors, donors, and grant opportunities to fuel your growth.',
        description: 'Raising capital in Nepal requires a deep understanding of the funding landscape — from private investors and venture capital to development grants and bank financing. Our fundraising specialists help you structure your pitch, prepare investor-ready documentation, and connect with the right funding sources for your stage and sector.',
        icon: '🤝',
        order: 6,
        featured: false,
        benefits: [
            { _key: 'b1', title: 'Investor Pitch Preparation', description: 'Professional pitch decks and financial models that meet investor standards.' },
            { _key: 'b2', title: 'Grant Identification', description: 'We identify and apply for Nepal government grants, development bank schemes, and donor agency funds.' },
            { _key: 'b3', title: 'Bank Loan Documentation', description: 'Complete project reports and CMA data for BFI loan applications.' },
            { _key: 'b4', title: 'Equity & Partnership Structuring', description: 'We advise on how to structure equity splits and investor agreements compliantly.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Funding Needs Assessment', description: 'We determine how much you need, for what purpose, and which funding types are most suitable.' },
            { _key: 's2', step: 2, title: 'Documentation Preparation', description: 'We prepare all investor or lender documentation required.' },
            { _key: 's3', step: 3, title: 'Outreach & Matching', description: 'We introduce you to relevant investors, donors, or financial institutions.' },
            { _key: 's4', step: 4, title: 'Due Diligence Support', description: 'We support you through the due diligence process until funds are secured.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Can foreign investors fund our Nepal company?', answer: 'Yes. Foreign direct investment is permitted in many sectors under Nepal\'s FITTA 2075, subject to DIPP approval and Nepal Rastra Bank authorization.' },
            { _key: 'f2', question: 'Do you help with grant applications to donors and INGOs?', answer: 'Yes. We assist with concept notes, full proposals, and budget preparation for grants from bilateral donors, INGOs, and development banks active in Nepal.' },
        ],
        seo: {
            title: 'Fundraising Solutions Nepal | Investor & Grant Support | Swift Support Solutions',
            description: 'Fundraising advisory for Nepal businesses. Investor pitch preparation, grant applications, and bank loan documentation.',
        },
    },
    {
        _type: 'service',
        _id: 'service-marketing-branding',
        title: 'Marketing & Branding',
        slug: { _type: 'slug', current: 'marketing-branding' },
        tagline: 'Build a compelling brand and expand your market presence across Nepal.',
        description: 'A strong brand and effective marketing strategy are essential for sustainable growth. We help businesses develop their brand identity, create a cohesive visual language, and implement marketing campaigns across digital and traditional channels in Nepal. Our strategies are grounded in local market insights and measurable outcomes.',
        icon: '📣',
        order: 7,
        featured: false,
        benefits: [
            { _key: 'b1', title: 'Brand Identity Development', description: 'Logo, brand guidelines, and visual identity that reflect your business values.' },
            { _key: 'b2', title: 'Digital Marketing', description: 'SEO, social media management, and content marketing optimized for the Nepal market.' },
            { _key: 'b3', title: 'Market Research', description: 'Consumer insights and competitive analysis specific to your target market in Nepal.' },
            { _key: 'b4', title: 'Measurable Results', description: 'Clear KPIs and monthly reporting so you know exactly what your marketing is achieving.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Brand Audit', description: 'We assess your current brand positioning and identify gaps and opportunities.' },
            { _key: 's2', step: 2, title: 'Strategy Development', description: 'We create a marketing strategy aligned to your business goals and budget.' },
            { _key: 's3', step: 3, title: 'Content & Campaign Execution', description: 'We produce and run campaigns across digital and offline channels.' },
            { _key: 's4', step: 4, title: 'Performance Review', description: 'Monthly reporting and strategy refinement based on results.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Do you work on social media in Nepali language?', answer: 'Yes. We create content in both Nepali and English, tailored to your target audience.' },
            { _key: 'f2', question: 'Can you help us advertise on Facebook and Google?', answer: 'Yes. We manage paid advertising campaigns on Facebook, Instagram, and Google Ads, with clear reporting on spend and results.' },
        ],
        seo: {
            title: 'Marketing & Branding Services Nepal | Swift Support Solutions',
            description: 'Brand development, digital marketing, and market research services for businesses across Nepal.',
        },
    },
    {
        _type: 'service',
        _id: 'service-project-management',
        title: 'Project Management',
        slug: { _type: 'slug', current: 'project-management' },
        tagline: 'Structured execution to deliver projects on time, within scope, and on budget.',
        description: 'Many organisations in Nepal have the right strategy but struggle with execution. Our project management specialists implement proven PM frameworks to bring discipline, clarity, and accountability to your projects. From infrastructure projects and government-funded programmes to internal change initiatives, we ensure delivery.',
        icon: '🗂️',
        order: 8,
        featured: false,
        benefits: [
            { _key: 'b1', title: 'Structured PM Frameworks', description: 'We apply PMBoK and PRINCE2-aligned methodologies adapted for Nepal\'s project environment.' },
            { _key: 'b2', title: 'Risk Management', description: 'Proactive identification and management of project risks before they become problems.' },
            { _key: 'b3', title: 'Stakeholder Management', description: 'Clear communication plans and reporting structures for all project stakeholders.' },
            { _key: 'b4', title: 'Progress Reporting', description: 'Weekly and monthly progress reports aligned with donor or management requirements.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Project Initiation', description: 'We define scope, objectives, stakeholders, and success criteria.' },
            { _key: 's2', step: 2, title: 'Planning', description: 'We create a detailed work plan with milestones, resource allocation, and risk register.' },
            { _key: 's3', step: 3, title: 'Execution & Monitoring', description: 'We manage day-to-day delivery and track progress against the plan.' },
            { _key: 's4', step: 4, title: 'Closure & Handover', description: 'We close the project formally, document lessons learned, and hand over deliverables.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Do you manage donor-funded development projects?', answer: 'Yes. We are experienced in managing donor-funded projects including those funded by bilateral agencies, multilateral organisations, and INGOs operating in Nepal.' },
            { _key: 'f2', question: 'Can you help rescue an already-delayed project?', answer: 'Yes. We frequently step in to recover delayed projects, re-baseline schedules, and implement the discipline needed to get back on track.' },
        ],
        seo: {
            title: 'Project Management Services Nepal | Swift Support Solutions',
            description: 'Professional project management for Nepal businesses and development organisations. On-time, on-budget delivery.',
        },
    },
    {
        _type: 'service',
        _id: 'service-business-development',
        title: 'Business Development',
        slug: { _type: 'slug', current: 'business-development' },
        tagline: 'Identify and capture new markets, partners, and revenue streams.',
        description: 'Business development is about finding and realising growth opportunities. Our BD specialists help you identify new market segments, develop strategic partnerships, pursue government and institutional tenders, and enter new geographic markets within Nepal and the broader South Asian region.',
        icon: '🚀',
        order: 9,
        featured: false,
        benefits: [
            { _key: 'b1', title: 'Market Entry Strategy', description: 'Structured analysis and entry strategy for new markets and segments.' },
            { _key: 'b2', title: 'Partnership Development', description: 'Identifying and negotiating strategic partnerships and distribution agreements.' },
            { _key: 'b3', title: 'Tender & Bid Support', description: 'End-to-end support for government and institutional procurement bids.' },
            { _key: 'b4', title: 'Sales Channel Development', description: 'Building effective distribution and sales channels across Nepal.' },
        ],
        processSteps: [
            { _key: 's1', step: 1, title: 'Opportunity Assessment', description: 'We identify and prioritize growth opportunities most aligned with your capabilities.' },
            { _key: 's2', step: 2, title: 'Strategy & Plan', description: 'We develop a business development plan with specific targets and actions.' },
            { _key: 's3', step: 3, title: 'Outreach & Negotiation', description: 'We conduct outreach to potential partners, clients, or institutional buyers.' },
            { _key: 's4', step: 4, title: 'Conversion & Follow-Through', description: 'We support negotiations through to signed agreements and first delivery.' },
        ],
        faqs: [
            { _key: 'f1', question: 'Can you help us win government tenders?', answer: 'Yes. We have a strong track record of supporting businesses in preparing technical and financial proposals for public procurement in Nepal.' },
            { _key: 'f2', question: 'Do you support market entry into Nepal from abroad?', answer: 'Yes. We assist foreign companies establishing operations in Nepal, including feasibility, regulatory approval (DIPP/NRB), partner identification, and setup support.' },
        ],
        seo: {
            title: 'Business Development Services Nepal | Swift Support Solutions',
            description: 'Market entry, partnership development, tender support, and growth strategy for businesses in Nepal.',
        },
    },
];

// ─── Blog Posts ───────────────────────────────────────────────────────────────

const BLOG_POSTS = [
    {
        _type: 'post',
        _id: 'post-company-registration-nepal',
        title: 'How to Register a Company in Nepal: A Step-by-Step Guide (2025)',
        slug: { _type: 'slug', current: 'company-registration-nepal-guide-2025' },
        publishedAt: '2025-11-01T00:00:00.000Z',
        readingTime: 8,
        excerpt: 'Registering a company in Nepal involves several steps across the OCR, IRD, and local government bodies. This guide walks you through the entire process under the Companies Act 2063.',
        categories: [{ _type: 'reference', _ref: 'cat-consulting' }],
        author: { _type: 'reference', _ref: 'author-swift-team' },
        seo: {
            title: 'How to Register a Company in Nepal 2025 | Swift Support Solutions',
            description: 'Complete step-by-step guide to registering a company in Nepal under the Companies Act 2063. OCR, PAN/VAT, and local licence explained.',
        },
        body: toBlock('Registering a company in Nepal is a multi-step process governed primarily by the Companies Act 2063. This guide covers the key stages every founder should know.\n\nThe first step is name reservation at the Office of the Company Registrar (OCR). You submit your proposed company name along with the proposed shareholding structure and nature of business. OCR typically processes name reservations within 3 to 7 working days.\n\nOnce the name is reserved, you file the Memorandum of Association (MoA) and Articles of Association (AoA) along with shareholder details and capital structure. A registration fee is paid based on your authorized capital. The company certificate is usually issued within 5 to 10 working days.\n\nAfter receiving the company registration certificate, you must register for a Permanent Account Number (PAN) at the Inland Revenue Department (IRD). If your projected annual turnover exceeds NPR 5 million (goods) or NPR 2 million (services), VAT registration is also required.\n\nYou will also need to obtain a ward-level business operating licence from your local municipality or metropolitan city office. Some sectors require sector-specific licences from relevant government regulators.\n\nFor foreign-invested companies, additional approvals from the Department of Industry (DOI) and the Nepal Rastra Bank (NRB) are required under the Foreign Investment and Technology Transfer Act (FITTA) 2075.\n\nThe entire process typically takes 3 to 6 weeks when documents are prepared correctly. We assist clients through every stage, from name reservation to obtaining the first operating licence.'),
    },
    {
        _type: 'post',
        _id: 'post-vat-filing-nepal',
        title: 'VAT Filing in Nepal: What Every Business Owner Must Know',
        slug: { _type: 'slug', current: 'vat-filing-nepal-business-guide' },
        publishedAt: '2025-10-10T00:00:00.000Z',
        readingTime: 6,
        excerpt: 'Nepal\'s VAT system under the VAT Act 2052 requires registered businesses to file returns bi-monthly. Here is what you need to know to stay compliant and avoid penalties.',
        categories: [{ _type: 'reference', _ref: 'cat-tax' }],
        author: { _type: 'reference', _ref: 'author-swift-team' },
        seo: {
            title: 'VAT Filing Nepal Guide | IRD Compliance | Swift Support Solutions',
            description: 'Complete guide to VAT filing in Nepal. Who must register, how to file, deadlines, and penalties under the VAT Act 2052.',
        },
        body: toBlock('Value Added Tax (VAT) in Nepal is governed by the Value Added Tax Act 2052 and administered by the Inland Revenue Department (IRD). If your business is VAT-registered, understanding your filing obligations is essential to avoid penalties.\n\nVAT registration is mandatory if your annual taxable turnover exceeds NPR 5 million for goods or NPR 2 million for services. The standard VAT rate is 13%. Some goods and services are zero-rated or exempt.\n\nVAT returns in Nepal are filed bi-monthly. Returns for odd months (Shrawan, Ashoj, Mangsir, Magh, Chaitra, Jestha) are due on the 25th of the following month. IRD processes VAT filings through its online portal and taxpayers must maintain proper books of accounts and VAT bills to support their returns.\n\nInput VAT credit allows you to offset VAT paid on business purchases against VAT collected on sales. Proper documentation of all purchase invoices is essential to claim input tax credit.\n\nCommon errors we see include failure to register for VAT despite crossing the threshold, claiming input VAT on non-business expenses, and missing filing deadlines. Late filing attracts penalties under the VAT Act.\n\nIf you are unsure about your VAT obligations or want to ensure your returns are filed correctly, our tax specialists are here to help.'),
    },
    {
        _type: 'post',
        _id: 'post-financial-planning-nepal-sme',
        title: 'Financial Planning Basics Every Nepal SME Owner Should Master',
        slug: { _type: 'slug', current: 'financial-planning-nepal-sme-basics' },
        publishedAt: '2025-09-20T00:00:00.000Z',
        readingTime: 7,
        excerpt: 'Many Nepal SMEs grow without formal financial planning, which creates fragility. Here are the core financial planning practices every business owner should put in place.',
        categories: [{ _type: 'reference', _ref: 'cat-finance' }],
        author: { _type: 'reference', _ref: 'author-swift-team' },
        seo: {
            title: 'Financial Planning for Nepal SMEs | Business Finance Guide | Swift Support Solutions',
            description: 'Essential financial planning practices for Nepal small and medium businesses. Cash flow, budgeting, and NFRS-compliant reporting explained.',
        },
        body: toBlock('Most small and medium business owners in Nepal are excellent at their craft but less comfortable with financial planning. This gap creates vulnerability — businesses run out of cash at the wrong moment, miss tax deadlines, or make poor investment decisions simply because they lack a clear financial picture.\n\nThe first thing we always recommend is separating business and personal finances completely. Open a dedicated business bank account and route all business income and expenses through it. This single step makes bookkeeping dramatically easier and cleaner.\n\nNext, create a simple monthly budget. It does not need to be complex. List your expected income, your fixed costs (rent, salaries, loan repayments), variable costs (materials, utilities), and tax obligations. Compare actuals to this budget at the end of each month. Variances tell you where to look.\n\nCash flow management is often more important than profit for growing businesses. You can be profitable on paper but run out of cash if your customers pay slowly. Build a 13-week cash flow forecast to spot potential shortfalls before they become crises.\n\nFor tax planning, work backwards from your tax obligations. Income tax, VAT, TDS, and advance tax payments all have specific deadlines under Nepal law. Failing to plan for these leads to penalties and unnecessary cash crunches.\n\nFinally, get your accounts prepared annually in accordance with Nepal Accounting Standards (NAS) or NFRS. This is not just a compliance requirement — well-prepared accounts help you understand your business and are essential for bank financing.\n\nIf you want to put stronger financial foundations in place for your business, we offer a one-day financial health check that gives you a clear picture of where you stand and what to do next.'),
    },
    {
        _type: 'post',
        _id: 'post-fundraising-nepal-startup',
        title: 'Raising Funds for Your Nepal Startup: Options, Process & What Investors Look For',
        slug: { _type: 'slug', current: 'fundraising-nepal-startup-guide' },
        publishedAt: '2025-08-28T00:00:00.000Z',
        readingTime: 7,
        excerpt: 'Nepal\'s startup funding ecosystem is growing but still immature. This guide covers your real options — from commercial banks and development funds to angel investors and foreign capital.',
        categories: [{ _type: 'reference', _ref: 'cat-consulting' }],
        author: { _type: 'reference', _ref: 'author-swift-team' },
        seo: {
            title: 'Fundraising for Nepal Startups | Investor & Grant Guide | Swift Support Solutions',
            description: 'How to raise funds for your Nepal startup. Banks, venture capital, government schemes, and foreign investment explained.',
        },
        body: toBlock('Raising capital for a startup in Nepal is both easier and harder than many founders expect. Easier because the ecosystem is growing and serious investors are actively looking. Harder because the market is still small and many founders are not well-prepared for the process.\n\nFor early-stage funding, the most common sources are personal savings and family investment, commercial bank loans (typically secured against collateral), and angel investors. Nepal\'s angel investing community is small but active, particularly for tech and consumer businesses.\n\nAt the growth stage, options expand to include private equity, venture capital, development finance institutions (such as those linked to IFC or ADB programmes), and government schemes such as the Startup Nepal initiative.\n\nForeign investment is permitted in many sectors under the Foreign Investment and Technology Transfer Act (FITTA) 2075. The process requires approval from the Department of Industry (DIPP) and, where dividend repatriation is involved, the Nepal Rastra Bank.\n\nWhat investors in Nepal want to see is consistent regardless of the funding source: a credible business plan with realistic financial projections, a capable and committed team, evidence of early traction or market validation, a clear explanation of what the funds will be used for, and a realistic exit or return pathway.\n\nThe most common reasons a Nepal startup investment pitch fails are unrealistic financial projections, vague use of funds, and founders who cannot clearly explain their competitive advantage. These are all addressable with good preparation.\n\nIf you are preparing to raise funds, we can help you build an investor-ready pitch deck, financial model, and supporting documentation. Book a free initial consultation to get started.'),
    },
    {
        _type: 'post',
        _id: 'post-branding-nepal-business',
        title: 'Why Branding Matters More Than Ever for Nepal Businesses in 2025',
        slug: { _type: 'slug', current: 'branding-nepal-businesses-2025' },
        publishedAt: '2025-08-05T00:00:00.000Z',
        readingTime: 5,
        excerpt: 'As competition intensifies across every sector in Nepal, businesses with strong brands are pulling ahead. Here is why branding is no longer optional and what to do about it.',
        categories: [{ _type: 'reference', _ref: 'cat-marketing' }],
        author: { _type: 'reference', _ref: 'author-swift-team' },
        seo: {
            title: 'Why Branding Matters for Nepal Businesses | Marketing Guide | Swift Support Solutions',
            description: 'A strong brand differentiates your Nepal business in an increasingly competitive market. Learn what makes a brand effective and how to build one.',
        },
        body: toBlock('A decade ago, a business in Nepal could rely primarily on word of mouth and relationships to grow. That is still important, but it is now necessary rather than sufficient. Customers in Nepal — whether businesses or consumers — are conducting more research before purchasing, comparing options online, and making judgments about credibility based on what they find.\n\nThis is where branding becomes a business asset rather than just a design exercise.\n\nBranding is not just your logo. It is the totality of how your business is perceived: your name, visual identity, the quality of your website, how you communicate, your reputation on social media and review platforms, and the consistency of your customer experience. All of these signals combine to determine whether a potential customer trusts you enough to engage.\n\nFor B2B businesses in Nepal, a professional, coherent brand is increasingly a prerequisite for large contracts, tenders, and partnerships. Government and institutional buyers take branding and digital presence seriously as proxies for the quality and stability of a business.\n\nFor consumer businesses, the rise of Facebook, TikTok, and YouTube in Nepal means that brand visibility is more accessible than ever — but also that the market is noisier. Businesses with a clear brand identity and consistent content are cutting through more effectively.\n\nThe practical starting point for most businesses is to audit their current brand assets: website, social media presence, marketing materials, and customer communication. Then identify the gaps between current perception and the perception you want to create.\n\nIf you want to build a stronger brand for your business, we would love to help. Book a free consultation and we can discuss where you are and where you want to go.'),
    },
];

// ─── Main Seed Function ───────────────────────────────────────────────────────

async function seed() {
    console.log('\n🚀 Swift Support Solutions - Sanity Seed Script\n');
    console.log('Project ID : zh1evkmv');
    console.log('Dataset    : production');
    console.log('');

    const transaction = client.transaction();

    console.log('📋 Seeding site settings...');
    transaction.createOrReplace(SITE_SETTINGS);

    console.log('👤 Seeding author...');
    transaction.createOrReplace(AUTHOR);

    console.log(`🏷️  Seeding ${CATEGORIES.length} categories...`);
    CATEGORIES.forEach(cat => transaction.createOrReplace(cat));

    console.log(`🛠️  Seeding ${SERVICES.length} services...`);
    SERVICES.forEach(service => transaction.createOrReplace(service as any));

    console.log(`📝 Seeding ${BLOG_POSTS.length} blog posts...`);
    BLOG_POSTS.forEach(post => transaction.createOrReplace(post as any));

    try {
        await transaction.commit();
        console.log('\n✅ Seed completed successfully!');
        console.log(`   • 1 site settings document`);
        console.log(`   • 1 author`);
        console.log(`   • ${CATEGORIES.length} blog categories`);
        console.log(`   • ${SERVICES.length} services`);
        console.log(`   • ${BLOG_POSTS.length} blog posts`);
        console.log('\n   Open http://localhost:4321/studio to view your content.');
    } catch (err) {
        console.error('\n❌ Seed failed:', (err as Error).message);
        console.log('\nMake sure SANITY_API_WRITE_TOKEN is set in your .env file.');
        process.exit(1);
    }
}

seed();
