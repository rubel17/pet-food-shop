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
      fetch("http://localhost:4000/allProduct/clearanceSale").then((res) =>
        res.json()
      ),
  });
  const settings = {
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
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
    infinite: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
  };
  return (
    <div>
      <section>
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold Clearance-text">
            Clearance Sale
          </h1>
          <p className="text-2xl font-medium dog-p">Our Trending Products</p>
        </div>
        <div className="flex cat-product">
          <div className="cat-finger">
            <img className="cat-bon1-img" src={imgBon} alt="" />
          </div>
          {/* slider start */}
          <div className="cat-category">
            <Slider {...settings}>
              {clearanceSale.map((clearanceSaleList) => (
                <ClearanceSaleDetail
                  key={clearanceSaleList._id}
                  clearanceSaleList={clearanceSaleList}
                ></ClearanceSaleDetail>
              ))}
            </Slider>
            <Link>
              <u>
                <p className="lg:text-end clear-see-all mt-8 pr-11">See all</p>
              </u>
            </Link>
          </div>
          {/* slider end */}
          <div className="cat-bone">
            <img className="cat-fing1-img" src={imgFin} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClearanceSale;
