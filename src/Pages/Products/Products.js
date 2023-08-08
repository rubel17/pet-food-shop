import React from "react";
import "./Products.css";
import Slider from "react-slick";
import imgFin from "../../assets/image/pawprint (1) 1.png";
import { Link, useLoaderData } from "react-router-dom";
import imgBon from "../../assets/image/bone 3.png";
import CatAndDog from "../Home/CatAndDog/CatAndDog";
import ProductsDetails from "./ProductsDetails/ProductsDetails";

const Products = () => {
  const allProductDetails = useLoaderData({});

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
    <>
      <div className="relative">
        <div className="catFood-Banners">
          <img
            className="banner-height"
            src={allProductDetails[0]?.BannerImg}
            alt=""
          />
        </div>
        <div className="catFood-banner-texts text-center mt-12 lg:mt-36 lg:ml-96 absolute top-0 left-0   text-white">
          <h1 className="font-semibold lg:text-6xl">
            {allProductDetails[0]?.category}
          </h1>
          <p>Home/{allProductDetails[0]?.category}</p>
        </div>
      </div>

      <section className="mt-12 lg:mt-20 lg:mb-96 2xl:mb-32">
        <div className="text-center">
          <h1 className="text-3xl font-semibold product-food-text">
            {allProductDetails[0]?.category}
          </h1>
          <p className="flex justify-center mt-6">
            <svg
              className="arrow-animate animate-bounce w-6 h-6 border-2 rounded-xl text-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
            </svg>
          </p>
          <p className="text-2xl font-medium product-paragraph">
            Our Trending Products
          </p>
        </div>
        <div className="lg:flex mt-16">
          <div className="product-finger hidden lg:inline-flex">
            <img className="product-finger-img" src={imgFin} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <Slider {...settings}>
              {allProductDetails?.map((FoodList) => (
                <ProductsDetails
                  key={FoodList._id}
                  FoodList={FoodList}
                ></ProductsDetails>
              ))}
            </Slider>
            <Link>
              <u>
                <p className="lg:text-end product-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>

          <div className="product-bone hidden lg:inline-flex">
            <img className="product-bone-img" src={imgBon} alt="" />
          </div>
        </div>
      </section>

      <section className="pt-20">
        <CatAndDog></CatAndDog>
      </section>
    </>
  );
};

export default Products;
