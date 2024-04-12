import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import UpwindImage1 from "../assets/Upwind1.png";
import UpwindImage2 from "../assets/Upwind2.png";
import UpwindImage3 from "../assets/Upwind3.png";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-screen z-20 transition duration-500 ease-in-out ${
        isSticky ? "bg-white" : "bg-white lg:bg-transparent "
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center justify-between w-11/12 lg:w-full">
            <div className="flex-shrink-0">
              <a className="" href="/">
                <span className="">
                  <img
                    src={UpwindImage1}
                    alt="UpwindImage1"
                    className={`${isSticky ? "block" : "block lg:hidden"}`}
                  />
                  <img
                    src={UpwindImage2}
                    alt="UpwindImage2"
                    className={`${isSticky ? "hidden" : "hidden lg:block"}`}
                  />
                </span>
                <img
                  src={UpwindImage3}
                  alt="UpwindImage3"
                  className="hidden dark:block"
                />
              </a>
            </div>
            <div className="hidden lg:block">
              <div className="flex items-baseline ml-10 space-x-4">
                <a className="" href="/">
                  <span
                    className={`text-lg font-medium nav-link ${
                      isSticky ? "text-orange-600" : " text-white"
                    }`}
                  >
                    Home
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    About us
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    Services
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    Portfolio
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    Review
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    Pricing
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    Blog
                  </span>
                </a>
                <a className="" href="/">
                  <span
                    className={`text-lg nav-link ${
                      isSticky ? "text-slate-600" : " text-slate-400"
                    }`}
                  >
                    Contact us
                  </span>
                </a>
              </div>
            </div>
            <div className="flex mt-2 space-x-1 shrink-0">
              <div className="">
                <a href="/index-two">
                  <button
                    className={`text-white rounded-full btn btn-sm btn-icon relative w-8 h-8 
                ${
                  isSticky
                    ? "bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700"
                    : "lg:bg-white lg:border-white lg:hover:bg-slate-100 lg:hover:border-slate-100 bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700"
                }`}
                  >
                    <Icon
                      icon="uil:github"
                      width="1.2em"
                      height="1.2em"
                      className={`absolute inline-block ${
                        isSticky ? "text-white" : "text-white lg:text-black"
                      }`} // Apply Tailwind classes
                    />
                  </button>
                </a>
              </div>
              <div className="">
                <a href="/index-two">
                  <button
                    className={`text-white rounded-full btn btn-sm btn-icon relative w-8 h-8 
                ${
                  isSticky
                    ? "bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700"
                    : "lg:bg-white lg:border-white lg:hover:bg-slate-100 lg:hover:border-slate-100 bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700"
                }`}
                  >
                    <Icon
                      icon="uil:twitter"
                      width="1.2em"
                      height="1.2em"
                      className={`absolute inline-block ${
                        isSticky ? "text-white" : "text-white lg:text-black"
                      }`} // Apply Tailwind classes
                    />
                  </button>
                </a>
              </div>
              <div className="">
                <a href="/index-two">
                  <button
                    className={`text-white rounded-full btn btn-sm btn-icon relative w-8 h-8 
                ${
                  isSticky
                    ? "bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700"
                    : "lg:bg-white lg:border-white lg:hover:bg-slate-100 lg:hover:border-slate-100 bg-orange-600 border-orange-600 hover:bg-orange-700 hover:border-orange-700"
                }`}
                  >
                    <Icon
                      icon="uil:camera"
                      width="1.2em"
                      height="1.2em"
                      className={`absolute inline-block ${
                        isSticky ? "text-white" : "text-white lg:text-black"
                      }`} // Apply Tailwind classes
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="flex -ml-2 lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              aria-controls="mobile-menu"
              aria-expanded="false"
              className="w-8 h-8 text-black bg-white border-white rounded-full lg:hidden btn btn-sm btn-icon"
            >
              <Icon
                icon="ic:baseline-menu"
                width="1.7em"
                height="1.7em"
                className="absolute inline-block lg:hidden" // Apply Tailwind classes
              />
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden" id="mobile-menu">
            <div ref={ref} className="pt-2 pb-3 mt-2 space-y-7 overflow-y-scroll p-x-2 h-[350px] sm:px-3">
              <a
                href="/Home"
                className="block px-3 text-base font-medium text-orange-600"
              >
                Home
              </a>

              <a
                href="/AboutUs"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                About us
              </a>

              <a
                href="/Services"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                Services
              </a>

              <a
                href="/Portfolio"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                Portfolio
              </a>

              <a
                href="/Review"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                Review
              </a>

              <a
                href="/Review"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                Pricing
              </a>

              <a
                href="/Review"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                Blog
              </a>

              <a
                href="/Review"
                className="block px-3 text-base font-medium text-slate-800 hover:text-orange-600"
              >
                Contact us
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
