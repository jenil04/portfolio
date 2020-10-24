import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl font-soehne hover:text-red-600 hover:line-through">JT</span>
        </a>
        <p className="text-md text-gray-700 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-machina">© 2020 Jenil Thakker
        </p>
      </div>
    </footer>
  );
}

export default Footer;
