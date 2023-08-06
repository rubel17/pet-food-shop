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

const CatFood = () => {
  const { data: catFood = [] } = useQuery({
    queryKey: ["catFood"],
    queryFn: () =>
      fetch("https://y-livid-three.vercel.app/allProduct/catFood").then((res) =>
        res.json()
      ),
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <>
      <div className="relative">
        <div className="catFood-Banners">
          <img src={catFoods} alt="" />
        </div>
        <div className="catFood-banner-texts text-center mt-12 lg:mt-36 lg:ml-96 absolute top-0 left-0   text-white">
          <h1 className="font-semibold lg:text-6xl">Cat Foods</h1>
          <p>Home/Cat Foods</p>
        </div>
      </div>
      <section className="lg:mt-32 mt-12">
        <div className="text-center">
          <h1 className="text-3xl font-semibold cat-food-text">Cat Foods</h1>
          <p className="text-2xl font-medium cat-paragraph">
            Best cat foods for your precious cat
          </p>
        </div>
        <div className="lg:flex lg:mt-16 mt-8">
          <div className="cat-finger hidden lg:inline-flex">
            <img className="cat-finger-img" src={imgFin} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
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
      <section className="-mt-32 2xl:-mt-80">
        <CatAndDog></CatAndDog>
      </section>
    </>
  );
};

export default CatFood;
