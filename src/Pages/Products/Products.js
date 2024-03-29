import React from "react";
import "./Products.css";
import Slider from "react-slick";
import imgFin from "../../assets/image/pawprint (1) 1.png";
import { useLoaderData } from "react-router-dom";
import imgBon from "../../assets/image/bone 3.png";
import CatAndDog from "../Home/CatAndDog/CatAndDog";
import ProductsDetails from "./ProductsDetails/ProductsDetails";
import { ToastContainer } from "react-toastify";
import CartShimmerEffect from "../CartShimmerEffect/CartShimmerEffect";

const Products = () => {
  const allProductDetails = useLoaderData({});
  console.log(allProductDetails.length);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 2,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
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
        <div className="text-center absolute top-1/3 right-1/3 lg:right-1/4 xl:right-1/3   2xl:right-0 2xl:left-0  text-white">
          <h1 className="capitalize font-semibold text-xl lg:text-6xl">
            {allProductDetails[0]?.category}
          </h1>
          <p>
            Home/
            <span className="capitalize">{allProductDetails[0]?.category}</span>
          </p>
        </div>
      </div>

      <section className="mb-72 mt-12 lg:mt-20 lg:mb-96 2xl:mb-32">
        <div className="text-center">
          <h1 className="capitalize text-3xl font-semibold product-food-text">
            {allProductDetails[0]?.category}
          </h1>

          <p className="text-2xl font-medium product-paragraph">
            Our Trending Products
          </p>
        </div>
        <div className="lg:flex mt-16">
          <div className="product-finger hidden lg:inline-flex">
            <img className="product-finger-img" src={imgFin} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 product-height">
            {allProductDetails.length === 0 ? (
              <Slider {...settings}>
                {Array.from({ length: 10 }).map((data, i) => (
                  <CartShimmerEffect key={i} />
                ))}
              </Slider>
            ) : (
              <Slider {...settings}>
                {allProductDetails?.map((FoodList) => (
                  <ProductsDetails
                    key={FoodList._id}
                    FoodList={FoodList}
                  ></ProductsDetails>
                ))}
              </Slider>
            )}
          </div>
          <div className="product-bone hidden lg:inline-flex">
            <img className="product-bone-img" src={imgBon} alt="" />
          </div>
        </div>
      </section>
      <ToastContainer />
      <section className="mt-64 mb-20">
        <CatAndDog></CatAndDog>
      </section>
    </>
  );
};

export default Products;
