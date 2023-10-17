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
    // add Data to localStorage
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const cart = [...prevCartData, addToCartList];
    localStorage.setItem("cartData", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    toast.success("Add To Cart Successful");

    if (user) {
      fetch(`http://localhost:4000/addToCart`, {
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
      // toast.error("Login please");
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
            toast.success("Add To WishList Successful");
          }
        });
    } else {
      setWishList(Heart);
      console.log(productId);
      fetch(`http://localhost:4000/deleteToWishList/${productId}`, {
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
            <div className="single-products-product">
              <div>
                <div className="relative">
                  <img className="brightness-cat" src={productBg} alt="" />
                  <img
                    style={{
                      position: "absolute",
                      top: "20%",
                      left: "20%",
                      display: "block",
                      height: "60%",
                      margin: "auto",
                      width: "60%",
                    }}
                    src={img}
                    alt=""
                  />
                  <Link onClick={() => handleAddToWishList(_id)}>
                    <img
                      style={{
                        position: "absolute",
                        top: "10%",
                        right: "10%",
                        display: "block",
                        height: "8%",
                        margin: "auto",
                        width: "8%",
                      }}
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
                  className="addToCart-btn glow-on-hover text-xs md:text-lg"
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
