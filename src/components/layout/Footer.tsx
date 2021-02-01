import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <>
      <footer className="font-mono bg-white text-black border-t-4 border-black">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a href="mailto:jenilkthakker@gmail.com" className="flex hover:underline items-center md:justify-start justify-center">
            <span className="text-xl underline">jenilkthakker@gmail.com</span>
          </a>
        </div>
      </footer>
    </>
  )
}
