import React from "react";
import urth from "./images/Urth.svg";
import utopia from "./images/Utopia.png";

function Startup() {
    return (
        <section class="text-gray-700 body-font">
            <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-soehne">Current <span class="text-red-600">work</span></h1>
                    <br />
                    <p class="font-machina text-gray-800 text-lg lg:w-2/3 mx-auto leading-relaxed text-base">Founder and CEO at Urth and Utopia (YC W21). We're looking for people who can help us with growth, if you're interested, email below.</p>
                </div>
                <div class="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div class="rounded-lg h-64 overflow-hidden" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                            <img alt="content" class="object-cover object-center h-full w-full" src={utopia} />
                        </div>
                        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 font-soehne">Utopia</h2>
                        <p class="leading-relaxed text-base font-machina">A 12-week online education program offering micro-degrees in courses like web-development, data science, neuroscience, psychology, blockchain and many more.</p>
                        <a href="https://utopia.so"><button class="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-gray-900 rounded-full font-machina shadow-lg">Learn more</button></a>
                    </div>
                    <div class="sm:w-1/2 mb-10 px-4">
                        <div class="rounded-lg h-64 overflow-hidden" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                            <img alt="content" class="object-cover object-center h-full w-full" src={urth}/>
                        </div>
                        <h2 class="title-font text-2xl font-medium text-gray-900 mt-6 mb-3 font-soehne">Urth</h2>
                        <p class="leading-relaxed text-base font-machina">Urth offers therapy online, with 1:1 sessions or group sessions, with guided meditation. Our unique iterative process involves consultations with a neurologist, psychologist and a psychiatrist.</p>
                        <a href="https://urth.club"><button class="flex mx-auto mt-6 text-white bg-black border-0 py-2 px-5 focus:outline-none hover:bg-gray-900 rounded-full font-machina shadow-lg">Learn more</button></a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Startup;