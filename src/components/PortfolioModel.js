import React from "react";
import BrandingImage from "../assets/Branding.jpg";
import { Icon } from "@iconify/react";

const PortfolioModel = () => {
  const white = "#FFF";

  return (
    <section className="relative px-3 py-16 md:py-24 bg-gray-50 dark:bg-slate-800 active">
      <div className="">
        <div className="container mx-auto lg:px-10">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h5 className="mb-2 text-base font-medium text-orange-600 uppercase">
              Protfolio
            </h5>
            <h3 className="mb-4 text-xl font-medium md:text-2xl dark:text-white">
              Our Works & Projects
            </h3>
            <p className="max-w-xl px-2 mx-auto text-slate-400 dark:text-slate-300">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 lg:grid-cols-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-md shadow-sm group">
              <img
                src={BrandingImage}
                alt="BrandingImage"
                className="transition duration-500 group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 group"
              />
              <div className="absolute inset-0 z-0 transition duration-500 opacity-50 group-hover:bg-black"></div>
              <div className="content">
                <div className="absolute z-10 transition-all duration-500 opacity-0 icon group-hover:opacity-100 top-4 end-4">
                  <ul>
                    <li className="block ms-1">
                      <a href="/index-two">
                        <span className="relative w-8 h-8 text-white bg-orange-600 border-orange-600 rounded-full btn btn-sm btn-icon hover:bg-orange-700 hover:border-orange-700 ">
                          <Icon
                            icon="uil:camera"
                            width="1.2em"
                            height="1.2em"
                            style={{ color: white }}
                            className="absolute block"
                          />
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="absolute z-10 transition-all duration-500 opacity-0 group-hover:opacity-100 bottom-4 start-4">
                  <a
                    className="absolute inset-x-0 z-10 font-semibold text-white transition-all duration-500 opacity-0 group-hover: group-hover:opacity-100 bottom-6 start-0"
                    href="/"
                  >
                    MockupCollection
                  </a>
                  <p className="mb-0 text-slate-100 tag">Branding</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioModel;
