```javascript
extend: {
  colors: {
    'primary-black': '#1A232E',
    'secondary-white': '#c7c7c7',
    'link-blue': '#1E40AF', // New color for link contrast
  },
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: theme('colors.primary-black'),
        h1: {
          fontWeight: '700',
          fontSize: '2.25rem',
          lineHeight: '2.5rem',
        },
        h2: {
          fontWeight: '600',
          fontSize: '1.875rem',
          lineHeight: '2.25rem',
        },
        h3: {
          fontWeight: '500',
          fontSize: '1.5rem',
          lineHeight: '2rem',
        },
        a: {
          color: theme('colors.link-blue'),
          '&:hover': {
            color: theme('colors.secondary-white'),
          },
        },
      },
    },
  }),
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
},
```