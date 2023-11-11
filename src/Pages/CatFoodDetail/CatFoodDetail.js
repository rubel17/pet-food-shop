import React, { useState } from "react";
import "./CatFoodDetail.css";
import Love from "../../assets/image/red-love.png";
import { Link } from "react-router-dom";
import Heart from "../../assets/image/Heart.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import productBg from "../../assets/image/product-bg.png";

const CatFoodDetail = ({ FoodList }) => {
  const { name, img, views, weight, Amount, _id, rating } = FoodList;
  const [wishList, setWishList] = useState(Heart);

  //add to cart
  const handleAddToCart = (id) => {
    const productId = id;
    const Amounts = parseInt(Amount);
    const value = 1;
    const addToCartList = {
      name,
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
  };

  //add to wishList
  const handleAddToWishList = (id) => {
    let value = wishList;
    const productId = id;
    const Amounts = parseInt(Amount);
    const AddToWishList = {
      name,
      Amounts,
      weight,
      img,
      productId,
    };
    if (value === Heart) {
      setWishList(Love);
      const prevWishData = JSON.parse(localStorage.getItem("wishData")) || [];
      const wish = [...prevWishData, AddToWishList];
      localStorage.setItem("wishData", JSON.stringify(wish));
      window.dispatchEvent(new Event("storage"));
      toast.success("Add To Wish Successful");
    } else {
      setWishList(Heart);
      const prevWishData = JSON.parse(localStorage.getItem("wishData")) || [];
      const wishData = prevWishData.filter(
        (product) => product.productId !== id
      );
      localStorage.setItem("wishData", JSON.stringify(wishData));
      window.dispatchEvent(new Event("storage"));
      toast.error("Delete To Wish Successful");
    }
  };
  return (
    <>
      <div className="md:mx-5 -mb-0 lg:-mb-10 xl:-mb-6 2xl:-mb-20">
        <Link to={`/foodDetails/${_id}`}>
          <object>
            <div className="single-product-cat">
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
                <h1 className="lg:text-xl font-normal md:font-bold md:py-1">
                  {name}
                </h1>
                <h2 className="text-medium pb-1">{weight}</h2>
                <h3 className="text-medium font-semibold">{Amount}</h3>

                <div className="md:flex lg:flex-col xl:flex-row md:mb-1">
                  <div className="product-rating">
                    <div className="Stars" style={{ "--rating": rating }}></div>
                  </div>
                  <h2 className="-mt-2  md:-mt-0 mb-3">{views}</h2>
                </div>

                <Link
                  onClick={() => handleAddToCart(_id)}
                  className="addToCart-btn glow-on-hover text-xs md:text-lg"
                >
                  Add To Cart
                </Link>
              </div>
            </div>
            <ToastContainer />
          </object>
        </Link>
      </div>
    </>
  );
};

export default CatFoodDetail;
