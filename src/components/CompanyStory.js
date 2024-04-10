import React from "react";
import imageUrl from "../assets/about.63164a7cbc8b39dff0a5.jpg";

const ImageTextSection = () => {
  return (
    <section className="flex flex-col justify-center mx-auto my-20 md:flex-row">
      {" "}
      {/* Added justify-content: center */}
      <img
        className="object-cover w-1/4 h-200 "
        src={imageUrl}
        alt="Descriptive alt text"
        width={443}
        height={200}
      />
      <div className="flex-none w-1/2 py-40 mx-20 md:p-8">
        <h2 className="mb-2 text-2xl font-bold">WHO WE ARE ?</h2>
        <h2 className="mb-2 text-2xl font-bold">Our Company Story</h2>
        <p className="leading-loose text-gray-700">
          Start working with Upwind that can provide everything you need to
          generate awareness, drive traffic, connect. Dummy text is text that is
          used in the publishing industry or by web designers to occupy the
          space which will later be filled with 'real' content. This is required
          when, for example, the final text is not yet available. Dummy texts
          have been in use by typesetters since the 16th century.
        </p>
        <button class="bg-red-500 hover:bg-blue-700 text-white font-bold my-20 py-2 px-4 rounded-full">
          View Portfolio
        </button>
      </div>
    </section>
  );
};

export default ImageTextSection;
