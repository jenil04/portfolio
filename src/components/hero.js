import React from "react";
import hero from './images/heroimg.png';
import { FaLinkedinIn, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';
import TextLoop from "react-text-loop";

function Hero() {
    return (
        <section class="body-font font-machina">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="sm:text-4xl text-3xl mb-4 text-black font-soehne">Interested in {" "}
                        <TextLoop interval={1500}>
                            <span class="text-red-600">Crypto</span>
                            <span class="text-red-600">Education</span>
                            <span class="text-red-600">FinTech</span>
                            <span class="text-red-600">Healthcare</span>
                        </TextLoop>
        </h1>
                    <h2 class="mb-8 leading-relaxed text-lg text-gray-800">I am a full-stack developer based out of San Francisco (Currently in India). For collaborations, feel free
                    to reach out to me.</h2>
                    <div class="flex justify-center">
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <a href="https://www.linkedin.com/in/jenilthakker/" >
                                <FaLinkedinIn class="hover:text-indigo-600" style={{ height: "30px", width: "30px" }} />
                            </a>
                            <a href="https://twitter.com/jenilkr" class="ml-3">
                                <FaTwitter class="hover:text-blue-600" style={{ height: "30px", width: "30px" }} />
                            </a>
                            <a href="https://www.instagram.com/jenil_thakker/?hl=en" class="ml-3">
                                <FaInstagram class="hover:text-pink-600" style={{ height: "30px", width: "30px" }} />
                            </a>
                            <a href="https://github.com/jenil04" class="ml-3">
                                <FaGithub class="hover:text-gray-700 hover:shadow-lg" style={{ height: "30px", width: "30px" }} />
                            </a>
                        </span>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" height="400px" width="400px" src={hero} style={{ filter: "grayscale(100%)" }} />
                </div>
            </div>
        </section>
    );
}

export default Hero;
