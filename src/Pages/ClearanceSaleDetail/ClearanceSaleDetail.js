import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ClearanceSaleDetail.css";
import { Link } from "react-router-dom";
import Heart from "../../assets/image/Heart.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ClearanceSaleDetail = ({ clearanceSaleList }) => {
  const { name, img, views, weight, Amount } = clearanceSaleList;

  return (
    <div>
      <Link to="/foodDetails">
        <object>
          <div className="single-product mb-10">
            <div className=" single-product-body-clearance">
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
              <Link className="btn-cart1 px-3 py-3">Add To Cart </Link>
            </div>
          </div>
        </object>
      </Link>
    </div>
  );
};

export default ClearanceSaleDetail;
