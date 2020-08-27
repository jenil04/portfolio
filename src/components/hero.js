import React from "react";
import hero from './images/heroimg.png';

function Hero() {
    return (
        <section class="text-gray-700 body-font font-machina">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 font-soehne">Product Design, Crypto & Finance
        </h1>
                    <h2 class="mb-8 leading-relaxed text-lg text-gray-800">I am a full-stack developer based out of San Francisco (Currently in India). For collaborations, feel free
                    to reach out to me.</h2>
                    <div class="flex justify-center"> 
                        <a href="mailto:jenilkthakker@gmail.com"><button class="inline-flex text-white bg-black border-0 py-2 px-6 shadow-lg focus:outline-none hover:bg-gray-800 rounded-full">Say 👋</button></a>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero"  height="400px" width="400px" src={hero} style={{filter: "grayscale(100%)"}}/>
                </div>
            </div>
        </section>
    );
}

export default Hero;
