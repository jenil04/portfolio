import React from "react";
import me from "./images/jeniltw.jpg";
import bgr from "./images/Clouds.jpg";

function AboutSection() { 

    return (
        <section className="text-gray-700 body-font" id="about" style={{backgroundImage: `url(${bgr})`}}>
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center font-soehne">About</h1>
    <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-12 object-cover object-center justify-center mx-auto rounded" alt="hero" src={me} style={{borderRadius: "50%", filter: "grayscale(100%)"}}/>
      <p className="leading-relaxed text-lg font-machina">I am a Software Developer, who graduated from San Jose State University with a degree in CS in May 2019. Since then, I've 
      worked as a researcher on blockchain and cryptocurrencies, and a full-stack developer at 0Chain. Currently, I am building a startup in India, and looking for founding engineers
      to join the team. In my free time, I like to read books, learn neuroscience, go on hikes, surfing or occasionally open-water diving. When in comes to sports, I am a professional 
      table tennis player, and have a passion for cricket. Feel free to reach out, or perhaps grab ☕️.</p>
      <span className="inline-block h-1 w-10 rounded bg-black mt-8 mb-6"></span>
    </div>
  </div>
</section>
    );
}

export default AboutSection;

