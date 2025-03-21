import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
```jsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Title Here" />
<meta name="twitter:description" content="Your description here." />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```
```jsx
<head>
```jsx
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Your Title Here" />
<meta name="twitter:description" content="Your description here." />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```
  <meta property="og:title" content="Your Page Title" />
  <meta property="og:description" content="Your page description." />
  <meta property="og:image" content="URL_to_image" />
  <meta property="og:url" content="Your page URL" />
</head>
```
<link rel="canonical" href="{{website_url}}">
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </head>
    <body>
```jsx
<h1>Main Topic - Website Name</h1>
```{children}</body>
  </html>
);

export default RootLayout;
