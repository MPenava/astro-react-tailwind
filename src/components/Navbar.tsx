import React from "react";

const Navbar = () => {
  return (
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4"
      data-twe-navbar-ref
    >
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <div className="ms-2 md:me-2">
          <a className="text-xl text-black dark:text-white" href="#">
            Navbar
          </a>
        </div>

        <div
          className="!visible mt-2 flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent14"
          data-twe-collapse-item
        >
          <ul
            className="list-style-none me-auto flex flex-col ps-0 lg:mt-1 lg:flex-row"
            data-twe-navbar-nav-ref
          >
            <li
              className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2"
              data-twe-nav-item-ref
            >
              <a
                className="text-black dark:text-white lg:px-2"
                aria-current="page"
                href="#"
                data-twe-nav-link-ref
              >
                Home
              </a>
            </li>
            <li
              className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-item-ref
            >
              <a
                className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                href="#"
                data-twe-nav-link-ref
              >
                Link
              </a>
            </li>
            <li
              className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0"
              data-twe-nav-link-ref
            >
              <a className="pointer-events-none text-black/30 dark:text-white/30 lg:px-2">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
