import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
    projectId: process.env.PUBLIC_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || 'sz3h1w4r',
    dataset: process.env.PUBLIC_SANITY_DATASET || process.env.VITE_SANITY_DATASET || process.env.SANITY_DATASET || 'production',
    apiVersion: '2024-02-01',
    useCdn: false,
    token: process.env.SANITY_API_TOKEN,
});

function pText(blocks: { style: string, text: string }[]) {
    return blocks.map((b, i) => ({
        _key: `body_block_${i}`,
        _type: 'block',
        style: b.style,
        children: [{ _key: `body_span_${i}`, _type: 'span', text: b.text }]
    }));
}

const services = [
    {
        _type: 'service',
        title: 'Business Consultation',
        slug: { _type: 'slug', current: 'business-consultation' },
        tagline: 'Strategic guidance to start, scale, and sustain your business operations.',
        description: 'At Swift Support Solutions, we offer premier business consultation services designed to help startups, SMEs, and large enterprises scale efficiently. Our expertise combined with global best practices ensures your business thrives in a dynamic market environment.',
        icon: 'Lightbulb',
        order: 1,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Market Growth', description: 'Increase your market share and reach new demographics effectively.' },
            { _key: 'b2', title: 'Actionable Strategies', description: 'Develop robust, step-by-step roadmaps tailored to your economic realities.' },
            { _key: 'b3', title: 'Risk Reduction', description: 'Identify and circumvent common administrative and operational pitfalls.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Discovery & Assessment', description: 'We meet with your team to understand your immediate challenges and long-term vision.' },
            { _key: 'p2', step: 2, title: 'Strategic Planning', description: 'We draft a customized growth and optimization strategy.' },
            { _key: 'p3', step: 3, title: 'Execution & Support', description: 'We guide you through the implementation of your new strategies with ongoing monitoring.' }
        ],
        faqs: [
            { _key: 'f1', question: 'Do you consult international businesses?', answer: 'Yes! We provide comprehensive consultation for domestic businesses, as well as international entities looking to establish a presence.' },
            { _key: 'f2', question: 'What industries do you specialize in?', answer: 'Our experts have deep knowledge across IT, Retail, Healthcare, and the Service sectors.' }
        ],
        seo: {
            title: 'Expert Business Consultation Services',
            description: 'Scale your enterprise with Swift Support Solutions. Premier business consultation services optimized for your market.'
        },
        body: pText([
            { style: 'h2', text: 'Strategic Business Consultation' },
            { style: 'normal', text: 'The entrepreneurial landscape is evolving faster than ever. At Swift Support Solutions, we provide bespoke business consultation that helps startups, SMEs, and foreign direct investors navigate complex commercial environments. Whether you are scaling operations, restructuring internal workflows, or attempting to penetrate new regional demographics, our corporate strategists deliver actionable, data-backed roadmaps.' },
            { style: 'h2', text: 'Comprehensive Advisory Services' },
            { style: 'normal', text: 'We go beyond superficial advice. We dive deep into your operational metrics, contrasting them against the realities of your industry. We help mitigate bureaucratic risks, optimize supply chains affected by infrastructure, and align your branding with consumer patterns. Partner with us to future-proof your business.' }
        ])
    },
    {
        _type: 'service',
        title: 'Business Research',
        slug: { _type: 'slug', current: 'business-research' },
        tagline: 'Data-driven insights to navigate the market with confidence.',
        description: 'Quality data is the foundation of every successful venture. Our dedicated business research team provides deep-dive market analysis, demographic studies, and competitor insights specifically tailored for your targeted operational footprint.',
        icon: 'BarChart',
        order: 2,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Informed Decision Making', description: 'Eliminate guesswork with hard data collected directly from your target markets.' },
            { _key: 'b2', title: 'Competitor Analysis', description: 'Understand what your competitors are doing and find actionable gaps.' },
            { _key: 'b3', title: 'Feasibility Studies', description: 'Get professional validation before launching new products or services in the region.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Defining Objectives', description: 'We isolate the exact questions your business needs answered.' },
            { _key: 'p2', step: 2, title: 'Data Gathering', description: 'Our team conducts extensive primary and secondary research.' },
            { _key: 'p3', step: 3, title: 'Insight Reporting', description: 'We deliver a comprehensive report with clear, actionable recommendations.' }
        ],
        faqs: [
            { _key: 'f1', question: 'How long does a typical research project take?', answer: 'Depending on the depth and scope, a standard feasibility study takes between 2 to 4 weeks.' },
            { _key: 'f2', question: 'What sources do you use?', answer: 'We utilize a mix of official government data, direct field surveys, and proprietary market databases.' }
        ],
        seo: {
            title: 'Business Research & Market Feasibility Studies',
            description: 'Navigate the market with data-driven insights. Professional business research and feasibility studies by Swift Support.'
        },
        body: pText([
            { style: 'h2', text: 'Accurate Market Research' },
            { style: 'normal', text: 'Entering a new market without solid data is a major risk. Swift Support Solutions provides exhaustive business research and feasibility studies. We utilize both qualitative and quantitative methodologies to analyze consumer behavior, supplier reliability, and competitor positioning. This ensures your capital is deployed effectively.' },
            { style: 'h2', text: 'Feasibility Studies for Direct Investment' },
            { style: 'normal', text: 'For international investors, we offer specialized research. We map out the legal implications, expected ROI, and demographic heatmaps of your target regions. Start your expansion with the confidence that only rigorous, on-the-ground intelligence can provide.' }
        ])
    },
    {
        _type: 'service',
        title: 'Assets Management',
        slug: { _type: 'slug', current: 'assets-management' },
        tagline: 'Optimize, track, and protect your physical and digital assets.',
        description: 'Effective asset management is crucial for minimizing losses and maximizing ROI. Swift Support Solutions provides robust frameworks for tracking, maintaining, and valuing your business assets, ensuring full regulatory compliance.',
        icon: 'Database',
        order: 3,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Loss Prevention', description: 'Implement strict tracking processes to protect your high-value assets.' },
            { _key: 'b2', title: 'Optimized Lifecycle', description: 'Know exactly when to maintain, upgrade, or liquidate resources.' },
            { _key: 'b3', title: 'Compliance & Auditing', description: 'Ensure your asset records meet all corporate accounting standards.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Inventory Audit', description: 'We catalog and tag your existing assets directly at your locations.' },
            { _key: 'p2', step: 2, title: 'System Implementation', description: 'We set up secure digital ledgers to track depreciation and assignments.' },
            { _key: 'p3', step: 3, title: 'Routine Review', description: 'We provide scheduled audits to ensure continued accuracy.' }
        ],
        faqs: [],
        seo: {
            title: 'Corporate Assets Management',
            description: 'Protect your ROI with professional physical and digital asset management services tailored for modern businesses.'
        },
        body: pText([
            { style: 'h2', text: 'Comprehensive Asset Tracking' },
            { style: 'normal', text: 'Whether your company relies on heavy industrial equipment, massive IT infrastructure, or sprawling real estate, keeping track of your asset lifecycle is paramount. Swift Support Solutions brings modern asset management protocols to your business. We help prevent "ghost assets", ensure accurate depreciation logging for compliance, and structure scheduled maintenance.' },
            { style: 'h2', text: 'Digital & Physical Asset Protection' },
            { style: 'normal', text: 'We implement advanced tagging and digital ledger systems that provide real-time valuation of your company’s holdings. By choosing us as your asset management partner, you guarantee your resources are maximally utilized, legally compliant under financial reporting standards, and securely protected against shrinkage.' }
        ])
    },
    {
        _type: 'service',
        title: 'Accounting & Bookkeeping',
        slug: { _type: 'slug', current: 'accounting-bookkeeping' },
        tagline: 'Accurate reporting and compliant financial statements.',
        description: 'Keep your finances pristine with Swift Support’s dedicated accounting team. We handle daily bookkeeping, payroll, and complex financial reporting, allowing business owners to focus entirely on growth.',
        icon: 'Calculator',
        order: 4,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Complete Accuracy', description: 'Eliminate manual errors with professional double-entry bookkeeping.' },
            { _key: 'b2', title: 'Statutory Compliance', description: 'Stay fully compliant with all accounting standards legally required in your jurisdiction.' },
            { _key: 'b3', title: 'Financial Clarity', description: 'Receive monthly statements providing a clear picture of your cash flow and profitability.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Account Initialization', description: 'We seamlessly migrate your existing financial data into our secure systems.' },
            { _key: 'p2', step: 2, title: 'Daily & Weekly Logging', description: 'Our accountants process your invoices, receipts, and payroll.' },
            { _key: 'p3', step: 3, title: 'Monthly Reconciliation', description: 'We reconcile your accounts with your banks and prepare financial reports.' }
        ],
        faqs: [
            { _key: 'f1', question: 'Do you use international accounting software?', answer: 'Yes, we are proficient in Tally, Xero, QuickBooks, and other major platforms, adapting them perfectly for local tax strictures.' }
        ],
        seo: {
            title: 'Professional Accounting & Bookkeeping Services',
            description: 'Reliable compliant accounting, bookkeeping, and payroll services for scaling businesses.'
        },
        body: pText([
            { style: 'h2', text: 'Reliable Bookkeeping Services' },
            { style: 'normal', text: 'Accurate financial data is the lifeblood of any business. Instead of struggling with spreadsheets, let the expert accountants at Swift Support Solutions manage your ledgers. We offer end-to-end bookkeeping services including accounts payable/receivable management, payroll processing, and multi-currency bank reconciliations for dynamic enterprises.' },
            { style: 'h2', text: 'Statutory Compliant Financial Reporting' },
            { style: 'normal', text: 'The legal framework requires strict adherence to corporate financial reporting standards. Our certified financial professionals ensure every income statement, balance sheet, and cash flow document is perfectly structured to meet these national statutory requirements, keeping you completely legally secure.' }
        ])
    },
    {
        _type: 'service',
        title: 'TAX, VAT & Audit Support',
        slug: { _type: 'slug', current: 'tax-vat-audit' },
        tagline: 'Stress-free tax filing and audit compliance.',
        description: 'Navigating revenue department regulations can be incredibly complex. Our expert tax consultants ensure your VAT returns are filed on time, your corporate taxes are optimized, and your business is fully prepared for any government audits.',
        icon: 'FileText',
        order: 5,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Penalty Avoidance', description: 'Never miss a deadline for VAT or Income Tax filings.' },
            { _key: 'b2', title: 'Tax Optimization', description: 'Leverage legal frameworks to minimize your corporate tax burden sustainably.' },
            { _key: 'b3', title: 'Audit Readiness', description: 'Maintain pristine documentation to pass internal and external audits without stress.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Tax Assessment', description: 'We review your current tax structure and outstanding liabilities.' },
            { _key: 'p2', step: 2, title: 'Ongoing Filing', description: 'We handle your routine VAT filings and TDS deposits.' },
            { _key: 'p3', step: 3, title: 'Audit Representation', description: 'We represent your company during official tax assessments.' }
        ],
        faqs: [],
        seo: {
            title: 'Firm for TAX, VAT & Audit Support',
            description: 'Ensure total compliance. Expert Tax, VAT filing, and Audit support services for growing businesses.'
        },
        body: pText([
            { style: 'h2', text: 'Expert Tax and VAT Filing' },
            { style: 'normal', text: 'Tax regulations enforced by the government are strict and ever-changing. Swift Support Solutions provides expert Tax and VAT consultation to ensure your business remains fully compliant while legitimately minimizing extreme tax burdens. From routine monthly VAT filings to complex corporate tax returns and TDS management, we handle it all.' },
            { style: 'h2', text: 'Stress-Free Audit Support' },
            { style: 'normal', text: 'Facing a statutory or government audit can halt your daily operations. Our firm provides robust audit support, preparing and presenting your financial documents meticulously. We act as your liaison with tax officers, aggressively defending your filings and ensuring the auditing process is smooth, quick, and penalty-free.' }
        ])
    },
    {
        _type: 'service',
        title: 'Business Registration',
        slug: { _type: 'slug', current: 'business-registration' },
        tagline: 'End-to-end company registration and legal compliance.',
        description: 'Start your entrepreneurial journey without the bureaucratic hassle. Swift Support Solutions handles everything from the Office of the Company Registrar filings to local ward registrations and PAN/VAT enrollment—getting your business legally operational fast.',
        icon: 'Briefcase',
        order: 6,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Speed & Efficiency', description: 'Accelerate your launch timeline with our deep understanding of registration processes.' },
            { _key: 'b2', title: 'Complete Compliance', description: 'Ensure all local, municipal, and national paperwork is flawless.' },
            { _key: 'b3', title: 'Hassle-Free Experience', description: 'We manage the documentation so you can focus on building your product.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Name Approval', description: 'We assist in selecting and reserving your company name at the registry.' },
            { _key: 'p2', step: 2, title: 'Drafting Documents', description: 'We draft your Memorandum (MOA) and Articles of Association (AOA) tailored to your industry.' },
            { _key: 'p3', step: 3, title: 'Final Registration & PAN', description: 'We finalize company registration, local registrations, and secure your tax certificates.' }
        ],
        faqs: [
            { _key: 'f1', question: 'Do you help with Foreign Direct Investment (FDI) registration?', answer: 'Yes! We guide international investors through government approvals alongside standard registrations.' },
            { _key: 'f2', question: 'How long does company registration take?', answer: 'With all documents prepared, standard private company registration usually takes 3 to 7 working days.' }
        ],
        seo: {
            title: 'Company & Business Registration Services',
            description: 'Fast, hassle-free business registration. We handle statutory filings for local startups and FDI companies.'
        },
        body: pText([
            { style: 'h2', text: 'Seamless Company Registration' },
            { style: 'normal', text: 'Registering a new company involves massive amounts of paperwork, drafting Memorandums of Association (MOA), and securing various local approvals. Let Swift Support Solutions entirely shoulder this bureaucratic weight. We specialize in fast-tracking the legal incorporation of Private Limiteds, Public Limiteds, and NGOs.' },
            { style: 'h2', text: 'FDI and Full Legal Compliance' },
            { style: 'normal', text: 'Beyond standard business registration, we champion Foreign Direct Investment (FDI) setups by liaising directly with the Department of Industry. Upon primary registration, we seamlessly navigate you through local metropolitan registrations and secure your tax certificates, making your business 100% operation-ready in record time.' }
        ])
    },
    {
        _type: 'service',
        title: 'Marketing & Branding',
        slug: { _type: 'slug', current: 'marketing-branding' },
        tagline: 'Build a compelling brand and expand your market presence.',
        description: 'Stand out in a competitive market. Our creative branding and digital marketing teams create compelling narratives, design striking visual identities, and launch data-driven campaigns designed to capture the attention of your target demographic.',
        icon: 'Megaphone',
        order: 7,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Brand Recognition', description: 'Create a memorable corporate identity that resonates with consumers.' },
            { _key: 'b2', title: 'Digital Growth', description: 'Expand your reach through specialized SEO, Social Media, and Content Marketing.' },
            { _key: 'b3', title: 'Targeted Campaigns', description: 'Stop wasting ad-spend. We target the specific demographics your business needs.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Brand Audit', description: 'We evaluate your current positioning and consumer perception in the market.' },
            { _key: 'p2', step: 2, title: 'Strategy & Design', description: 'We overhaul your visual identity and map a multi-channel digital strategy.' },
            { _key: 'p3', step: 3, title: 'Campaign Launch', description: 'We execute and continuously optimize marketing campaigns to maximize your ROI.' }
        ],
        faqs: [
            { _key: 'f1', question: 'Do you offer social media management?', answer: 'Absolutely. We manage platforms like Facebook, Instagram, and LinkedIn tailored to the digital consumption habits of your audiences.' }
        ],
        seo: {
            title: 'Digital Marketing & Branding Agency',
            description: 'Elevate your brand with Swift Support. Expert digital marketing, SEO, and visual branding.'
        },
        body: pText([
            { style: 'h2', text: 'Top-Tier Digital Marketing' },
            { style: 'normal', text: 'Visibility is everything. As populations increasingly look online for services and products, having a dominant digital footprint is mandatory. Swift Support Solutions provides elite Digital Marketing services encompassing highly-targeted ad buying, organic Google Search Engine Optimization (SEO), and engaging content creation optimized for consumer behaviors.' },
            { style: 'h2', text: 'Corporate Branding and Visual Identity' },
            { style: 'normal', text: 'A brand is more than just a logo. Our creative directors help businesses establish a powerful, authoritative corporate identity. We engineer complete brand kits, typography profiles, and professional messaging documents that communicate trust and prestige to your clients globally. Elevate your perceived value with our premier branding strategies.' }
        ])
    },
    {
        _type: 'service',
        title: 'Project Management',
        slug: { _type: 'slug', current: 'project-management' },
        tagline: 'Structured execution to deliver complex projects on time and under budget.',
        description: 'Executing large-scale initiatives requires precision. Our certified Project Managers bring structure to your operations, utilizing Agile and Waterfall methodologies to ensure your critical business projects launch flawlessly.',
        icon: 'Clock',
        order: 8,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'On-Time Delivery', description: 'Strict timeline enforcement ensures your launch dates are met.' },
            { _key: 'b2', title: 'Budget Control', description: 'Detailed resource allocation prevents scope creep and cost overruns.' },
            { _key: 'b3', title: 'Risk Management', description: 'Proactive identification of logistical and operational risks.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'Scoping & Planning', description: 'We define exact deliverables, resource requirements, and timelines.' },
            { _key: 'p2', step: 2, title: 'Execution Tracking', description: 'We manage your teams and vendors, providing transparent status updates.' },
            { _key: 'p3', step: 3, title: 'Project Closure', description: 'We ensure final deliverables meet quality standards before official sign-off.' }
        ],
        faqs: [],
        seo: {
            title: 'Professional Project Management Services',
            description: 'Deliver your initiatives on-time and on-budget with dedicated Project Management consultants.'
        },
        body: pText([
            { style: 'h2', text: 'Professional Project Management' },
            { style: 'normal', text: 'Launching a new commercial product, opening a new regional office, or overhauling an IT system comes with significant infrastructural and logistical challenges. Swift Support Solutions introduces certified Project Management Professionals (PMP) to lead your critical initiatives. We utilize industry-standard frameworks like Agile and Lean Six Sigma customized for your operational realities.' },
            { style: 'h2', text: 'Risk Mitigation and Budget Adherence' },
            { style: 'normal', text: 'Scope creep and massive budget overruns are common without strict oversight. We take authoritarian control over vendor management, timeline execution, and resource allocation. By partnering with us, you dramatically mitigate operational risks, ensuring your high-stakes corporate projects cross the finish line on time and under budget.' }
        ])
    },
    {
        _type: 'service',
        title: 'Website Development',
        slug: { _type: 'slug', current: 'website-development' },
        tagline: 'Custom websites tailored to elevate your digital footprint.',
        description: 'Your website is your digital storefront. Our development team architects blazing-fast, secure, and SEO-optimized websites and web applications ranging from corporate landing pages to complex e-commerce platforms.',
        icon: 'Globe',
        order: 9,
        featured: true,
        benefits: [
            { _key: 'b1', title: 'Lightning Fast', description: 'We build with modern frameworks like Astro and Next.js for uncompromised speed.' },
            { _key: 'b2', title: 'Mobile Responsive', description: 'Flawless experiences across all devices, crucial for modern mobile-first user bases.' },
            { _key: 'b3', title: 'SEO Built-In', description: 'Architectural optimization ensures you rank high for relevant search queries right out of the box.' }
        ],
        processSteps: [
            { _key: 'p1', step: 1, title: 'UI/UX Design', description: 'We design modern, highly converting layouts aligned with your brand.' },
            { _key: 'p2', step: 2, title: 'Development', description: 'Our engineers code the frontend and backend architectures securely.' },
            { _key: 'p3', step: 3, title: 'Testing & Launch', description: 'Rigorous QA testing ensures a bug-free launch onto global standard hosting.' }
        ],
        faqs: [
            { _key: 'f1', question: 'Do you build E-commerce stores?', answer: 'Yes, we develop highly customized e-commerce platforms capable of integrating with leading payment gateways.' },
            { _key: 'f2', question: 'Will I be able to edit the website myself?', answer: 'Absolutely. We integrate powerful, user-friendly CMS platforms (like Sanity) so your team can easily update content.' }
        ],
        seo: {
            title: 'Premium Website Development Company',
            description: 'Launch your digital presence with blazing-fast, highly converting custom websites built by expert developers.'
        },
        body: pText([
            { style: 'h2', text: 'Custom Website Development' },
            { style: 'normal', text: 'A slow, outdated website actively drives customers away. At Swift Support Solutions, our top-tier engineering team specializes in building stunning, hyper-fast, and secure custom websites. Unlike cheap template mills, we engineer custom web applications utilizing massive performance frameworks like React, Next.js, and Astro. This delivers an insanely fast user experience crucial for engaging mobile-first internet users.' },
            { style: 'h2', text: 'E-Commerce and API Integrations' },
            { style: 'normal', text: 'We don’t just build aesthetic landing pages; we build heavy-duty commercial engines. If your business needs to process payments, we expertly integrate robust gateways directly into headless E-commerce workflows. Gain an absolute technological dominance over your competitors with a pristine web platform built by Swift Support Solutions.' }
        ])
    }
];

async function seed() {
    console.log('Deleting existing services...');
    await client.delete({ query: '*[_type == "service"]' });

    console.log('Inserting new services with natural SEO body content...');
    for (const s of services) {
        await client.create(s);
        console.log(`Created service: ${s.title}`);
    }
    console.log('Done!');
}

seed().catch(console.error);
