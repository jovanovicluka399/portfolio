import React from "react";
import WhoWeAre from "../assets/WhoWeAre.jpg";

const WhoWeAreModel = () => {
  return (
    <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-slate-800 active">
      <div className="container px-3 md:mx-auto lg:px-10">
        <div className="container mx-auto lg:px-2">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-12 md:grid-cols-2">
            <div className="lg:col-span-5">
              <div className="relative ">
                <img
                  src={WhoWeAre}
                  alt="WhoWeAre"
                  className="rounded-lg shadow-lg"
                />
                <div className="absolute text-center bottom-2/4 translate-y-2/4 start-0 end-0">
                  <a
                    className="inline-flex items-center justify-center w-20 h-20 text-orange-600 bg-white rounded-full shadow-lg lightbox shadow-slate-100 dark:shadow-slate-800 dark:bg-slate-900"
                    href="/"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 fill-orange-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h6 className="mb-2 text-base font-medium text-orange-600 uppercase">
                  Who We Are ?
                </h6>
                <h3 className="mb-4 text-xl font-medium md:text-2xl dark:text-white">
                  Our Company Story
                </h3>
                <p className="max-w-2xl text-slate-400 dark:text-slate-300">
                  Start working with Upwind that can provide everything you need
                  to generate awareness, drive traffic, connect. Dummy text is
                  text that is used in the publishing industry or by web
                  designers to occupy the space which will later be filled with
                  'real' content. This is required when, for example, the final
                  text is not yet available. Dummy texts have been in use by
                  typesetters since the 16th century.
                </p>
                <div className="relative mt-10">
                  <a
                    href="/"
                    className="text-white bg-orange-600 border-orange-600 rounded-md btn hover:bg-orange-700 hover:border-orange-700"
                  >
                    View Portfolio
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreModel;
