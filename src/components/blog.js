import React from "react";
import ai from "./images/ai.png";
import btc from "./images/btc.jpg";
import eth from "./images/eth.png";

function Blog() {
    return (
        <section id="blog" className="text-gray-700 bg-gray-200 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-soehne">Blog</h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <img className="object-cover object-center rounded" alt="blog" src={btc} style={{filter: "grayscale(100%)"}}/>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 font-soehne">CRYPTO</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-favorit">Understanding Bitcoin</h1>
                                <p className="leading-relaxed mb-3 font-favorit">An alternate approach to digital currencies and distributed systems.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="https://jenil.substack.com/p/understanding-bitcoin" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <img className="object-cover object-center rounded" alt="blog" src={ai} style={{filter: "grayscale(100%)"}}/>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 font-soehne">AI</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-favorit">Understanding GPT-3 by OpenAI</h1>
                                <p className="leading-relaxed mb-3 font-favorit">It can understand a Series of Photos, Calculate Inflation Rates, and Tell Us What the Moon Looks Like.</p>
                                <div className="flex items-center flex-wrap">
                                    <a href="https://jenil.substack.com/p/understanding-gpt-3-by-openai" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
                        <div className="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
                        <img className="object-cover object-center rounded" alt="blog" src={eth} style={{filter: "grayscale(100%)"}}/>
                            <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1 font-soehne">CRYPTO</h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-favorit">Understanding Ethereum</h1>
                                <p className="leading-relaxed mb-3 font-favorit">Getting up to speed with decentralized apps, tokens, smart contracts and wallets.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a href="/" className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
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
