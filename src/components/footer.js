import React from "react";

function Footer() {
  return (
    <footer className="text-gray-700 body-font bg-gray-200 font-favorit">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <span className="ml-3 text-xl font-soehne">JT</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-favorit">© 2020 Jenil Thakker
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a href="https://www.facebook.com/siddharth.warrier.9" className="text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a href="https://twitter.com/sid_warrier" className="ml-3 text-gray-500">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a href="https://www.instagram.com/sid_warrier/" className="ml-3 text-gray-500">
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a href="https://www.youtube.com/user/MrMichaelclaw" className="ml-3 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" stroke="currentColor" width="21" height="21" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
