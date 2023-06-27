import React from "react";
import "./DogFoodDetail.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../assets/image/Heart.png";

const DogFoodDetail = ({ dogFoodList }) => {
  const { name, img, views, weight, Amount } = dogFoodList;
  return (
    <div>
      <Link to="/foodDetails">
        <object>
          <div className="single-product mb-10">
            <div className=" single-product-body-dog">
              <div className=" single-product-body-img relative">
                <img src={img} alt="" />
                <Link to="/wishList">
                  <img
                    className="absolute top-0 right-0 p-3"
                    src={Heart}
                    alt=""
                  />
                </Link>
              </div>
            </div>
            <div className="single-product-text">
              <h1 className="text-xl font-semibold py-1">{name}</h1>
              <h2 className="text-medium pb-1">{weight}</h2>
              <h3 className="text-medium font-semibold">{Amount}</h3>
              <div className="flex mb-4">
                <div className="flex mr-3 mt-1">
                  <FontAwesomeIcon className="star pr-1" icon={faStar} />
                  <FontAwesomeIcon className="star pr-1" icon={faStar} />
                  <FontAwesomeIcon className="star pr-1" icon={faStar} />
                  <FontAwesomeIcon className="star pr-1" icon={faStar} />
                  <FontAwesomeIcon className="star pr-1" icon={faStar} />
                </div>
                <h2>{views}</h2>
              </div>

              <Link to="/addCart" className="btn-cart-dog px-3 py-3">
                Add To Cart
              </Link>
            </div>
          </div>
        </object>
      </Link>
    </div>
  );
};

export default DogFoodDetail;
