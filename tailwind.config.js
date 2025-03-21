/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};


```javascript
const siteSchema = {
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

module.exports = {
  // ...existing config
  theme: {
    extend: {
      // ...existing theme extensions
      schema: siteSchema,
    },
  },
};
```