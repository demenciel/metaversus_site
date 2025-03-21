import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
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
