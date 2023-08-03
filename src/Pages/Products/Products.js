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
        <div className="catFood-Banner">
          <img src={allProductDetails[0]?.BannerImg} alt="" />
        </div>
        <div className="product-banner-text">
          <h1>{allProductDetails[0]?.category}</h1>
          <p>Home/{allProductDetails[0]?.category}</p>
        </div>
      </div>

      <section className="my-40">
        <div className="text-center">
          <h1 className="text-3xl font-semibold product-food-text">
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
      <CatAndDog></CatAndDog>
    </>
  );
};

export default Products;
