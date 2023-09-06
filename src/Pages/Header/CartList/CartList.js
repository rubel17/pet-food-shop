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
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
            <ul className="menu w-80 md:w-96 lg:max-w-full 2xl:w-1/4 min-h-full bg-white text-black">
              <div className="lg:px-8  pt-10 lg:pt-2">
                <div className="mb-4">
                  <h3 className=" text-lg lg:text-3xl text-black font-bold">
                    Cart List
                  </h3>
                </div>
              </div>

              {userCartList.map((CartList) => (
                <section key={CartList._id}>
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
                            <p className="ml-20 xl:ml-14 2xl:ml-24 mt-2">
                              Total: {CartList?.Amounts * CartList?.value}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="p-1">
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
              <p className="border-red-400 border-t-2 text-lg text-orange-400	 font-bold mt-10">
                SubTotal : {i}
              </p>

              <div className="flex justify-center mt-20">
                <Link
                  to="/checkOut"
                  onClick={() => setCartModal(false)}
                  className="cart-order-btn px-24 py-3 fixed"
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
