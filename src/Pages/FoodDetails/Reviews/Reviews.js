import React from "react";
import "./Reviews.css";
import imgRk from "../../../assets/image/rk.png";
import imgNix from "../../../assets/image/nix.jpeg";
import imgOvi from "../../../assets/image/ovi.jpeg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Reviews = () => {
  return (
    <div className="hidden lg:inline-flex">
      <div className="w-4/12">
        <div className="reviews flex justify-center">
          <img className="mask mask-circle" src={imgRk} alt="" />
        </div>
        <h1 className="Reviews-name flex justify-center">
          Md.Kamruzzaman Rubel
        </h1>
        <p className=" ml-10 mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <h3 className="flex justify-center mt-4 Reviews-name">
          Awesome Product
        </h3>
        <div className="mt-4 mr-3 flex justify-center">
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
        </div>
      </div>
      <div className="w-4/12">
        <div className="reviews flex justify-center">
          <img className="mask mask-circle" src={imgNix} alt="" />
        </div>
        <h1 className="Reviews-name flex justify-center">
          Mohaiminur Rahman Nixon
        </h1>
        <p className=" ml-10 mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <h3 className="flex justify-center mt-4 Reviews-name">Good Product</h3>
        <div className="mt-4 mr-3 flex justify-center">
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
        </div>
      </div>
      <div className="w-4/12">
        <div className="reviews flex justify-center">
          <img className="mask mask-circle" src={imgOvi} alt="" />
        </div>
        <h1 className="Reviews-name flex justify-center">Mehedi Hasan Ovi</h1>
        <p className=" ml-10 mt-3">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <h3 className="flex justify-center mt-4 Reviews-name">Nice Product</h3>
        <div className="mt-4 mr-3 flex justify-center">
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
          <FontAwesomeIcon className="star pr-1" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
