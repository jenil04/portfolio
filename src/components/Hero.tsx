import React from 'react';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
    <section className="font-mono">
      <div className="container mx-auto flex px-5 py-40 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img src='/jenil.svg' alt="logo"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black font-monob">Hi, I'm Jenil 
      </h1>
          <p className="mb-8 leading-relaxed text-black text-xl">I like to build software that contributes towards human progress. I'm currently working on <Link href="https://coinvise.co"><a className="underline font-monob">Coinvise</a></Link>, the first decetralized social network on Ethereum. Occasionally, I like to write about crypto <Link href="https://jenil.substack.com"><a className="underline font-monob">here</a></Link>.</p>
          <p className="leading-relaxed text-black text-xl mb-8">We're hiring developers, content creators, community/ops and design roles at Coinvise, reach out to me below if you're interested.</p>
          <p className="leading-relaxed text-black text-xl">You'll be joining a VC backed startup, with competitive pay and freedom from work timings.</p>
        </div>
      </div>
    </section>
  );
}