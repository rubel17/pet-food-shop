import React, { useContext, useState } from "react";
import "./CheckOut.css";
import catFoods from "../../assets/image/pets-3715733_1280.jpeg";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const CheckOut = () => {
  const { user } = useContext(AuthContext);
  const { data: userCartList = [], refetch } = useQuery({
    queryKey: [`/myCartList`],
    queryFn: () =>
      fetch(`http://localhost:4000/myCartList/${user?.email}`).then((res) =>
        res.json()
      ),
  });

  const incNum = (value, id) => {
    if (value < 10) {
      const data = value + 1;
      const jsonStr = JSON.stringify({ quantity: data });
      fetch(`http://localhost:4000/updateCartListValue/${id}`, {
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
    if (value > 0) {
      const data = value - 1;
      const jsonStr = JSON.stringify({ quantity: data });
      fetch(`http://localhost:4000/updateCartListValue/${id}`, {
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

  const [sub, setSub] = useState(0);
  const handleShipping = (p) => {
    if (p === 50) {
      let total = i + p;
      console.log("50", total);
      setSub(total);
    } else {
      let total = i + p;
      console.log("100", total);
      setSub(total);
    }
  };
  refetch();
  let i = 0;
  return (
    <>
      <div className="relative">
        <div>
          <img className="w-full  md:h-96" src={catFoods} alt="" />
        </div>
        <div className="catFood-banner-texts text-center mt-12  md:mt-40 lg:ml-96 absolute top-0 left-0   text-white">
          <h1 className="font-semibold lg:text-5xl">Check Out</h1>
          <p className="font-bold lg:text-xl">Home/Check Out</p>
        </div>
      </div>
      <div className="billing-checkOut">
        <h1 className="billing-text">Billing Details</h1>
        <div className="flex">
          <div className="billing-details w-1/2">
            <div className="flex">
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 block w-1/2 px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 block w-1/2 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <p>Country / Region</p>
            <p className="mt-2 font-bold">Bangladesh</p>
            <input
              type="text"
              placeholder="House Number and Street Name"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit etc (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="District"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Post Code / ZIP (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Post Code / ZIP (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />

            <div className="flex mb-6">
              <input className="mr-2" type="checkbox" />
              <p>Ship to a different address?</p>
            </div>

            <div className="flex">
              <input
                type="text"
                placeholder="First Name"
                className="mt-1 block w-1/2 px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="mt-1 block w-1/2 px-3 py-3 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 mb-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <p>Country / Region</p>
            <p className="mt-2 font-bold">Bangladesh</p>
            <input
              type="text"
              placeholder="House Number and Street Name"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Apartment, Suite, Unit etc (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Town / City"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="District"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Post Code / ZIP (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Post Code / ZIP (Optional)"
              className="mt-6 block w-full px-3 py-3 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <input
              type="text"
              placeholder="Order Notes (Optional)"
              className="mt-6 block w-full px-3 py-12 mr-6 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </div>
          <div className="billing-order w-1/2">
            <p className="order-text">Your Order</p>
            <div className="product-details mx-4">
              <div className="flex justify-between px-4 py-4">
                <p>Product</p>
                <p>Subtotal</p>
              </div>
              <hr />
              {userCartList.map((cartList) => (
                <div
                  key={cartList?._id}
                  className="flex justify-between px-4 py-4"
                >
                  <p>
                    {cartList?.name} <br /> Quantity:{" "}
                    <button
                      onClick={() => decNum(cartList?.value, cartList?._id)}
                      className="cart-upAndDown px-2"
                    >
                      -
                    </button>
                    {cartList?.value}
                    <button
                      onClick={() => incNum(cartList?.value, cartList?._id)}
                      className="cart-upAndDown px-2"
                    >
                      +
                    </button>
                  </p>
                  <p>{cartList?.Amounts * cartList?.value}</p>

                  <p className="hidden">
                    {(i += cartList?.Amounts * cartList?.value)}
                  </p>
                </div>
              ))}

              <hr />
              <div className="flex justify-between px-4 py-4">
                <p>Subtotal</p>
                <p className="font-semibold">{i} Tk.</p>
              </div>
              <hr />
              <div className="flex justify-between px-4 py-4">
                <p>Shipping</p>
                <div>
                  <p className="text-end">
                    Inside Dhaka: 50 Tk.
                    <input
                      onClick={() => handleShipping(50)}
                      className="ml-2"
                      type="checkbox"
                    />
                  </p>
                  <p>
                    Dhaka Sub (Saver, Keranigonj): 100 Tk.
                    <input
                      onClick={() => handleShipping(100)}
                      className="ml-2"
                      type="checkbox"
                    />
                  </p>
                </div>
              </div>
              <hr />
              <div className="flex justify-between px-4 py-4">
                <p>Total</p>

                <p className="text-orange-700 font-bold">{sub || 0} Tk.</p>
              </div>
            </div>
            <p className="font-semibold ml-11 mt-5">Cash on delivery</p>
            <p className="bg-white mx-4 px-4 py-5 mt-6">
              (Outside Dhaka) need to pay delivery charge 120Tk. in advanced
              BKash merchant number: +8801923064377
            </p>
            <p className="ml-4 mt-5">
              <input type="checkbox" /> BKash
            </p>
            <p className="ml-4 mt-5">
              <input type="checkbox" /> Nagad
            </p>
            <p className="ml-4 mt-5">
              <input type="checkbox" /> Rocket
            </p>
            <p className="ml-4 mt-5">
              <input type="checkbox" /> BKash (manual)
            </p>
            <p className="ml-4 my-5">
              <input type="checkbox" /> Credit & Debit Cards
            </p>
            <hr />
            <p className="m-4 mb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum privacy policy
            </p>
            <Link
              to=""
              className="checkOut-order-btn ml-4 px-48 py-4 transition delay-150 duration-300 ease-in-out"
            >
              Place Order
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
