import React from "react";
import "./LittersDetail.css";
import { Link } from "react-router-dom";
import Heart from "../../assets/image/Heart.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LittersDetail = ({ littersList }) => {
  const { name, img, views, weight, Amount } = littersList;

  return (
    <div>
      <Link to="/foodDetails">
        <object>
          <div className="single-product">
            <div className=" single-product-litters">
              <div className=" single-product-body-img relative">
                <img src={img} alt="" />
                <Link>
                  <img
                    className="absolute top-0 right-0 p-5"
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
              <Link className="btn-litter px-3 py-3">Add To Cart </Link>
            </div>
          </div>
        </object>
      </Link>
    </div>
  );
};

export default LittersDetail;
