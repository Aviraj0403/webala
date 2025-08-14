import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Component/Navbar/Navbar";
import Herosection from "./Component/Herosection/Herosection";
// import Footer from "./Component/Footer/Footer";
import Technology from "./Component/Technology/Technology";
import Aboutdeveloper from "./Component/aboutdevelopers/Aboutdevelopers";
import Servicesprovider from "./Component/servicesprovides/Servicesprovider";
import ServicesSection from "./Component/ServicesSection/ServicesSection";
import Testomonials from "./Component/Testomonials/Testomonials";
import Projectsidea from "./Component/Projectsidea/Projectsidea";
import Ourprojects from "./Component/Ourprojects/Ourprojects";
import ContactUs from "./Component/ContactUs/ContactUs";
import Enquiry from "./Component/Enquiry/Enquiry";
import OurMoto from "./Component/Ourmoto/Ourmoto";
// import Developerskills from './Component/Developerskills/Developerskills'

const LandingPage = () => {
  return (
    <div>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Best IT Solutions Company in Bihar & Delhi | Web Development, App Development, SEO & More</title>
        <meta
          name="description"
          content="Webala is a top IT solutions company in Bihar & Delhi, offering high-quality web development, app development, graphic design, SEO, Google Ads, and business support services to national and international clients."
        />
        <meta
          name="keywords"
          content="IT Solutions, Web Development, App Development, SEO, Google Ads, Business Support, Graphic Design, Best IT Company, Bihar, Delhi, India"
        />
        <meta name="robots" content="index, follow" />
        <meta name="google" content="notranslate" />
        
        {/* Open Graph Tags for better social media sharing */}
        <meta property="og:title" content="Best IT Solutions Company in Bihar & Delhi | Webala" />
        <meta
          property="og:description"
          content="Webala is a leading IT solutions provider in Bihar & Delhi. We offer web development, app development, graphic design, SEO, Google Ads, and more for national and international clients."
        />
        <meta property="og:image" content="https://www.webala.in/images/og-image.jpg" />
        <meta property="og:url" content="https://www.webala.in/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best IT Solutions Company in Bihar & Delhi | Webala" />
        <meta
          name="twitter:description"
          content="Webala provides top-tier IT services including web development, app development, graphic design, SEO, Google Ads, and business support. Serving national & international clients."
        />
        <meta name="twitter:image" content="https://www.webala.in/images/twitter-card.jpg" />

        {/* Structured Data for rich snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Webala",
            "url": "https://www.webala.in/",
            "logo": "https://www.webala.in/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91 6200594193",
              "contactType": "Customer Service",
              "areaServed": "IN, USA, UK, and Worldwide",
              "availableLanguage": "English"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Noida sector 52",
              "addressLocality": "Noida",
              "addressRegion": "Uttar Pradesh ,Delhi",
              "postalCode": "201301",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/Webala",
              "https://twitter.com/Webala",
              "https://www.linkedin.com/company/webala"
            ],
            "serviceType": "Web Development, App Development, SEO, Google Ads, Graphic Design"
          })}
        </script>
      </Helmet>

      {/* Page Content */}
      <Navbar />

      <section id="herosection">
        <Herosection />
      </section>

      <section id="servicesprovider">
        <Servicesprovider />
      </section>

      <section id="technology">
        <Technology />
      </section>

      <section id="servicessection">
        <ServicesSection />
      </section>

      <Projectsidea />

      <section id="ourproject">
        <Ourprojects />
      </section>

      <section id="aboutdeveloper">
        <Aboutdeveloper />
      </section>

      <Testomonials />

      <section id="contactus">
        <ContactUs />
      </section>

      <Enquiry />
      
      <OurMoto />

      {/* <Footer /> */}
    </div>
  );
};

export default LandingPage;
