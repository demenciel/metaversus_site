import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
```jsx
<meta property="og:title" content="Your Page Title" />
<meta property="og:description" content="Your Page Description" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:url" content="https://example.com" />
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
