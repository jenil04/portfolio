import React from "react";
import defi from "./images/defi.jpg";
import btc from "./images/btc.jpg";
import eth from "./images/eth.png";

function Blog() {
    return (
        <section id="blog" className="body-font">
            <div className="container px-5 py-24 mx-auto">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <h2 class="sm:text-3xl text-2xl text-black font-medium title-font mb-2 md:w-2/5 font-soehne">Understanding with <span class="text-red-600">Jenil</span></h2>
                    <div class="md:w-3/5 md:pl-6">
                        <p class="leading-relaxed text-base font-machina text-gray-800 text-lg">Understanding basic concepts of economics, game theory, crypto and sharpening financial literacy is increasingly significant in today’s digital world. In the understanding newsletter, I write about the building blocks of these essential concepts.</p>
                        <div class="flex md:mt-4 mt-6">
                            <a href="https://jenil.substack.com/embed"><button class="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-black border border-black shadow-lg rounded-full font-machina">Newsletter</button></a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                            <img className="object-cover object-center rounded" alt="blog" src={btc} style={{ filter: "grayscale(100%)" }} />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 font-soehne">CRYPTO</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-machina">Understanding Bitcoin</h1>
                                <p className="leading-relaxed mb-3 font-machina">An alternate approach to digital currencies and distributed systems.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://jenil.substack.com/p/understanding-bitcoin" className="text-red-600 inline-flex items-center md:mb-2 lg:mb-0 font-machina">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                            <img className="object-cover object-center rounded" alt="blog" src={defi} style={{ filter: "grayscale(100%)" }} />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 font-soehne">CRYPTO</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-machina">Understanding Decentralized Finance</h1>
                                <p className="leading-relaxed mb-3 font-machina">Getting up to speed with basic concepts of DeFi and emerging protocols.</p>
                                <div className="flex items-center flex-wrap">
                                    <a href="https://jenil.substack.com/" className="text-red-600 inline-flex items-center md:mb-2 lg:mb-0 font-machina">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full rounded-lg overflow-hidden" style={{ boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)" }}>
                            <img className="object-cover object-center rounded" alt="blog" src={eth} style={{ filter: "grayscale(100%)" }} />
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 font-soehne">CRYPTO</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-machina">Understanding Ethereum</h1>
                                <p className="leading-relaxed mb-3 font-machina">Getting up to speed with decentralized apps, tokens, smart contracts and wallets.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://jenil.substack.com/p/understanding-ethereum" className="text-red-600 inline-flex items-center md:mb-2 lg:mb-0 font-machina">Learn More
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;
