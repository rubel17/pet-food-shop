import React from "react";
import Slider from "react-slick";
import brandLogo from "../../../assets/image/Brand Logo Img.png";
import brandLogo2 from "../../../assets/image/BrandLogo.png";
import Logo1 from "../../../assets/image/logo1.png";
import Logo2 from "../../../assets/image/logo2.png";
import Logo3 from "../../../assets/image/logo3.png";
import Logo4 from "../../../assets/image/logo4.png";
import Logo5 from "../../../assets/image/logo5.png";
import "./BrandLogo.css";

const BrandLogo = () => {
  var settings = {
    dots: true,
    infinite: true,
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
    <div>
      <section className="dog-Foods mb-40">
        <div className="md:text-center mb-12">
          <h1 className="text-3xl font-semibold brand-text">Our Brand</h1>
          <p className="text-2xl font-medium dog-p">
            The best place for all your pet needs trusted by pet lovers
            everywhere.
          </p>
        </div>
        {/* logo */}
        <div className="relative">
          <img src={brandLogo} alt="" />
          <img className="brandLogo2" src={brandLogo2} alt="" />
          <div>
            <Slider className="-mt-48 ml-16 mr-6" {...settings}>
              <div>
                <img src={Logo1} alt="" />
              </div>
              <div>
                <img src={Logo2} alt="" />
              </div>
              <div>
                <img src={Logo3} alt="" />
              </div>
              <div>
                <img src={Logo4} alt="" />
              </div>
              <div>
                <img src={Logo5} alt="" />
              </div>
              <div>
                <img src={Logo5} alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BrandLogo;
