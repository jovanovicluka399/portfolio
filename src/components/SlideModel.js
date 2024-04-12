import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialImage from "../assets/Testimonal1.jpg";

export default function SimpleSlider() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [updateCount, setUpdateCount] = useState(0);
  let sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
    afterChange: () => setUpdateCount(updateCount + 1),
    beforeChange: (current, next) => setSlideIndex(next),
  };

  return (
    <div>
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="relative py-8 mx-5 mt-8 overflow-hidden bg-white rounded-md shadow-md shadow-text-800">
          <div className="w-[100px] mx-auto overflow-hidden rounded-full">
            <img
              src={TestimonialImage}
              alt="Testimonal1"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 mt-6 text-center">
            <p className="pb-3 text-lg text-slate-600">
              "It seems that only fragments of the original text remain in the
              Lorem Ipsum texts used today. "
            </p>
            <h3 className="mb-1 text-lg font-medium text-orange-600">
              Christa Smith
            </h3>
            <h6 className="text-sm text-slate-500">Manager</h6>
          </div>
        </div>
        <div className="relative py-8 mx-5 mt-8 overflow-hidden bg-white rounded-md shadow-md shadow-text-800">
          <div className="w-[100px] mx-auto overflow-hidden rounded-full">
            <img
              src={TestimonialImage}
              alt="Testimonal1"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 mt-6 text-center">
            <p className="pb-3 text-lg text-slate-600">
              "It seems that only fragments of the original text remain in the
              Lorem Ipsum texts used today. "
            </p>
            <h3 className="mb-1 text-lg font-medium text-orange-600">
              Christa Smith
            </h3>
            <h6 className="text-sm text-slate-500">Manager</h6>
          </div>
        </div>
        <div className="relative py-8 mx-5 mt-8 overflow-hidden bg-white rounded-md shadow-md shadow-text-800">
          <div className="w-[100px] mx-auto overflow-hidden rounded-full">
            <img
              src={TestimonialImage}
              alt="Testimonal1"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 mt-6 text-center">
            <p className="pb-3 text-lg text-slate-600">
              "It seems that only fragments of the original text remain in the
              Lorem Ipsum texts used today. "
            </p>
            <h3 className="mb-1 text-lg font-medium text-orange-600">
              Christa Smith
            </h3>
            <h6 className="text-sm text-slate-500">Manager</h6>
          </div>
        </div>
        <div className="relative py-8 mx-5 mt-8 overflow-hidden bg-white rounded-md shadow-md shadow-text-800">
          <div className="w-[100px] mx-auto overflow-hidden rounded-full">
            <img
              src={TestimonialImage}
              alt="Testimonal1"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 mt-6 text-center">
            <p className="pb-3 text-lg text-slate-600">
              "It seems that only fragments of the original text remain in the
              Lorem Ipsum texts used today. "
            </p>
            <h3 className="mb-1 text-lg font-medium text-orange-600">
              Christa Smith
            </h3>
            <h6 className="text-sm text-slate-500">Manager</h6>
          </div>
        </div>
        
      </Slider>
    </div>
  );
}
