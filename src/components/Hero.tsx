import React from 'react';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
    <section className="text-gray-200 bg-black font-b">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-3xl text-4xl font-ri title-font mb-4">About me</h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200 font-b">I like to build software that contributes to human progress. I'm currently working on projects in web3, focusing on DAOs, community economics and tooling that expands the scope of digital ownership.</p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-gray-400 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-gray-200 text-2xl title-font font-ri mb-3">Work</h2>
              <p className="leading-relaxed text-base">I work on Coinvise — essential no-code tools for creators to launch and operate web3 communities. Since it's launch in 2021, Coinvise has grown to over 20K creators and onboarded notable brands including RAC, CoinDesk, Defiant and FWB.</p>
              <Link href="https://coinvise.co"><a className="mt-3 text-gray-400 font-ri text-xl inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a></Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-gray-200 text-2xl title-font font-ri mb-3">Investments</h2>
              <p className="leading-relaxed text-base">I invest in communities, infrastructure platforms and modular tooling that enables broader individual sovereignty, coordination and ownership via economic lego blocks. If you're a founder and I can help you out, feel free to reach out!</p>
              <Link href="https://twitter.com/0xjenil"><a className="mt-3 text-gray-400 font-ri text-xl inline-flex items-center">Say Hello
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a></Link>
            </div>
          </div>
          <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="flex-grow">
              <h2 className="text-gray-200 text-2xl title-font font-ri mb-3">Community</h2>
              <p className="leading-relaxed text-base">I'm building an invite-only community of founders, creators, stewards and investors that share similar ideas and observations. Joining the community gives you access to my newsletter, support in building your project and more.</p>
              <Link href="https://www.coinvise.co/j/memberships"><a className="mt-3 text-gray-400 font-ri text-xl inline-flex items-center">Get Membership
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}