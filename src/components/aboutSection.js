import React from "react";
import me from "./images/jenil.jpg";

function AboutSection() {

    return (
        <section class="text-gray-700 bg-gray-200 body-font" id="about">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center font-soehne">About</h1>
    <img class="lg:w-2/6 md:w-3/6 w-5/6 mb-12 object-cover object-center justify-center mx-auto rounded" alt="hero" src={me} style={{borderRadius: "50%"}}/>
      <p class="leading-relaxed text-lg font-favorit">Edison bulb retro cloud bread echo park, helvetica stumptown taiyaki taxidermy 90's cronut +1 kinfolk. Single-origin coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware. Man bun next level coloring book skateboard four loko knausgaard. Kitsch keffiyeh master cleanse direct trade indigo juice before they sold out gentrify plaid gastropub normcore XOXO 90's pickled cindigo jean shorts. Slow-carb next level shoindigoitch ethical authentic, yr scenester sriracha forage franzen organic drinking vinegar.</p>
      <span class="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
    </div>
  </div>
</section>
    );
}

export default AboutSection;

