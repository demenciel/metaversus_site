import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Explore />
    </div>
    <div className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <WhatsNew />
    </div>
    <div className='relative'>
      <World />
      <div className='gradient-04 z-0' />
      <Insights />
      <div className='gradient-05 z-0' />
    </div>
    <Feedback />
    <Footer />
  </div>
);

export default Page;


```javascript
import { Helmet } from 'react-helmet';

const Page = () => (
  <div className='bg-primary-black overflow-hidden'>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "Your Website Name",
          "url": "https://www.yourwebsite.com",
          "description": "A brief description of your website.",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://www.yourwebsite.com/?s={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })}
      </script>
    </Helmet>
    <Navbar />
    <Hero />
    <div className='relative'>
      <About />
      <div className='gradient-03 z-0' />
      <Explore />
    </div>
    <div className='relative'>
      <GetStarted />
      <div className='gradient-04 z-0' />
      <WhatsNew />
    </div>
    <div className='relative'>
      <World />
      <div className='gradient-04 z-0' />
      <Insights />
      <div className='gradient-05 z-0' />
    </div>
    <Feedback />
    <Footer />
  </div>
);
```