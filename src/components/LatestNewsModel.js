import React from "react";
import BlogImage from "../assets/Blog.jpg";
import { Icon } from "@iconify/react";

const LatestNews = () => {
  return (
    <section className="relative px-3 bg-white">
      <div className="container mx-auto lg:px-10">
        <div className="grid grid-cols-1 px-2 mt-10 text-center">
          <h3 className="mb-2 font-medium text-orange-600 uppercase mt-18">
            BLOGS
          </h3>
          <h6 className="mb-6 text-xl font-medium md:text-2xl">Latest News</h6>
          <p className="max-w-xl mx-auto text-slate-400">
            Launch your campaign and benefit from our expertise on designing and
            managing conversion centered Tailwind CSS html page.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="mt-20 overflow-hidden rounded-md">
            <img src={BlogImage} alt="BlogImage" />
            <div className="pt-6 ps-6 pe-10 content">
              <a
                className="mb-6 text-lg font-medium hover:text-orange-600"
                href="#"
              >
                Building Your Corporate Identity from Upwind
              </a>
              <p className="mt-3 mb-5 text-slate-400">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <a
                className="flex items-center text-lg font-medium transition-all duration-500 ease-in-out border-orange-600 hover:text-orange-600 dark:text-white dark:hover:text-orange-600"
                href="#"
              >
                <span>Read More</span>{" "}
                <span className="ms-1">
                  <Icon icon="uil:arrow-right" width="1.2em" height="1.2em" />
                </span>
              </a>
            </div>
          </div>
          <div className="mt-20 overflow-hidden rounded-md">
            <img src={BlogImage} alt="BlogImage" />
            <div className="pt-6 mb-10 ps-6 pe-10 content">
              <a
                className="mb-6 text-lg font-medium hover:text-orange-600"
                href="#"
              >
                Building Your Corporate Identity from Upwind
              </a>
              <p className="mt-3 mb-5 text-slate-400">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <a
                className="flex items-center text-lg font-medium transition-all duration-500 ease-in-out border-orange-600 hover:text-orange-600 dark:text-white dark:hover:text-orange-600"
                href="#"
              >
                <span>Read More</span>{" "}
                <span className="ms-1">
                  <Icon icon="uil:arrow-right" width="1.2em" height="1.2em" />
                </span>
              </a>
            </div>
          </div>
          <div className="mt-20 overflow-hidden rounded-md">
            <img src={BlogImage} alt="BlogImage" />
            <div className="pt-6 ps-6 pe-10 content">
              <a
                className="mb-6 text-lg font-medium hover:text-orange-600"
                href="#"
              >
                Building Your Corporate Identity from Upwind
              </a>
              <p className="mt-3 mb-5 text-slate-400">
                The phrasal sequence of the is now so that many campaign and
                benefit
              </p>
              <a
                className="flex items-center text-lg font-medium transition-all duration-500 ease-in-out border-orange-600 hover:text-orange-600 dark:text-white dark:hover:text-orange-600"
                href="#"
              >
                <span>Read More</span>{" "}
                <span className="ms-1">
                  <Icon icon="uil:arrow-right" width="1.2em" height="1.2em" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
