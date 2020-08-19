import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import Hero from "../components/hero";
import Blog from "../components/blog";
import AboutSection from "../components/aboutSection";
import Publications from "../components/publications";
import Startup from "../components/startup";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Hero/>
      <AboutSection/>
      <Startup/>
      <Blog />
      <Publications/>
    </Layout>
  );
} 

export default IndexPage;
