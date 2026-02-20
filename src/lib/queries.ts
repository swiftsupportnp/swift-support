// Centralized GROQ queries for the application

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0]{
    title, tagline, description, email, phone, address,
    logo { asset-> { url } },
    socialLinks, navLinks, footerText,
    googleAnalyticsId, googleSearchConsoleKey, openingHours, priceRange, latitude, longitude
  }
`;

export const ALL_SERVICES_QUERY = `
  *[_type == "service"] | order(order asc, _createdAt asc) {
    _id, title, slug, tagline, description, icon, featured,
    heroImage { asset-> { url, metadata { lqip } }, alt },
    "benefitCount": count(benefits)
  }
`;

export const FEATURED_SERVICES_QUERY = `
  *[_type == "service" && featured == true] | order(order asc) [0...6] {
    _id, title, slug, tagline, icon,
    heroImage { asset-> { url, metadata { lqip } }, alt }
  }
`;

export const SERVICE_BY_SLUG_QUERY = `
  *[_type == "service" && slug.current == $slug][0] {
    _id, title, slug, tagline, description,
    heroImage { asset-> { url, metadata { lqip } }, alt },
    icon, benefits, processSteps, body, faqs,
    seo { title, description }
  }
`;

export const ALL_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) {
    _id, title, slug, excerpt, publishedAt, readingTime,
    mainImage { asset-> { url, metadata { lqip } }, alt },
    author-> { name, image { asset-> { url } }, role },
    categories[]-> { title, slug }
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id, title, slug, excerpt, publishedAt, readingTime,
    mainImage { asset-> { url, metadata { lqip } }, alt },
    author-> { name, image { asset-> { url } }, role, bio },
    categories[]-> { title, slug },
    body,
    seo { title, description, ogImage { asset-> { url } }, canonicalUrl }
  }
`;

export const RECENT_POSTS_QUERY = `
  *[_type == "post"] | order(publishedAt desc) [0...3] {
    _id, title, slug, excerpt, publishedAt, readingTime,
    mainImage { asset-> { url, metadata { lqip } }, alt },
    author-> { name },
    categories[]-> { title, slug }
  }
`;

export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) {
    _id, title, slug, description
  }
`;

export const ALL_SERVICE_SLUGS_QUERY = `
  *[_type == "service"]{ "slug": slug.current }
`;

export const ALL_POST_SLUGS_QUERY = `
  *[_type == "post"]{ "slug": slug.current }
`;

export const ALL_TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] | order(_createdAt asc) {
    name, role, quote, initials, author, location
  }
`;

export const ALL_CLIENT_LOGOS_QUERY = `
  *[_type == "clientLogo"] | order(order asc) {
    name, "imageUrl": image.asset->url
  }
`;
