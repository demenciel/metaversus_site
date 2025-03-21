import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>{children}</body>
  </html>
);

export default RootLayout;


```javascript
<head>
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Your Website Name",
        "url": "https://yourwebsite.com",
        "description": "A brief description of your website.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://yourwebsite.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    `}
  </script>
</head>
```