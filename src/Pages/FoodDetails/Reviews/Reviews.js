import React from "react";
import "./Reviews.css";
import imgRk from "../../../assets/image/rk.png";
import imgNix from "../../../assets/image/nix.jpeg";
import imgOvi from "../../../assets/image/ovi.jpeg";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
  const productDetail = useLoaderData({});
  return (
    <div className="lg:flex justify-center">
      <div className="lg:w-1/5 mr-5">
        <div className="reviews flex justify-center">
          <img className="mask mask-circle" src={imgRk} alt="" />
        </div>
        <h1 className="Reviews-name flex justify-center">
          Md.Kamruzzaman Rubel
        </h1>
        <p className=" flex justify-center ml-5 lg:ml-0 mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <h3 className="flex justify-center mt-4 Reviews-name">
          Awesome Product
        </h3>
        <div className="mt-4 mr-3 flex justify-center">
          <div className="product-rating">
            <div
              className="Stars"
              style={{ "--rating": productDetail?.rating }}
            ></div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/5 mr-5">
        <div className="reviews flex justify-center">
          <img className="mask mask-circle" src={imgNix} alt="" />
        </div>
        <h1 className="Reviews-name flex justify-center">
          Mohaiminur Rahman Nixon
        </h1>
        <p className=" flex justify-center ml-5 lg:ml-0 mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <h3 className="flex justify-center mt-4 Reviews-name">Good Product</h3>
        <div className="mt-4 mr-3 flex justify-center">
          <div className="product-rating">
            <div
              className="Stars"
              style={{ "--rating": productDetail?.rating }}
            ></div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/5">
        <div className="reviews flex justify-center">
          <img className="mask mask-circle" src={imgOvi} alt="" />
        </div>
        <h1 className="Reviews-name flex justify-center">Mehedi Hasan Ovi</h1>
        <p className=" flex justify-center ml-5 lg:ml-0 mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <h3 className="flex justify-center mt-4 Reviews-name">Nice Product</h3>
        <div className="mt-4 mr-3 flex justify-center">
          <div className="product-rating">
            <div
              className="Stars"
              style={{ "--rating": productDetail?.rating }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
