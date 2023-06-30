import React, { useContext } from "react";
import "./ProductsDetails.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../../assets/image/Heart.png";
import { Toaster, toast } from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Love from "../../../assets/image/red-love.png";

const ProductsDetails = ({ FoodList }) => {
  const { name, img, views, weight, Amount, _id } = FoodList;
  const { user } = useContext(AuthContext);

  //product add to wishList
  const handleAddToWishList = (event) => {
    event.preventDefault();
    const email = user?.email;
    const productId = _id;
    const Amounts = parseInt(Amount);
    const AddToWishList = {
      name,
      email,
      Amounts,
      weight,
      img,
      productId,
    };

    fetch(`http://localhost:4000/addToWishList`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(AddToWishList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Add To WishList Success", {
            position: "top-center",
          });
        }
      });
  };

  return (
    <div>
      <Link to={`/foodDetails/${_id}`}>
        <object>
          <div className="single-product mb-10">
            <div className=" single-product-body-dog">
              <div className=" single-product-body-img relative">
                <img src={img} alt="" />
                <Link onClick={handleAddToWishList}>
                  {FoodList?.addProduct !== "Done" ? (
                    <img
                      className="absolute top-0 right-0 p-3"
                      src={Heart}
                      alt=""
                    />
                  ) : (
                    <img
                      className="absolute top-0 right-0 p-3"
                      src={Love}
                      alt=""
                    />
                  )}
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
      <Toaster></Toaster>
    </div>
  );
};

export default ProductsDetails;
