import React from 'react';

function Navbar() {
  return (
    <nav className="bg-teal-500 dark:bg-teal-500-dark border-gray-200 fixed top-0 left-0 w-full z-10" style={{ height: '100px' }}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            
            <img src="/assets/images/download.png" className="h-6" alt="Your Image"  style={{ height: '80px' }}/>
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">CureCompass</span>
        </a>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-8 h-8 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-4 h-4 text-black dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14" style={{ filter: "drop-shadow(2px 4px 6px black)" }}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-bold flex flex-col p-2 md:p-0 mt-2 rounded-lg md:flex-row md:space-x-4 rtl:space-x-reverse md:mt-0 md:border-0 dark:text-white">
            <li>
              <a href="/" className="block py-1 px-2 text-sm rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page" style={{ filter: "drop-shadow(2px 4px 6px black)" }}>Home</a>
            </li>
          
            <li>
              <a href="/Recommendation" className="block py-1 px-2 text-sm rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-black" aria-current="page" style={{ filter: "drop-shadow(2px 4px 6px black)" }}>Recommendation</a>
            </li>
            <li>
              <a href="/about" className="block py-1 px-2 text-sm rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ filter: "drop-shadow(2px 4px 6px black)" }}>About</a>
            </li>
            <li>
              <a href="/contact" className="block py-1 px-2 text-sm rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" style={{ filter: "drop-shadow(2px 4px 6px black)" }}>Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
