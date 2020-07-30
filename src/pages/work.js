import React from "react";
import Layout from "../components/layout";
import SEO from "../components/SEO";

import ascent from "./harp/Ascent.jpg";
import lift from "./harp/LiftOff.jpg";
import pad from "./harp/Pad.jpg";

function Work() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Projects"
      />
      <section class="text-gray-700 body-font bg-gray-200">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-soehne">Projects</h1>
              <div class="h-1 w-20 bg-black rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-base font-favorit">When I was an undergraduate at San Jose State, I got bit by the bitcoin bug, which eventually led me to research a lot more into blockchain, crypto, decentralized finance and crypto-economics.
            In the past, I've worked on various products in the crypto space and even won a hackathon sponsored by 0Chain. To explore more of my projects, feel free to check out my <a href="https://github.com/jenil04"><span className="text-indigo-500">GitHub</span></a>.</p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://ethglobal.s3.amazonaws.com/rec2NdDATOzh1SRsY/Slide1.SVG" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-soehne">React, MongoDB, Express, NodeJS</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 font-favorit">Pirate $HIP</h2>
                <p class="leading-relaxed text-base font-favorit">Earn founder's equity in a flash with an option to "cop out" to CASH.</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://media.licdn.com/dms/image/C4E1BAQEds9ZmrtQLtQ/company-background_10000/0?e=2159024400&v=beta&t=YDNogujP0Im1Z5bfK4Z7CxQDAHwwwJumk_EfU57hD2A" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-soehne">NodeJS</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 font-favorit">DPoS</h2>
                <p class="leading-relaxed text-base font-favorit">Delegated Proof-of-Democracy: a DPoS based consensus protocol for permissioned blockchain.</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://miro.medium.com/max/1152/1*nXmnx7Fx4wfwqWv2JdrHrw.png" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-soehne">Solidity</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Token Reward Protocol</h2>
                <p class="leading-relaxed text-base font-favorit">IEEE Publication: A Model for Free Blockchain Transactions through Token Locking on Ethereum.</p>
              </div>
            </div>
            <div class="xl:w-1/4 md:w-1/2 p-4">
              <div class="bg-gray-100 p-6 rounded-lg">
                <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://raw.githubusercontent.com/0chain/ethereum/master/src/images/0chain-readme.png" alt="content" />
                <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font font-soehne">React, Solidity</h3>
                <h2 class="text-lg text-gray-900 font-medium title-font mb-4 font-favorit">Decentralized Storage</h2>
                <p class="leading-relaxed text-base font-favorit">The goal is to create a dApp that stores 0Chain's file metadata as a proof on Ethereum.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex w-full mb-20 flex-wrap">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4 font-soehne">Network for Environment & Energy Development</h1>
            <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base font-favorit">In August 2017, I started N.E.E.D, a non-profit org at San Jose State University to work on climate tech and energy solutions. I firmly believe building sustainable products 
            and find alternatives to non-renewable fuels. At N.E.E.D, we built a piezo-electric tile that sits at the footstep of the science building at San Jose State, and used machine learning
            to predict the lifespan of a solar photo-voltaic system.</p>
          </div>
          <div class="flex flex-wrap md:-m-2 -m-1">
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/22157680_119447038772294_2859739042726019072_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=Um_clU8B5JgAX_YE51l&oh=c504f40ad7a38a9c17a118b49e808cc5&oe=5F4B9718" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://instagram.famd1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/21227544_1457907460941672_8199426497476296704_n.jpg?_nc_ht=instagram.famd1-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=f8MG6b8V9kYAX8HlpBQ&oh=eaf177e1e94c40a27e37470c1201ddaf&oe=5F4D10EF" />
              </div>
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://pbs.twimg.com/media/EeMXuJMUwAEMTXD?format=jpg&name=large" />
              </div>
            </div>
            <div class="flex flex-wrap w-1/2">
              <div class="md:p-2 p-1 w-full">
                <img alt="gallery" class="w-full h-full object-cover object-center block" src="https://instagram.famd1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/21433421_343638149429739_1604196823658921984_n.jpg?_nc_ht=instagram.famd1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=7IXffB2Jtc4AX-Wrt-D&oh=f68b0226c549a8eaff963a84a945c1a2&oe=5F4DAEBF" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://instagram.famd1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/22221316_124865568264669_3976821884221128704_n.jpg?_nc_ht=instagram.famd1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=DEPw3JB84h0AX_K0KEE&oh=5967ec7b2ce609a89a9752db32b03b2a&oe=5F4D7F50" />
              </div>
              <div class="md:p-2 p-1 w-1/2">
                <img alt="gallery" class="w-full object-cover h-full object-center block" src="https://instagram.famd1-2.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/p640x640/56248137_356913814947601_4369576193250576439_n.jpg?_nc_ht=instagram.famd1-2.fna.fbcdn.net&_nc_cat=101&_nc_ohc=P1WQuStz890AX8GNDxU&oh=d3a4fc515954b49b06b2b14aed14dd85&oe=5F4AD0A1" />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap w-full mb-20 container mx-auto">
          <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 font-soehne">High Altitude Rocketry Program</h1>
            <div class="h-1 w-20 bg-black rounded"></div>
          </div>
          <p class="lg:w-1/2 w-full leading-relaxed text-base font-favorit">HARP was a summer project conducted by the Rocketry Club at San Jose State, where the goal was to launch a rocket from the Mojave desert, and have it go 100,000 feet into the atmosphere. I joined HARP because of my passion
          for astrophysics and aerospace engineering. Although it had an 
          abnormal trajectory, being a part of the avionics team, I got to learn a lot about the internal mechanics and fundamentals of building a rocket from scratch. </p>
        </div>

        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="lg:w-2/3 mx-auto">
            <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
              <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src={ascent} />
              <div class="text-center relative z-10 w-full">
              </div>
            </div>
            <div class="flex flex-wrap -mx-2">
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src={lift} />
                  <div class="text-center relative z-10 w-full">
                  </div>
                </div>
              </div>
              <div class="px-2 w-1/2">
                <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                  <img alt="gallery" class="w-full object-cover h-full object-center block absolute inset-0" src={pad} />
                  <div class="text-center relative z-10 w-full">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Work;