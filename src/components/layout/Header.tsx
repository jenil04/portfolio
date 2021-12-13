import React from 'react'
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="font-t text-white bg-black">
      <div className="container mx-auto flex flex-wrap p-5 md:flex-row items-center">
        <Link href="/"><a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
          <span className="text-2xl">Jenil Thakker</span>
        </a></Link>
        {<nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="https://jenil.substack.com"><a className="mr-5 text-xl font-b  hover:text-gray-200">Blog</a></Link>
          <Link href="https://twitter.com/0xjenil"><a className="mr-5 text-xl font-b  hover:text-gray-200">Twitter</a></Link>
  </nav>}
      </div>
    </header>
  )
}
