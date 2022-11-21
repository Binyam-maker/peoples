import React from "react";
import Head from "next/head";
import Slider from "react-slick";
import Difference from "./Difference";
import differences_data from "../libs/differences_data";
const Differences = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    centerMode: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1368,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="overflow-hidden ">
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <main className="p-8 ">
        <h1 className="font-serif font-semibold text-center text-1xl md:text-xl">
          What makes us different?
        </h1>
        <Slider {...settings}>
          {differences_data.map(({ icon, title, description }) => {
            return (
              <Difference icon={icon} title={title} description={description} />
            );
          })}
        </Slider>
      </main>
    </div>
  );
};

export default Differences;
