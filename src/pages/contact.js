import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";
import hero from "../components/images/hero2.png"
import bg from "../components/images/bg.jpg";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />
      <section class="text-gray-700 bg-gray-200 body-font" style={{backgroundImage: `url(${bg})`}}>
        <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img class="mb-10 object-cover object-center rounded" alt="hero" height='250px' width='250px' src={hero} />
          <div class="text-center lg:w-2/3 w-full">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-soehne">Contact</h1>
            <p class="mb-8 leading-relaxed font-machina text-lg text-gray-800">Feel free to reach out to me for work opportunities or collab on a side-project. I'm also looking to build a team (founding engineer) for a startup I'm working on, so if you are based in India, please 
            send me an email. Other than that, I am always looking to have intellectual conversations on tech, life or just about anything else.</p>
            <div class="flex justify-center">
              <button href="mailto:jenilkthakker@gmail.com" class="inline-flex text-white bg-black border-0 py-3 px-6 focus:outline-none hover:bg-gray-800 rounded-full text-lg font-machina">Email me</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default ContactPage;


