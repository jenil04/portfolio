import React from "react";

function Header() {

  return (
    <header class="text-gray-700 bg-gray-200 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav class="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto"> 
      <a href="/#about" class="mr-5 hover:text-gray-900 font-favorit">About</a>
      <a href="/#blog" class="mr-5 hover:text-gray-900 font-favorit">Blog</a>
      <a href="/work" class="mr-5 hover:text-gray-900 font-favorit">Work</a>
    </nav>
    <a href="/" class="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      <span class="ml-3 text-xl font-soehne">Jenil Thakker</span>
    </a>
    <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <a href="/contact"><button class="inline-flex items-center bg-gray-900 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 rounded-full text-base text-white font-favorit mt-4 md:mt-0">Connect
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button></a>
    </div>
  </div>
</header>
  );
}

export default Header;

