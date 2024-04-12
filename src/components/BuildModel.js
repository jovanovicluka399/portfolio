import React from "react";
import BuildModelImage from "../assets/BuildModelImage.jpg";
import { Icon } from "@iconify/react";

const BuildModel = () => {
  const white = "#fff";

  return (
    <section
      className="relative table w-full px-3 bg-center bg-cover py-36 lg:py-72 lg:pb-0 md:pb-8"
      style={{ height: "400px", backgroundImage: `url(${BuildModelImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container relative mx-auto lg:px-10">
        <div className="grid gap-2 mt-10 lg:grid-cols-12 md:grid-cols-2">
          <div className="lg:col-span-7">
            <h4 className="text-4xl font-medium leading-normal text-white lg:text-5xl lg:leading-normal mb-7 position-relative">
              Bluid your audiance <br></br> and sale more
            </h4>
            <p className="max-w-2xl mb-0 text-lg font-medium text-white opacity-50">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
            <div className="relative flex items-center justify-start mt-10">
              <a
                className="text-lg text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 me-1"
                href="/"
              >
                Get Started
              </a>
              <a
                className="relative w-12 h-12 text-white bg-orange-600 border-orange-600 rounded-full btn hover:bg-orange-700 hover:border-orange-700 ms-1"
                href="/"
              >
                <Icon
                  icon="mdi:play"
                  width="1.5em"
                  height="1.5em"
                  style={{ color: white }}
                  className="absolute"
                />
              </a>
              <p className="text-white uppercase lg:text-lg ms-2">Watch now</p>
            </div>
          </div>
          <div className="mt-8 lg:col-span-5 md:mt-0">
            <div className="relative z-10 p-6 bg-white shadow dark:bg-slate-900 rounded-xl md:p-10 lg:ms-10">
              <h4 className="mb-5 text-2xl font-medium dark:text-white">
                We are offering 14 <br></br>days free trial{" "}
              </h4>
              <form>
                <div className="grid grid-cols-1">
                  <div className="mb-5">
                    <label className="text-lg dark:text-white">Name</label>
                    <input
                      name="name"
                      id="fName"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mt-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline mb-7"
                      placeholder="Name :"
                    ></input>
                    <label className="text-lg dark:text-white">Email</label>
                    <input
                      name="Email"
                      id="fEmail"
                      type="Email"
                      className="flex-grow w-full h-12 px-4 mt-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none mb-7 focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      placeholder="Email :"
                    ></input>
                    <label className="text-lg dark:text-white">Phone No.</label>
                    <input
                      name="name"
                      id="fName"
                      type="text"
                      className="flex-grow w-full h-12 px-4 mt-2 mb-2 mb-6 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      placeholder="+12 12458 854 :"
                    ></input>
                    <a
                      className="w-full mt-4 text-white bg-orange-600 border-orange-600 rounded-md btn hover:bg-orange-700 hover:border-orange-700"
                      href="/"
                    >
                      Free Trial
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildModel;
