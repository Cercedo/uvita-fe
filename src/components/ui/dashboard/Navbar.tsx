import Link from 'next/link';
import React from 'react';

import { CloseIcon, HamburgerIcon, LogoIcon } from '../icons';

import NavLinks from './NavLinks';

const Navbar: React.FC<{}> = () => {
  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-3 bg-white border-b border-gray-200 dark:bg-neutral-800 dark:border-neutral-700">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80"
            href="/dashboard"
            aria-label="Brand"
          >
            <span className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
              <LogoIcon className="w-9 h-auto text-indigo-500" />
              Uvita
            </span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              id="hs-navbar-example-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-example"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-example"
            >
              <HamburgerIcon className="hs-collapse-open:hidden shrink-0 size-4" />
              <CloseIcon className="hs-collapse-open:block hidden shrink-0 size-4" />
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
        <div
          id="hs-navbar-example"
          className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
          aria-labelledby="hs-navbar-example-collapse"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 font-medium text-gray-600 hover:text-gray-400 focus:outline-none focus:text-gray-400 dark:text-neutral-400 dark:hover:text-neutral-500 dark:focus:text-neutral-500">
            <NavLinks />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
