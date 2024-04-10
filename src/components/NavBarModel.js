import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import UpwindImage1 from "../assets/Upwind1.png";
import UpwindImage2 from "../assets/Upwind2.png";
import UpwindImage3 from "../assets/Upwind3.png";

const Navbar = () => {
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
      className={`lg:px-10 md:px-5 navbar fixed top-0 left-0 w-full z-50 transition duration-500 ease-in-out ${
        isSticky ? "bg-white" : "bg-white lg:bg-transparent "
      }`}
      id="navbar"
    >
      <div className="flex mt-1 w-full justify-between max-[320px]:flex-wrap max-[320px]:ms-20 max-[320px]:ps-20 lg:justify-around">
        <a className="inline-block max-[320px]:-ms-2 min-[992px]:mt-2" href="/">
          <span className="inline-block dark:hidden">
            <img
              src={UpwindImage1}
              alt="UpwindImage1"
              className={`${isSticky ? "block  lg:block" : "block lg:hidden"}`}
            />
            <img
              src={UpwindImage2}
              alt="UpwindImage2"
              className={`${isSticky ? "hidden lg:hidden" : "hidden lg:block"}`}
            />
          </span>
          <img
            src={UpwindImage3}
            alt="UpwindImage3"
            className="hidden dark:inline-block"
          />
        </a>
        <div className="max-[991px]:hidden inline-block w-[650px]">
          <ul className="flex justify-around" id="navbar-navlist ">
            <a className="inline-block active" href="/">
              <span
                className={`text-lg font-medium nav-link ${
                  isSticky ? "text-orange-600" : " text-white"
                }`}
              >
                Home
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                About us
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                Services
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                Portfolio
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                Review
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                Pricing
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                Blog
              </span>
            </a>
            <a className="inline-block active" href="/">
              <span
                className={`text-lg nav-link ${
                  isSticky ? "text-slate-600" : " text-slate-400"
                }`}
              >
                Contact us
              </span>
            </a>
          </ul>
        </div>
        <div className="inline-block min-[992px]:mt-2">
          <ul className="inline-flex mb-0 max-[320px]:-mt-2 me-0 ms-auto">
            <li className="inline-block ms-1">
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
            </li>
            <li className="inline-block ms-1">
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
            </li>
            <li className="inline-block ms-1">
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
            </li>
            <li className="inline-block ms-1">
              <a href="/index-two">
                <button className="relative w-8 h-8 text-black bg-white border-white rounded-full lg:hidden btn btn-sm btn-icon">
                  <Icon
                    icon="ic:baseline-menu"
                    width="1.5em"
                    height="1.5em"
                    className="absolute inline-block lg:hidden" // Apply Tailwind classes
                  />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
