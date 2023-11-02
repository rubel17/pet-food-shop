import React, { useEffect, useState } from "react";
import "./CartList.css";
import { Link } from "react-router-dom";
import Delete from "../../../assets/image/delete.png";

import { toast } from "react-hot-toast";

const CartList = () => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  useEffect(() => {
    const handleChange = (e) => {
      const c = JSON.parse(localStorage.getItem("cartData"));
      setCart(c);
    };
    window.addEventListener("storage", handleChange);
    return () => {
      window.removeEventListener("storage", handleChange);
    };
  }, []);
  //delete to wish List
  const handleDeleteCartList = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => product.productId !== id);
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
    toast.success("Delete To Cart Successful");
  };
  const incNum = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => {
      if (product.productId === id) {
        product.value = product.value + 1;
      }
      return product.value;
    });
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
  };
  const decNum = (id) => {
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const Data = prevCartData.filter((product) => {
      if (product.productId === id) {
        if (product.value > 1) {
          product.value = product.value - 1;
        }
      }
      return product.value;
    });
    localStorage.setItem("cartData", JSON.stringify(Data));
    window.dispatchEvent(new Event("storage"));
  };
  let i = 0;
  return (
    <>
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu w-80 md:w-96 lg:max-w-full 2xl:w-1/4 min-h-full bg-white text-black">
              <div className="lg:px-8  pt-10 lg:pt-8">
                <div className="flex justify-between mb-4">
                  <h3 className=" text-lg lg:text-3xl text-black font-bold">
                    Cart List
                  </h3>
                  <p
                    onClick={() => {
                      document.getElementById("my-drawer-4").click();
                    }}
                    className="text-2xl"
                  >
                    x
                  </p>
                </div>
              </div>

              {cart?.map((CartList, id) => (
                <section key={id}>
                  <div className="mb-5">
                    <div className="rounded-lg flex justify-between me-2 2xl:me-3 cart-shadow bg-white outline-none focus:outline-none 2xl:ml-3">
                      <div className="flex">
                        <div>
                          <div className="rounded-l-lg cart-product-body-img max-w-full h-28 md:h-28 md:w-24 lg:w-28 mr-2 2xl:mr-4">
                            <img
                              className="md:px-6  py-6"
                              src={CartList?.img}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="cart-product-text">
                          <h1 className="text-base font-bold pb-1">
                            {CartList?.name}
                          </h1>
                          <h3 className="text-medium font-semibold">
                            {CartList?.Amounts} Tk.
                          </h3>
                          <h2 className="text-medium">
                            Flavor: {CartList?.weight}
                          </h2>
                          <div className="flex justify-between">
                            <div className="flex text-lg  mt-1">
                              <button
                                onClick={() => decNum(CartList?.productId)}
                                className="cart-upAndDown px-2"
                              >
                                -
                              </button>
                              <p className=" px-4">{CartList?.value}</p>
                              <button
                                onClick={() => incNum(CartList?.productId)}
                                className="cart-upAndDown px-2"
                              >
                                +
                              </button>
                            </div>
                            <p className="ml-20 xl:ml-14 2xl:ml-24 mt-2">
                              Total: {CartList?.Amounts * CartList?.value}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-1">
                        <button
                          onClick={() =>
                            handleDeleteCartList(CartList.productId)
                          }
                        >
                          <img src={Delete} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <p className="hidden">
                    {(i += CartList?.Amounts * CartList?.value)}
                  </p>
                </section>
              ))}
              <p className="border-red-400 border-t-2 text-lg text-orange-400	 font-bold mt-10 text-end pr-2">
                SubTotal : {i}
              </p>

              <div className="flex justify-center">
                <Link
                  to="/checkOut"
                  onClick={() => {
                    document.getElementById("my-drawer-4").click();
                  }}
                  className="cart-order-btn px-24 py-3"
                >
                  Place order
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
