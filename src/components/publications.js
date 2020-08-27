import React from "react";

function Publications() {

    return (
        <section class="text-gray-700 body-font" id="pub">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 font-soehne">Publications</h1>
                    <br />
                    <p class="font-machina lg:w-2/3 mx-auto leading-relaxed text-gray-800 text-lg text-base">Published as a Research Assistant under Dr. YoungHee Park and Dr. Thomas Austin at San Jose State University (2015-2019)</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full p-8 flex-col" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}> 
                            <div class="flex items-center mb-3">
                                <h2 class="text-gray-900 text-lg title-font font-medium font-soehne">Token Reward Protocol on Ethereum</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base font-machina">Published & Presented in IEEE DAPPCON 2019, Fremont, California.</p>
                                <a href="https://ieeexplore.ieee.org/document/8783004" class="mt-3 text-red-600 inline-flex items-center font-machina">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24"> 
                                        <path d="M5 12h14M12 5l7 7-7 7"></path> 
                                    </svg>
                                </a> 
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full p-8 flex-col" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                            <div class="flex items-center mb-3">
                                <h2 class="text-gray-900 text-lg title-font font-medium font-soehne">Secure Data Management for IoT using Ethereum</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base font-machina">Published & Presented in ICCE 2020, under CES, Las Vegas, Nevada.</p>
                                <a href="https://ieeexplore.ieee.org/document/9042998" class="mt-3 text-red-600 inline-flex items-center font-machina">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/3">
                        <div class="flex rounded-lg h-full p-8 flex-col" style={{boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"}}>
                            <div class="flex items-center mb-3">
                                <h2 class="text-gray-900 text-lg title-font font-medium font-soehne">Resilient and Efficient Blockchain Consensus Protocol</h2>
                            </div>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base font-machina">Published & Presented in ICCE 2020, under CES, Las Vegas, Nevada.</p>
                                <a href="https://ieeexplore.ieee.org/document/9043061" class="mt-3 text-red-600 inline-flex items-center font-machina">Learn More
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Publications;

