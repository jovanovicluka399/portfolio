import React from "react";
import ReadyImage from "../assets/Ready.png";

const Ready = () => {
  return (
    <section
      className="relative w-full py-24 bg-center bg-cover"
      style={{height:"418px", backgroundImage: `url(${ReadyImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="container relative px-3 mx-auto">
        <div ClassName="grid grid-cols-1 pb-8 mx-auto text-center">
          <h3 className="mb-6 text-2xl font-medium text-center text-white md:text-3xl">Ready to start your next web project now?</h3>
          <p className="mb-6 font-medium text-center text-slate-400">
            Launch your campaign and benefit from our expertise on designing and <br></br>
            managing conversion centered Tailwind CSS html page.
          </p>
        </div>
        <div className="relative flex justify-center mx-auto mt-10">
          <a className="text-white bg-orange-600 border-orange-600 rounded-md btn hover:bg-orange-700 hover:border-orange-700" href="/">Get started !</a>
        </div>
      </div>
    </section>
  );
};

export default Ready;
