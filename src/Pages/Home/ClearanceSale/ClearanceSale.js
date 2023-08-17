import React from "react";
import "./ClearanceSale.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import imgFin from "../../../assets/image/pawprint 4.png";
import imgBon from "../../../assets/image/bone 3.png";
import { useQuery } from "@tanstack/react-query";
import ClearanceSaleDetail from "../../ClearanceSaleDetail/ClearanceSaleDetail";

const ClearanceSale = () => {
  const { data: clearanceSale = [] } = useQuery({
    queryKey: ["clearanceSale"],
    queryFn: () =>
      fetch("https://y-livid-three.vercel.app/allProduct/clearanceSale").then(
        (res) => res.json()
      ),
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1500,
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div>
      <section>
        <div className="text-center">
          <h1 className="text-3xl font-semibold clearance-food-text">
            Clearance Sale
          </h1>

          <p className="text-2xl font-medium clearance-paragraph">
            Our Trending Products
          </p>
        </div>

        <div className="lg:flex justify-center lg:mt-16 mt-8">
          <div className="clearance-finger hidden lg:inline-flex">
            <img className="clearance-finger-img" src={imgBon} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <div>
              <Slider {...settings}>
                {clearanceSale.map((clearanceSaleList) => (
                  <ClearanceSaleDetail
                    key={clearanceSaleList._id}
                    clearanceSaleList={clearanceSaleList}
                  ></ClearanceSaleDetail>
                ))}
              </Slider>
            </div>
            <Link to="/allProduct/clearanceSale">
              <u>
                <p className="lg:text-end dog-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>

          <div className="clearance-bone hidden lg:inline-flex">
            <img className="clearance-bone-img" src={imgFin} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClearanceSale;
