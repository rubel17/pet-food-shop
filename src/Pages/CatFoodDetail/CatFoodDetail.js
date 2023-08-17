import React, { useContext, useState } from "react";
import "./CatFoodDetail.css";
import Love from "../../assets/image/red-love.png";
import { Link } from "react-router-dom";
import Heart from "../../assets/image/Heart.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CatFoodDetail = ({ FoodList }) => {
  const { name, img, views, weight, Amount, _id, rating } = FoodList;
  const [wishList, setWishList] = useState(Heart);

  const { user } = useContext(AuthContext);

  //add to cart
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
      toast.error("Please Login");
    }
  };

  //add to wishList
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
          } else {
            toast.error("Please Login");
          }
        });
    }
  };
  return (
    <>
      <div className="md:mx-5">
        <Link to={`/foodDetails/${_id}`}>
          <object>
            <div className="single-products-cat w-32 lg:w-72 -mb-40 md:-mb-0">
              <div className=" single-product-body-cat h-28 lg:h-72 lg:w-72	">
                <div className="pt-5 lg:pt-12  pl-4 lg:pl-12 relative">
                  <img
                    className="h-3/6 w-3/6 lg:w-fit lg:h-fit"
                    src={img}
                    alt=""
                  />
                  <Link onClick={() => handleAddToWishList(_id)}>
                    <img
                      className="absolute top-0 right-0 p-4"
                      src={wishList}
                      alt=""
                    />
                  </Link>
                </div>
              </div>
              <div>
                <h1 className="md:text-xl font-normal md:font-bold md:py-1">
                  {name}
                </h1>
                <h2 className="text-medium pb-1">{weight}</h2>
                <h3 className="text-medium font-semibold">{Amount}</h3>

                <div className="md:flex md:mb-1">
                  <div className="product-rating">
                    <div className="Stars" style={{ "--rating": rating }}></div>
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
            <ToastContainer />
          </object>
        </Link>
      </div>
    </>
  );
};

export default CatFoodDetail;
