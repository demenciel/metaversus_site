const Head = () => (
  <>
    <title>Metaversus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </>
);

export default Head;


```javascript
const Head = () => (
  <>
    <title>Metaversus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Metaversus",
        "url": "https://www.metaversus.com",
        "description": "A platform to explore the metaverse.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.metaversus.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
    </script>
  </>
);
```

```jsx
const Head = () => (
  <>
    <title>Metaversus</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Metaversus",
        "url": "https://www.metaversus.com",
        "description": "Explore the Metaversus universe.",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://www.metaversus.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      })}
    </script>
  </>
);
```