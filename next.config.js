```javascript
nextConfig.experimental.meta = {
  description: "Your optimized meta description goes here for better SEO. Keep it between 150-160 characters."
};
```
```html
<h1>Main Topic - Website Name</h1>
```
<link rel="canonical" href="">
```javascript
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'og:title',
            value: 'Your Page Title',
          },
          {
            key: 'og:description',
            value: 'Your Page Description',
          },
          {
            key: 'og:image',
            value: 'https://example.com/your-image.jpg',
          },
          {
            key: 'og:url',
            value: 'https://example.com/your-page-url',
          },
        ],
      },
    ];
  },
};
```