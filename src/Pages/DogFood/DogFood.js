import React from "react";
import "./DogFood.css";
import catFoods from "../../assets/image/cat food.png";
import Slider from "react-slick";
import imgFin from "../../assets/image/pawprint (1) 1.png";
import { Link } from "react-router-dom";
import imgBon from "../../assets/image/bone 3.png";
import CatAndDog from "../Home/CatAndDog/CatAndDog";
import { useQuery } from "@tanstack/react-query";
import DogFoodDetail from "../DogFoodDetail/DogFoodDetail";
const DogFood = () => {
  const { data: dogFood = [] } = useQuery({
    queryKey: ["dogFood"],
    queryFn: ({ params }) =>
      fetch(`http://localhost:4000/allProduct/dogFood`).then((res) =>
        res.json()
      ),
  });
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
    slidesToShow: 4,
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
    <>
      {/* banner */}
      <div className="relative">
        <div className="catFood-Banner">
          <img src={catFoods} alt="" />
        </div>
        <div className="catFood-banner-text">
          <h1>Dog Foods</h1>
          <p>Home/Dog Foods</p>
        </div>
      </div>
      {/* dog foods */}
      <section className="Cat-Foods mb-40">
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold cat-food-text">Dog Food</h1>
          <p className="text-2xl font-medium cat-p">Our Trending Products</p>
        </div>
        <div className="flex cat-product">
          <div className="cat-finger">
            <img className="cat-finger-img" src={imgFin} alt="" />
          </div>
          {/* slider start */}
          <div className="cat-category">
            <Slider {...settings}>
              {dogFood.map((dogFoodList) => (
                <DogFoodDetail
                  key={dogFoodList._id}
                  dogFoodList={dogFoodList}
                ></DogFoodDetail>
              ))}
            </Slider>
            <Link to="/allProduct/dogFood">
              <u>
                <p className="lg:text-end cat-see-all mt-8 pr-11">See all</p>
              </u>
            </Link>
          </div>
          {/* slider end */}
          <div className="cat-bone">
            <img className="cat-bone-img" src={imgBon} alt="" />
          </div>
        </div>
      </section>
      <CatAndDog></CatAndDog>
    </>
  );
};

export default DogFood;
