import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import hero from "../components/images/hero2.png"

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section class="text-gray-700 bg-gray-200 body-font">
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="mb-10 object-cover object-center rounded" alt="hero" height='250px' width='250px' src={hero}/>
    <div class="text-center lg:w-2/3 w-full">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-soehne">Contact</h1>
      <p class="mb-8 leading-relaxed">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 rounded-full text-lg font-favorit">Send</button>
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
}

export default ContactPage;


