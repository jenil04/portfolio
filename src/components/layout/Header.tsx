import React from 'react'
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="text-gray-200 bg-black">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
          <Link href="https://twitter.com/0xjenil"><a className="hover:text-gray-300"><svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-8 h-8" viewBox="0 0 24 24">
          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
        </svg></a></Link>
      </nav>
        <span className="ml-3 text-4xl font-ri text-gray-200">Jenil Thakker</span>
      <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Link href="https://jenil.mirror.xyz"><button className="inline-flex items-center bg-gray-200 border-0 py-2 text-gray-800 px-6 focus:outline-none hover:bg-gray-300 hover:text-gray-900 rounded-full mt-4 md:mt-0 font-ri text-2xl">Ideas
        </button></Link>
      </div>
    </div>
    </header>
  )
}
