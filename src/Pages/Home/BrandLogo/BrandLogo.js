import React from "react";
import Slider from "react-slick";
import Logo1 from "../../../assets/image/logo1.png";
import Logo2 from "../../../assets/image/logo2.png";
import Logo3 from "../../../assets/image/logo3.png";
import Logo4 from "../../../assets/image/logo4.png";
import Logo5 from "../../../assets/image/logo5.png";
import "./BrandLogo.css";

const BrandLogo = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="hidden lg:inline">
      <section>
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold brand-text">Our Brand</h1>
          <p className="text-2xl font-medium brand-p">
            The best place for all your pet needs trusted by pet lovers
            everywhere.
          </p>
        </div>
        <div>
          <div className="2xl:px-72 2xl:mx-16 lg:px-52 mt-20">
            <Slider {...settings}>
              <div>
                <img className="w-44 h-24" src={Logo1} alt="" />
              </div>
              <div>
                <img className="w-56 h-24" src={Logo2} alt="" />
              </div>
              <div>
                <img
                  className="w-28 h-24 2xl:mx-16 lg:mx-8"
                  src={Logo3}
                  alt=""
                />
              </div>
              <div>
                <img className="w-48 h-24" src={Logo4} alt="" />
              </div>
              <div>
                <img className="w-44 h-24" src={Logo5} alt="" />
              </div>
              <div>
                <img className="w-56 h-24" src={Logo2} alt="" />
              </div>
              <div>
                <img className="w-48 h-24" src={Logo4} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandLogo;
