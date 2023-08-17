import React from "react";
import "./DogFood.css";
import catFoods from "../../assets/image/cat food.png";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import CatAndDog from "../Home/CatAndDog/CatAndDog";
import { useQuery } from "@tanstack/react-query";
import DogFoodDetail from "../DogFoodDetail/DogFoodDetail";
import { ToastContainer } from "react-toastify";
const DogFood = () => {
  const { data: dogFood = [] } = useQuery({
    queryKey: ["dogFood"],
    queryFn: ({ params }) =>
      fetch(`https://y-livid-three.vercel.app/allProduct/dogFood`).then((res) =>
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
          <h1 className="font-semibold lg:text-6xl">Dog Foods</h1>
          <p>Home/Dog Foods</p>
        </div>
      </div>

      <section className="mt-20">
        <div className="text-center">
          <h1 className="text-3xl font-semibold dog-food-text">Dog Foods</h1>

          <p className="text-2xl font-medium dog-paragraph">
            Best dog foods for your precious dog
          </p>
        </div>
        <div className="lg:flex justify-center lg:mt-16 mt-8">
          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
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
                <p className="lg:text-end dog-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
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

export default DogFood;
