import React from "react";
import CalvinCarloImage from "../assets/CalvinCarlo.jpg";
import { Icon } from "@iconify/react";
import AmazonImage from "../assets/amazon.svg";

const OurTeamModel = () => {
  return (
    <section className="relative px-3 py-16 md:py-24 bg-slate-100">
      <div className="lg:px-10">
        <div classname="container mx-auto ">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h6 className="mb-2 text-base font-medium text-orange-600 uppercase">
              OUR TEAM
            </h6>
            <h3 className="mb-4 text-xl font-medium md:text-2xl dark:text-white">
              Creative Minds
            </h3>
            <p className="max-w-xl px-2 mx-auto text-slate-400 dark:text-slate-300">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>
          <div className="container mx-auto">
            <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-4 md:grid-cols-2">
              <div className="relative overflow-hidden rounded-md shadow-sm group">
                <img
                  src={CalvinCarloImage}
                  alt="CalvinCarloImage"
                  className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
                />
                <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
                <ul className="absolute z-10 mb-0 list-none transition-all duration-500 opacity-0 group-hover:opacity-100 top-4 end-4">
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:facebook-f"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:camera"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:twitter"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                </ul>
                <div className="absolute p-4 text-center transition-all duration-500 bg-white rounded-md opacity-0 content start-4 end-4 bottom-4 dark:bg-slate-900 group-hover:opacity-100">
                  <a
                    className="font-medium text-md hover:text-orange-600"
                    href="/"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-slate-400">Designer</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-md shadow-sm group">
                <img
                  src={CalvinCarloImage}
                  alt="CalvinCarloImage"
                  className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
                />
                <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
                <ul className="absolute z-10 mb-0 list-none transition-all duration-500 opacity-0 group-hover:opacity-100 top-4 end-4">
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:facebook-f"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:camera"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:twitter"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                </ul>
                <div className="absolute p-4 text-center transition-all duration-500 bg-white rounded-md opacity-0 content start-4 end-4 bottom-4 dark:bg-slate-900 group-hover:opacity-100">
                  <a
                    className="font-medium text-md hover:text-orange-600"
                    href="/"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-slate-400">Designer</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-md shadow-sm group">
                <img
                  src={CalvinCarloImage}
                  alt="CalvinCarloImage"
                  className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
                />
                <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
                <ul className="absolute z-10 mb-0 list-none transition-all duration-500 opacity-0 group-hover:opacity-100 top-4 end-4">
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:facebook-f"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:camera"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:twitter"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                </ul>
                <div className="absolute p-4 text-center transition-all duration-500 bg-white rounded-md opacity-0 content start-4 end-4 bottom-4 dark:bg-slate-900 group-hover:opacity-100">
                  <a
                    className="font-medium text-md hover:text-orange-600"
                    href="/"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-slate-400">Designer</p>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-md shadow-sm group">
                <img
                  src={CalvinCarloImage}
                  alt="CalvinCarloImage"
                  className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
                />
                <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
                <ul className="absolute z-10 mb-0 list-none transition-all duration-500 opacity-0 group-hover:opacity-100 top-4 end-4">
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:facebook-f"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 mb-1 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:camera"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      className="relative flex items-center justify-center w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      <Icon
                        icon="uil:twitter"
                        width="16"
                        height="20"
                        className="absolute"
                      />
                    </a>
                  </li>
                </ul>
                <div className="absolute p-4 text-center transition-all duration-500 bg-white rounded-md opacity-0 content start-4 end-4 bottom-4 dark:bg-slate-900 group-hover:opacity-100">
                  <a
                    className="font-medium text-md hover:text-orange-600"
                    href="/"
                  >
                    Calvin Carlo
                  </a>
                  <p className="text-slate-400">Designer</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-10 md:grid-cols-4">
              <div className="text-center">
                <h5 className="text-3xl font-semibold">40+</h5>
                <h3 className="mt-2 text-lg text-slate-400">Projects</h3>
              </div>
              <div className="text-center">
                <h5 className="text-3xl font-semibold">40+</h5>
                <h3 className="mt-2 text-lg text-slate-400">Projects</h3>
              </div>
              <div className="text-center">
                <h5 className="text-3xl font-semibold">40+</h5>
                <h3 className="mt-2 text-lg text-slate-400">Projects</h3>
              </div>
              <div className="text-center">
                <h5 className="text-3xl font-semibold">40+</h5>
                <h3 className="mt-2 text-lg text-slate-400">Projects</h3>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-10 md:grid-cols-6">
              <img
                src={AmazonImage}
                href="AmazonImage"
                className="h-[25px] mx-auto my-5"
                alt="AmazonImage"
              />
              <img
                src={AmazonImage}
                href="AmazonImage"
                className="h-[25px] mx-auto my-5"
                alt="AmazonImage"
              />
              <img
                src={AmazonImage}
                href="AmazonImage"
                className="h-[25px] mx-auto my-5"
                alt="AmazonImage"
              />
              <img
                src={AmazonImage}
                href="AmazonImage"
                className="h-[25px] mx-auto my-5"
                alt="AmazonImage"
              />
              <img
                src={AmazonImage}
                href="AmazonImage"
                className="h-[25px] mx-auto my-5"
                alt="AmazonImage"
              />
              <img
                src={AmazonImage}
                href="AmazonImage"
                className="h-[25px] mx-auto my-5"
                alt="AmazonImage"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeamModel;
