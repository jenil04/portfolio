import React from 'react'
import Link from 'next/link';

export default function Header(): JSX.Element {
  return (
    <header className="font-mono text-black bg-white border-b-4 border-black">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/"><a className="flex items-center mb-4 md:mb-0">
          <img src='/jtb.png' alt="logo" className="w-20 h-20" />
        </a></Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <Link href="https://jenil.substack.com"><a className="mr-5 text-xl hover:text-gray-900 hover:underline">Blog</a></Link>
          <Link href="https://twitter.com/0xjenil"><a className="mr-5 text-xl hover:text-gray-900 hover:underline">Twitter</a></Link>
        </nav>
      </div>
    </header>
  )
}
