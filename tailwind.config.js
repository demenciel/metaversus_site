```javascript
extend: {
  colors: {
    'primary-black': '#1A232E',
    'secondary-white': '#c7c7c7',
    'link-blue': '#1E90FF', // Ensure link contrast
  },
  transitionTimingFunction: {
    'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
  },
  typography: {
    DEFAULT: {
      css: {
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
        a: {
          color: '#1E90FF', // Ensure link contrast
          '&:hover': {
            color: '#104E8B',
          },
        },
      },
    },
  },
},
screens: {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
},
```