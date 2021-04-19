import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="font-mono bg-white text-black border-t-2 border-gray-400">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a href="mailto:j@coinvise.co" className="flex hover:underline items-center md:justify-start justify-center">
            <span className="text-xl underline">j@coinvise.co</span>
          </a>
        </div>
      </footer>
    </>
  )
}
