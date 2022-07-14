import React from 'react';
import Link from 'next/link';

export default function Projects(): JSX.Element {
  return (
<section className="text-gray-200 bg-black font-b">
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col">
      <div className="h-1 bg-gray-400 rounded overflow-hidden">
        <div className="w-24 h-full bg-gray-400"></div>
      </div>
      <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
        <h1 className="sm:w-2/5 text-gray-200 font-ri title-font text-4xl mb-2 sm:mb-0">Past Work</h1>
        <p className="sm:w-3/5 leading-relaxed text-base text-gray-200 text-md font-b sm:pl-10 pl-0">Prior to starting Coinvise, I've done academic research on security and blockchain based applications, worked on climate tech, and avionics engineering to build a rocket from scratch.</p>
      </div>
    </div>
    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full rounded-xl" src="/lift.jpg"/>
        </div>
        <h2 className="text-2xl font-ri title-font text-gray-200 mt-5">High Altitude Rocketry Program</h2>
        <p className="text-base leading-relaxed mt-2 text-gray-500">Built a rocket that aims to reach an altitude of 100,000 feet. I was responsible for designing two flight computers that detects altitude, pressure, temperature, and acceleration.</p>
        <Link href="https://www.mercurynews.com/2018/06/11/student-run-program-sends-sjsu-rocket-club-to-new-heights/"><a className="text-gray-400 font-ri inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/need.jpg"/>
        </div>
        <h2 className="text-2xl font-ri title-font text-gray-200 mt-5">Network for Environment & Energy Development</h2>
        <p className="text-base leading-relaxed mt-2 text-gray-500">Implemented a visual recognition algorithm to detect images of biological species and organized a TEDx style event with speakers from Sierra Club, City of Palo Alto, MBARI Institute and San Jose State University to talk about climate action.</p>
        <Link href="https://www.mercurynews.com/2018/06/11/student-run-program-sends-sjsu-rocket-club-to-new-heights/"><a className="text-gray-400 font-ri inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
      <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
        <div className="rounded-lg h-64 overflow-hidden">
          <img alt="content" className="object-cover object-center h-full w-full" src="/ieee.png"/>
        </div>
        <h2 className="text-2xl font-ri title-font text-gray-200 mt-5">Publications</h2>
        <p className="text-base leading-relaxed mt-2 text-gray-500">Previously, I did research on Ethereum with Dr. YoungHee Park and Dr. Thomas Austin where we worked on decentralized storage, data management & building my own consensus algorithm from scratch. We ended up publishing all of them on IEEE Explore.</p>
        <Link href="https://www.researchgate.net/scientific-contributions/Jenil-Thakker-2160711151"><a className="text-gray-400 font-ri inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a></Link>
      </div>
    </div>
  </div>
</section>
</section>
  );
}