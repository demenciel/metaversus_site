/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;


```javascript
const { SitemapStream, streamToPromise } = require('sitemap');

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Website Name",
  "url": "https://www.yourwebsite.com",
  "description": "A brief description of your website.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

module.exports = { nextConfig, structuredData };
```