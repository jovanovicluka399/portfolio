import React from "react";
import SlideModel from "./SlideModel";

const TestimonialModel = () => {
  return (
    <section className="relative px-3 py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h6 className="mb-2 text-base font-medium text-orange-600 uppercase">
            TESTIMONAL
          </h6>
          <h3 className="mb-4 text-xl font-medium md:text-2xl dark:text-white">
            Client's Review
          </h3>
          <p className="max-w-xl px-2 mx-auto text-slate-400 dark:text-slate-300">
            Launch your campaign and benefit from our expertise on designing and{" "}
            <br></br> managing conversion centered Tailwind CSS html page.
          </p>
        </div>
        <div className="relative grid grid-cols-1 mt-8">
          <SlideModel />
        </div>
      </div>
    </section>
  );
};

export default TestimonialModel;
