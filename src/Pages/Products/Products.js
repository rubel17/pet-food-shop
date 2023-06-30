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
          <img src={allProductDetails[0]?.img} alt="" />
        </div>
        <div className="product-banner-text">
          <h1>{allProductDetails[0]?.category}</h1>
          <p>Home/{allProductDetails[0]?.category}</p>
        </div>
      </div>
      {/* foods */}
      <section className="Cat-Foods mb-40">
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold cat-food-text">
            {allProductDetails[0]?.category}
          </h1>
          <p className="text-2xl font-medium cat-p">Our Trending Products</p>
        </div>
        <div className="flex cat-product">
          <div className="cat-finger">
            <img className="cat-finger-img" src={imgFin} alt="" />
          </div>
          {/* slider start */}
          <div className="cat-category">
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

export default Products;
