import React from 'react';
import Link from 'next/link';

export default function Hero(): JSX.Element {
  return (
    <section className="font-b">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="/jenil.svg" />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-8 leading-relaxed text-black text-xl">I like to build software that contributes towards human progress. I'm currently working on <Link href="https://coinvise.co"><a className="underline font-monob text-indigo-600">Coinvise</a></Link> - infrastructure for building & operating web3 communities.</p>
          <p className="leading-relaxed text-black text-xl mb-8">I've also created $JENIL - a personal token designed to reward people that add value to my life. Learn more below.</p>
          <p className="leading-relaxed text-black text-xl">We're hiring senior fullstack devs & smart contract developers at Coinvise. If you'd like to join our team, reach out to me below.</p>
        </div>
      </div>
    </section>
  );
}