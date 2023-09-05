import React, { useContext, useState } from "react";
import "./ProductsDetails.css";
import { Link } from "react-router-dom";
import Heart from "../../../assets/image/Heart.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Love from "../../../assets/image/red-love.png";
import { ToastContainer, toast } from "react-toastify";
import productBg from "../../../assets/image/product-bg.png";

const ProductsDetails = ({ FoodList }) => {
  const { name, img, views, weight, Amount, _id, Rating, rating } = FoodList;
  const { user } = useContext(AuthContext);

  const [wishList, setWishList] = useState(Heart);

  const handleAddToCart = (id) => {
    const email = user?.email;
    const productId = id;
    const Amounts = parseInt(Amount);
    const value = 1;
    const addToCartList = {
      name,
      email,
      Amounts,
      weight,
      img,
      productId,
      value,
    };
    if (user) {
      fetch(`https://y-livid-three.vercel.app/addToCart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToCartList),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add To Cart Successful");
          }
        });
    } else {
      toast.error("Login please");
    }
  };

  const handleAddToWishList = (id) => {
    let value = wishList;
    const email = user?.email;
    const productId = id;
    const Amounts = parseInt(Amount);
    const AddToWishList = {
      name,
      email,
      Amounts,
      weight,
      img,
      productId,
    };
    if (user && value === Heart) {
      setWishList(Love);
      fetch(`https://y-livid-three.vercel.app/addToWishList`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(AddToWishList),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add To WishList Successful");
          }
        });
    } else {
      setWishList(Heart);
      console.log(productId);
      fetch(`https://y-livid-three.vercel.app/deleteToWishList/${productId}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.error("Removed To WishList Successful");
            // refetch();
          } else {
            toast.error("Login please");
          }
        });
    }
  };

  return (
    <>
      <div className="md:mx-5 lg:-mb-10 xl:-mb-6 2xl:-mb-20">
        <Link to={`/foodDetails/${_id}`}>
          <object>
            <div className="single-products-cat">
              <div>
                <div className="relative">
                  <img className="brightness-cat" src={productBg} alt="" />
                  <img
                    className="absolute w-24 h-24 top-10 left-8  md:w-44 md:h-48 md:left-16 md:top-16 lg:h-40 lg:left-12 lg:top-14 xl:top-12 xl:left-14 2xl:w-1/2 2xl:top-20 2xl:left-20 "
                    src={img}
                    alt=""
                  />
                  <Link onClick={() => handleAddToWishList(_id)}>
                    <img
                      className="absolute top-4 right-4 w-5 md:top-8 md:right-8 md:w-6 xl:w-6 xl:top-7 xl:right-7 2xl:w-7 2xl:top-10 2xl:right-10"
                      src={wishList}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div className="ml-3 md:ml-5">
                <h1 className="md:text-xl font-normal md:font-bold md:py-1">
                  {name}
                </h1>
                <h2 className="text-medium pb-1">{weight}</h2>
                <h3 className="text-medium font-semibold">{Amount}</h3>

                <div className="md:flex md:mb-1">
                  <div className="product-rating">
                    <div
                      className="Stars"
                      style={{ "--rating": rating || Rating }}
                    ></div>
                  </div>
                  <h2 className="-mt-2 md:-mt-0 mb-3">{views}</h2>
                </div>

                <Link
                  onClick={() => handleAddToCart(_id)}
                  className="addToCart-btn glow-on-hover text-lg"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
          </object>
        </Link>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProductsDetails;
