module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};


```javascript
const schemaOrgData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Your Website Name",
  "url": "https://www.yourwebsite.com",
  "description": "Your website description",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.yourwebsite.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
  schemaOrgData, // Add this line
};
```