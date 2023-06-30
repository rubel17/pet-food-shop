import React, { useContext } from "react";
import "./WishList.css";
import { Link } from "react-router-dom";
import Delete from "../../../assets/image/delete.png";
import Love from "../../../assets/image/red-love.png";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const WishList = ({ wishModal, setWishModal }) => {
  const { user } = useContext(AuthContext);
  const { data: userWishList = [] } = useQuery({
    queryKey: [`/myWishList`],
    queryFn: () =>
      fetch(`http://localhost:4000/myWishList/${user?.email}`).then((res) =>
        res.json()
      ),
  });
  console.log(userWishList);
  return (
    <>
      {wishModal ? (
        <>
          <div className="flex justify-center items-center lg:justify-end lg:items-start overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div>
              <div className="border-0 register-pageA shadow-lg    w-full bg-white outline-none focus:outline-none">
                <div>
                  <form className=" px-8 pt-6 w-full">
                    <div className="flex mb-4  justify-between">
                      <h3 className="register-text text-4xl text-black font-semibold">
                        Wish List
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setWishModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                  </form>
                  {/* product */}
                  {userWishList.map((wishList) => (
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
                                  {wishList.Amounts}
                                </h3>
                                <h2 className="text-medium">
                                  Flavor:{wishList.weight}
                                </h2>
                                <div className="flex text-lg  mt-2">
                                  <button className="wish-upAndDown px-2">
                                    -
                                  </button>
                                  <p className=" px-4">1</p>
                                  <button className="wish-upAndDown px-2">
                                    +
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <Link>
                              <img src={Love} alt="" />
                            </Link>
                            <Link>
                              <img className="mt-14" src={Delete} alt="" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
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

export default WishList;
