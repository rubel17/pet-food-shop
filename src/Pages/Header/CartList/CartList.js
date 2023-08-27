import React, { useContext } from "react";
import "./CartList.css";
import { Link } from "react-router-dom";
import Delete from "../../../assets/image/delete.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const CartList = ({ cartModal, setCartModal }) => {
  const { user } = useContext(AuthContext);
  const { data: userCartList = [], refetch } = useQuery({
    queryKey: [`/myCartList`],
    queryFn: () =>
      fetch(`https://y-livid-three.vercel.app/myCartList/${user?.email}`).then(
        (res) => res.json()
      ),
  });
  refetch();
  //delete to wish List
  const handleDeleteCartList = (id) => {
    console.log("delete", id);
    fetch(`https://y-livid-three.vercel.app/deleteToCartList/${id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successful");
          refetch();
        }
      });
  };
  // console.log(userCartList);

  const incNum = (value, id) => {
    if (value < 10) {
      const data = value + 1;
      const jsonStr = JSON.stringify({ quantity: data });
      fetch(`https://y-livid-three.vercel.app/updateCartListValue/${id}`, {
        method: "PUT",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
        headers: {
          "content-type": "application/json",
        },
        body: jsonStr,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success(" Successful");
            refetch();
          }
        });
    }
  };
  const decNum = (value, id) => {
    if (value > 1) {
      const data = value - 1;
      const jsonStr = JSON.stringify({ quantity: data });
      fetch(`https://y-livid-three.vercel.app/updateCartListValue/${id}`, {
        method: "PUT",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
        headers: {
          "content-type": "application/json",
        },
        body: jsonStr,
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount > 0) {
            toast.success(" Successful");
            refetch();
          }
        });
    }
  };
  let i = 0;
  return (
    <>
      {cartModal ? (
        <>
          <div className="flex justify-center items-center lg:justify-end lg:items-start overflow-x-auto overflow-y-auto  fixed inset-0 z-50 outline-none focus:outline-none">
            <div>
              <div className="border-0 register-pageA shadow-lg    lg:w-full bg-white outline-none focus:outline-none">
                <div>
                  <div className="lg:px-8  pt-20 lg:pt-5 lg:w-full">
                    <div className="flex justify-start lg:justify-between mb-4">
                      <h3 className="register-text text-lg lg:text-4xl text-black font-semibold">
                        Cart List
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setCartModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full ml-20 lg:ml-0">
                          x
                        </span>
                      </button>
                    </div>
                  </div>

                  {userCartList.map((CartList) => (
                    <section key={CartList._id}>
                      <div className="mb-5">
                        <div className="flex justify-between me-3 cart-shadow bg-white outline-none focus:outline-none cart-product">
                          <div>
                            <div className="flex">
                              <div className="cart-product-body">
                                <div className=" cart-product-body-img">
                                  <img src={CartList?.img} alt="" />
                                </div>
                              </div>
                              <div className="cart-product-text">
                                <h1 className="text-xl font-semibold py-1">
                                  {CartList?.name}
                                </h1>
                                <h3 className="text-medium font-semibold">
                                  {CartList?.Amounts} Tk.
                                </h3>
                                <h2 className="text-medium">
                                  Flavor: {CartList?.weight}
                                </h2>
                                <div className="flex justify-between">
                                  <div className="flex text-lg  mt-2">
                                    <button
                                      onClick={() =>
                                        decNum(CartList?.value, CartList?._id)
                                      }
                                      className="cart-upAndDown px-2"
                                    >
                                      -
                                    </button>
                                    <p className=" px-4">{CartList?.value}</p>
                                    <button
                                      onClick={() =>
                                        incNum(CartList?.value, CartList?._id)
                                      }
                                      className="cart-upAndDown px-2"
                                    >
                                      +
                                    </button>
                                  </div>
                                  <p className="ml-32 mt-2">
                                    Total: {CartList?.Amounts * CartList?.value}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <button
                              onClick={() => handleDeleteCartList(CartList._id)}
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
                  <p className="ps-5 border-red-400 border-t text-stat text-orange-400	 font-semibold mt-5">
                    SubTotal : {i}
                  </p>
                </div>
              </div>
              <div className="flex z-50 -mt-32 justify-center">
                <Link
                  to="/checkOut"
                  onClick={() => setCartModal(false)}
                  className="cart-order-btn px-24 py-3 fixed"
                >
                  Place order
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default CartList;
