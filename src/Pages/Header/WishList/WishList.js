import React, { useEffect, useState } from "react";
import "./WishList.css";
import Delete from "../../../assets/image/delete.png";
import Love from "../../../assets/image/red-love.png";
import { toast } from "react-hot-toast";

const WishList = () => {
  const [wish, setWish] = useState(
    JSON.parse(localStorage.getItem("wishData")) || []
  );
  useEffect(() => {
    const handleChange = (e) => {
      const c = JSON.parse(localStorage.getItem("wishData"));
      setWish(c);
    };
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener("storage", handleChange);
    };
  }, []);

  //add to cart
  const handleAddToCart = (wishList) => {
    const productId = wishList?._id;
    const Amounts = parseInt(wishList?.Amounts);
    const name = wishList?.name;
    const weight = wishList?.weight;
    const img = wishList?.img;
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

  //delete to wish List
  const handleDeleteWishList = (id) => {
    const prevWishData = JSON.parse(localStorage.getItem("wishData")) || [];
    const wishData = prevWishData.filter((product) => product.productId !== id);
    localStorage.setItem("wishData", JSON.stringify(wishData));
    window.dispatchEvent(new Event("storage"));
    toast.success("Delete To Wish Successful");
  };

  return (
    <>
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
            <ul className="menu w-80 md:w-96 lg:max-w-full 2xl:w-1/4 min-h-full bg-white text-black">
              <div className=" px-8 pt-6 w-full">
                <div className="flex mb-4  justify-between">
                  <h3 className="register-text text-3xl text-black font-semibold">
                    Wish List
                  </h3>
                  <p
                    onClick={() => {
                      document.getElementById("my-drawer-5").click();
                    }}
                    className="text-2xl mt-6"
                  >
                    x
                  </p>
                </div>
              </div>
              <div className="totalProduct-height scroll overflow-y-scroll scroll-smooth">
                {wish?.map((wishList) => (
                  <section key={wishList._id}>
                    <div className="mb-5">
                      <div className="flex justify-between me-3 wish-shadow bg-white outline-none focus:outline-none wish-product">
                        <div>
                          <div className="flex">
                            <div className="wish-product-body">
                              <div className=" wish-product-body-img">
                                <img src={wishList.img} alt="" />
                              </div>
                            </div>
                            <div className="wish-product-text">
                              <h1 className="text-xl font-semibold py-1">
                                {wishList.name}
                              </h1>
                              <h3 className="text-medium font-semibold">
                                {wishList.Amounts} Tk.
                              </h3>
                              <h2 className="text-medium">
                                Flavor:{wishList.weight}
                              </h2>
                              <div
                                onClick={() => handleAddToCart(wishList)}
                                className="text-base md:text-lg  mt-2"
                              >
                                <button className="btn-addToCart px-2 py-1">
                                  Add To Cart
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="md:p-3">
                          <p>
                            <img src={Love} alt="" />
                          </p>
                          <button
                            onClick={() =>
                              handleDeleteWishList(wishList.productId)
                            }
                          >
                            <img
                              className="mt-20 md:mt-14"
                              src={Delete}
                              alt=""
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
