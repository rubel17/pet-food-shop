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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <>
      <div className="relative">
        <div className="catFood-Banner">
          <img src={catFoods} alt="" />
        </div>
        <div className="catFood-banner-text">
          <h1>Cat Foods</h1>
          <p>Home/Cat Foods</p>
        </div>
      </div>

      <section className="Cat-Foods">
        <div className="text-center">
          <h1 className="text-3xl font-semibold cat-food-text">Cat Foods</h1>
          <p className="text-2xl font-medium cat-p">Our Trending Products</p>
        </div>
        <div className="flex cat-product">
          <div className="cat-finger">
            <img className="cat-finger-img" src={imgFin} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <Slider {...settings}>
              {catFood.map((FoodList) => (
                <CatFoodDetail
                  key={FoodList._id}
                  FoodList={FoodList}
                ></CatFoodDetail>
              ))}
            </Slider>
            <Link>
              <u>
                <p className="lg:text-end cat-see-all mt-8 pr-11">See all</p>
              </u>
            </Link>
          </div>

          <div className="cat-bone">
            <img className="cat-bone-img" src={imgBon} alt="" />
          </div>
        </div>
      </section>
      <CatAndDog></CatAndDog>
    </>
  );
};

export default CatFood;
