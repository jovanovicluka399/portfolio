import React from "react";
import FootLogo from "../assets/FootLogo.png";
import { Icon } from "@iconify/react";

const Footer = () => {
  const white = "#FF6500";
  return (
    <footer className="py-5 bg-slate-800 dark:bg-gray-900 md:px-3">
      <div className="container mx-auto lg:px-10">
        <div className="grid items-center md:grid-cols-12">
          <div className="md:col-span-3">
            <a className="mb-5 logo-footer" href="/">
              <img src={FootLogo} alt="FootLogo" className="mx-auto md:ms-0" />
            </a>
          </div>
          <div className="mt-5 md:col-span-5">
            <div className="text-center">
              <p className="items-center text-gray-400">
                <div className="w-full">
                  <span >© </span>
                  <span >2024</span>
                  <span > Upwind. Design & Develop with</span>
                </div>
                <span className="items-center inline-block mt-3">
                  <Icon
                    icon="mdi:cards-heart"
                    width="1em"
                    height="1em"
                    style={{ color: white }}
                  />
                </span>
                <div className="inline-block ms-1">
                  <span>by</span>
                  <span>
                    <a href="/"> Shreethemes.</a>
                  </span>
                </div>
              </p>
            </div>
          </div>
          <div className="mt-8 md:col-span-4 md:mt-0">
            <ul className="text-center list-none foot-icon md:text-end md:ms-2">
              <li className="inline ms-1">
                <a
                  className="relative w-8 p-1 text-gray-400 border rounded-md btn btn-icon btn-sm border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white"
                  href="/"
                  target="_black"
                >
                  <Icon
                    icon="uil:dribbble"
                    width="1.2em"
                    height="1.2em"
                    className="absolute align-middle uil uil-dribbble"
                  />
                </a>
              </li>
              <li className="inline ms-1">
                <a
                  className="relative w-8 p-1 text-gray-400 border rounded-md btn btn-icon btn-sm border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white"
                  href="/"
                  target="_black"
                >
                  <Icon
                    icon="uil:behance"
                    width="1.2em"
                    height="1.2em"
                    className="absolute align-middle uil uil-dribbble"
                  />
                </a>
              </li>
              <li className="inline ms-1">
                <a
                  className="relative w-8 p-1 text-gray-400 border rounded-md btn btn-icon btn-sm border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white"
                  href="/"
                  target="_black"
                >
                  <Icon
                    icon="uil:linkedin"
                    width="1.2em"
                    height="1.2em"
                    className="absolute align-middle uil uil-dribbble"
                  />
                </a>
              </li>
              <li className="inline ms-1">
                <a
                  className="relative w-8 p-1 text-gray-400 border rounded-md btn btn-icon btn-sm border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white"
                  href="/"
                  target="_black"
                >
                  <Icon
                    icon="uil:facebook-f"
                    width="1.2em"
                    height="1.2em"
                    className="absolute align-middle uil uil-dribbble"
                  />
                </a>
              </li>
              <li className="inline ms-1">
                <a
                  className="relative w-8 p-1 text-gray-400 border rounded-md btn btn-icon btn-sm border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white"
                  href="/"
                  target="_black"
                >
                  <Icon
                    icon="uil:camera"
                    width="1.2em"
                    height="1.2em"
                    className="absolute align-middle uil uil-dribbble"
                  />
                </a>
              </li>
              <li className="inline-block ms-1">
                <a
                  className="relative w-8 p-1 text-gray-400 border rounded-md btn btn-icon btn-sm border-slate-700 dark:border-slate-800 hover:border-orange-600 bg-slate-800 dark:bg-gray-900 hover:bg-orange-600 dark:hover:bg-orange-600 hover:text-white"
                  href="/"
                  target="_black"
                >
                  <Icon
                    icon="uil:twitter"
                    width="1.2em"
                    height="1.2em"
                    className="absolute align-middle uil uil-dribbble"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
