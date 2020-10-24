import React from "react";
import { Link } from "gatsby";

function Header() {

  return (
    <header>
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"> 
      <a href="/#about" className="mr-5 text-black hover:text-red-600 text-lg font-machina">About</a>
      <a href="/#blog" className="mr-5 text-black hover:text-red-600 text-lg font-machina">Blog</a>
      <a href="/#pub" className="mr-5 text-black hover:text-red-600 text-lg font-machina">Publications</a>
      <Link to="/work/" className="mr-5 text-black hover:text-red-600 text-lg font-machina">Work</Link>
    </nav>
    <a href="/" className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0">
      <span className="ml-3 text-lg font-soehne text-red-600 hover:line-through">JENIL THAKKER</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Link to="/contact/"><button className="inline-flex items-center shadow-lg bg-black border-0 py-2 px-4 focus:outline-none hover:bg-white hover:text-black border border-black rounded-full text-base text-white font-machina mt-4 md:mt-0">Contact
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></Link>
    </div>
  </div>
</header>
  );
}

export default Header;

