import React from "react";
import "./CatFood.css";
import catFoods from "../../assets/image/cat food.png";
import Slider from "react-slick";
import imgFin from "../../assets/image/pawprint (1) 1.png";
import { Link } from "react-router-dom";
import imgBon from "../../assets/image/bone 3.png";
import CatAndDog from "../Home/CatAndDog/CatAndDog";
import { useQuery } from "@tanstack/react-query";
import CatFoodDetail from "../CatFoodDetail/CatFoodDetail";
import { ToastContainer } from "react-toastify";

const CatFood = () => {
  const { data: catFood = [], refetch } = useQuery({
    queryKey: ["catFood"],
    queryFn: () =>
      fetch("https://y-rubelrk.vercel.app/allProduct/catFood").then((res) =>
        res.json()
      ),
  });
  refetch();
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="relative">
        <div className="catFood-Banners">
          <img src={catFoods} alt="" />
        </div>
        <div className="catFood-banner-texts text-center mt-12 lg:mt-20 xl:mt-40 absolute top-0 left-0   text-white">
          <h1 className="font-semibold lg:text-6xl">Cat Foods</h1>
          <p>Home/Cat Foods</p>
        </div>
      </div>
      <section className="lg:mt-32 mt-12">
        <div className="text-center">
          <h1 className="text-3xl font-semibold cat-food-text btn-2">
            Cat Foods
          </h1>

          <p className="text-2xl font-medium cat-paragraph">
            Best cat foods for your precious cat
          </p>
        </div>
        {/* product */}
        <div className="lg:flex lg:mt-16 mt-8">
          <div className="cat-finger hidden lg:inline-flex">
            <img className="cat-finger-img" src={imgFin} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 product-height">
            <div>
              <Slider {...settings}>
                {catFood.map((FoodList) => (
                  <CatFoodDetail
                    key={FoodList._id}
                    FoodList={FoodList}
                  ></CatFoodDetail>
                ))}
              </Slider>
            </div>
            <Link to="/allProduct/catFood">
              <u>
                <p className="lg:text-end cat-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>

          <div className="cat-bone hidden lg:inline-flex">
            <img className="cat-bone-img" src={imgBon} alt="" />
          </div>
        </div>
      </section>
      <ToastContainer />
      <section className="-mt-32 2xl:-mt-80 mb-32">
        <CatAndDog></CatAndDog>
      </section>
    </>
  );
};

export default CatFood;
