import React from "react";
import logo from "./images/logo.png";

function Startup() {
    return (
        <section id="startup"> 
            <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-black font-soehne">Current <span class="text-red-600">work</span></h1>
                    <br />
                    <p class="font-machina text-gray-800 text-lg lg:w-2/3 mx-auto leading-relaxed text-base">Pioneer, YC21.</p>
                </div>
                <div class="flex flex-wrap -mx-4 -mb-10 text-center justify-center">
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div class="rounded-lg h-64 overflow-hidden shadow-lg">
                            <img alt="content" class="object-cover object-center h-full w-full" src={logo}/>
                        </div>
                        <h2 class="title-font text-2xl font-medium text-black mt-6 mb-3 font-soehne">STEALTH</h2>
                        <p class="leading-relaxed text-base text-lg font-machina">TBD</p>
                        <a href="https://utopia.so"><button class="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-white hover:text-black border border-black rounded-full font-machina shadow-lg">Learn more</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Startup;