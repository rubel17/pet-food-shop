import React from "react";
import "./CartList.css";
import { Link } from "react-router-dom";
import imgPcckC from "../../../assets/image/pngegg (14) 1.png";
import imgPcckB from "../../../assets/image/pack-b.png";
import Delete from "../../../assets/image/delete.png";

const CartList = ({ cartModal, setCartModal }) => {
  return (
    <>
      {cartModal ? (
        <>
          <div className="flex justify-center items-center lg:justify-end lg:items-start overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div>
              <div className="border-0 register-pageA shadow-lg    w-full bg-white outline-none focus:outline-none">
                <div>
                  <form className=" px-8 pt-6 w-full">
                    <div className="flex mb-4  justify-between">
                      <h3 className="register-text text-4xl text-black font-semibold">
                        Cart List
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setCartModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                  </form>
                  {/* product */}
                  <div className="mb-5">
                    <div className="flex justify-between me-3 cart-shadow bg-white outline-none focus:outline-none cart-product">
                      <div>
                        <div className="flex">
                          <div className="cart-product-body">
                            <div className=" cart-product-body-img">
                              <img src={imgPcckC} alt="" />
                            </div>
                          </div>
                          <div className="cart-product-text">
                            <h1 className="text-xl font-semibold py-1">
                              Royal Canin Kitten Food
                            </h1>
                            <h3 className="text-medium font-semibold">
                              500 Tk.
                            </h3>
                            <h2 className="text-medium">
                              Flavor: Chicken (1.5 Kg)
                            </h2>
                            <div className="flex text-lg  mt-2">
                              <button className="cart-upAndDown px-2">-</button>
                              <p className=" px-4">1</p>
                              <button className="cart-upAndDown px-2">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <Link>
                          <img src={Delete} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* product end */}
                  <div className="mb-5">
                    <div className="flex justify-between me-3 cart-shadow bg-white outline-none focus:outline-none cart-product">
                      <div>
                        <div className="flex">
                          <div className="cart-product-body">
                            <div className=" cart-product-body-img">
                              <img src={imgPcckB} alt="" />
                            </div>
                          </div>
                          <div className="cart-product-text">
                            <h1 className="text-xl font-semibold py-1">
                              Royal Canin Kitten Food
                            </h1>
                            <h3 className="text-medium font-semibold">
                              500 Tk.
                            </h3>
                            <h2 className="text-medium">
                              Flavor: Chicken (1.5 Kg)
                            </h2>
                            <div className="flex text-lg  mt-2">
                              <button className="cart-upAndDown px-2">-</button>
                              <p className=" px-4">1</p>
                              <button className="cart-upAndDown px-2">+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <Link>
                          <img src={Delete} alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* pro....... */}
                </div>
              </div>
              <div className="flex z-50 -mt-32 justify-center">
                <Link className="cart-order-btn px-24 py-3">Place order</Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CartList;
