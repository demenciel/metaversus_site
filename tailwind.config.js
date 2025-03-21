```javascript
extend: {
  colors: {
    'primary-black': '#1A232E',
    'secondary-white': '#c7c7c7',
    'link-blue': '#1E90FF', // Added for link contrast
  },
  typography: (theme) => ({
    DEFAULT: {
      css: {
        color: theme('colors.secondary-white'),
        a: {
          color: theme('colors.link-blue'),
          '&:hover': {
            color: theme('colors.primary-black'),
          },
        },
        h1: {
          fontSize: '2.25rem',
          fontWeight: '700',
        },
        h2: {
          fontSize: '1.875rem',
          fontWeight: '600',
        },
        h3: {
          fontSize: '1.5rem',
          fontWeight: '500',
        },
      },
    },
  }),
  screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
  },
},
```