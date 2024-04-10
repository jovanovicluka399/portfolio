import React from "react";
import { Icon } from "@iconify/react";

const ContactUsModel = () => {
  return (
    <section className="relative px-3 py-16 mx-auto md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="lg:px-10">
        <div className="container md:mx-auto">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-2 text-base font-medium text-orange-600 uppercase">
              CONTACT US
            </h3>
            <h6 className="mb-4 text-xl font-medium md:text-2xl dark:text-white">
              Get In Touch !
            </h6>
            <p className="max-w-xl px-2 mx-auto text-slate-400 dark:text-slate-300">
              Launch your campaign and benefit from our expertise on designing
              and managing conversion centered Tailwind CSS html page.
            </p>
          </div>
          <div className="grid items-center grid-cols-1 gap-6 mt-8 lg:grid-cols-12 md:grid-cols-2">
            <div className="lg:col-span-8">
              <div className="p-6 bg-white rounded-md shadow dark:bg-slate-900">
                <form className="">
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="mb-5 text-right lg:col-span-6">
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-input"
                        placeholder="Name :"
                        autocomplete="off"
                        className="flex-1 w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-orange-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                    <div className="mb-5 lg:col-span-6 border-spacing-1 border-slate-400">
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-input"
                        placeholder="Email :"
                        autocomplete="off"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none form-input focus:border-orange-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <input
                        name="subject"
                        id="subject"
                        placeholder="Subject :"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none form-input focus:border-orange-400 focus:outline-none focus:shadow-outline"
                      />
                    </div>
                  </div>
                  <div className="mb-5">
                    <textarea
                      name="comments"
                      id="comments"
                      placeholder="Message :"
                      className="flex-grow w-full px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none h-28 form-input textarea focus:border-orange-400 focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="flex items-center justify-center text-lg text-white bg-orange-600 border-orange-600 rounded-md btn hover:bg-orange-700 hover:border-orange-700 h-11"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="lg:col-span-4">
              <div className="lg:ms-8">
                <div className="flex justify-end">
                  <div className="mx-auto text-center icons">
                    <Icon
                      icon="uil:phone"
                      width="1.2em"
                      height="1.2em"
                      className="order-last block mb-0 text-2xl rounded uil uil-envelope dark:text-white"
                    />
                  </div>
                  <div className="flex-1 ms-6 me-3">
                    <h5 className="mb-2 text-xl font-medium dark:text-white">
                      Phone
                    </h5>
                    <a href="tel :+152 534-468-854" className="text-slate-400">
                      +152 534-468-854
                    </a>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="mx-auto text-center icons">
                    <Icon
                      icon="uil:envelope-block"
                      width="1.2em"
                      height="1.2em"
                      className="block mb-0 text-2xl rounded uil uil-envelope dark:text-white"
                    />
                  </div>
                  <div className="flex-1 ms-6 me-3">
                    <h5 className="mb-2 text-xl font-medium dark:text-white">
                      Email
                    </h5>
                    <a
                      href="mailto:contact@example.com"
                      className="text-slate-400"
                    >
                      contact@example.com
                    </a>
                  </div>
                </div>
                <div className="flex mt-4">
                  <div className="mx-auto text-center icons">
                    <Icon
                      icon="uil:map-marker"
                      width="1.2em"
                      height="1.2em"
                      className="block mb-0 text-2xl rounded uil uil-map-marker dark:text-white "
                    />
                  </div>
                  <div className="flex-1 ms-6 me-3">
                    <h5 className="mb-2 text-xl font-medium dark:text-white">
                      Location
                    </h5>
                    <p className="text-slate-400">
                      C/54 Northwest Freeway, Suite 558, Houston, USA 485
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsModel;
