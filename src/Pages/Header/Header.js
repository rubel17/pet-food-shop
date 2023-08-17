import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/image/Brand-Icon.png";
import CartList from "./CartList/CartList";
import WishList from "./WishList/WishList";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import "./Header.css";

const Header = () => {
  const [cartModal, setCartModal] = useState(false);
  const [wishModal, setWishModal] = useState(false);
  const { user } = useContext(AuthContext);

  //cart list length
  const { data: userCartList = [], refetch } = useQuery({
    queryKey: [`/myCartList`],
    queryFn: () =>
      fetch(`https://y-livid-three.vercel.app/myCartList/${user?.email}`).then(
        (res) => res.json()
      ),
  });
  refetch();

  //wish list length
  const { data: userWishList = [] } = useQuery({
    queryKey: [`/myWishList`],
    queryFn: () =>
      fetch(`https://y-livid-three.vercel.app/myWishList/${user?.email}`).then(
        (res) => res.json()
      ),
  });
  refetch();
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="text-black btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={1}
            className="text-black bg-white menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-64"
          >
            <li className="m-2">
              <Link className="font-bold text-xl" to="/">
                Home
              </Link>
            </li>
            <li className="m-2">
              <Link className="font-bold text-xl" to="/shop">
                Shop
              </Link>
            </li>
            <li className="m-2">
              <Link className="font-bold text-xl" to="/blog">
                Blog
              </Link>
            </li>
            <li className="m-2">
              <Link
                className="font-bold text-xl"
                to="/allProduct/clearanceSale"
              >
                Clearance Sale
              </Link>
            </li>
            <li className="m-2">
              <Link className="font-bold text-xl" to="/offer">
                Offer
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative lg:hidden">
        <button
          className="mr-4"
          type="button"
          onClick={() => setCartModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>

        <p className="absolute -top-1 right-3 product-length rounded-full">
          <span className="text-white absolute -top-1 right-1">
            {userCartList.length}
          </span>
        </p>
      </div>
      <CartList cartModal={cartModal} setCartModal={setCartModal}></CartList>
      <div className="relative lg:hidden">
        <button
          className="mr-14"
          type="button"
          onClick={() => setWishModal(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 512 512"
          >
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg>
        </button>
        <p className="absolute -top-1 right-12 product-length rounded-full">
          <span className="text-white absolute -top-1 right-1">
            {userWishList.length}
          </span>
        </p>
      </div>
      <WishList wishModal={wishModal} setWishModal={setWishModal}></WishList>
      <Link to="/">
        <img
          alt=""
          src={img}
          width="100px"
          height="100px"
          className=" lg:hidden  align-top"
        />
      </Link>
      <div className="navbar-center md:pl-8 hidden lg:flex">
        <Link to="/">
          <img
            alt=""
            src={img}
            width="60px"
            height="60px"
            className=" align-top"
          />
        </Link>
        <span className="font-semibold ml-2">Petopia</span>
        <ul className="text-black menu menu-horizontal ml-20 p-0">
          <li className="m-2">
            <Link to="/">Home</Link>
          </li>
          <li className="m-2">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="m-2">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="m-2">
            <Link to="/allProduct/clearanceSale">Clearance Sale</Link>
          </li>
          <li className="m-2">
            <Link to="/offer">Offer</Link>
          </li>
        </ul>

        <div className="relative ml-20">
          <input
            type="text"
            placeholder="Search"
            className="input px-10  border-gray-200 input-bordered h-10 bg-white text-black"
          />

          <p className=" absolute top-3 right-5 rounded-l-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </p>
        </div>

        <div className="relative">
          <button
            className="ml-12"
            type="button"
            onClick={() => setCartModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          <p className="absolute -top-2 -right-2 product-length rounded-full">
            <span className="text-white absolute -top-1 right-1">
              {userCartList.length}
            </span>
          </p>
        </div>
        <CartList cartModal={cartModal} setCartModal={setCartModal}></CartList>

        <div className="relative">
          <button
            className="ml-4"
            type="button"
            onClick={() => setWishModal(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 512 512"
            >
              <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
            </svg>
          </button>

          <p className="absolute -top-2 -right-2 product-length rounded-full">
            <span className="text-white absolute -top-1 right-1">
              {userWishList.length}
            </span>
          </p>
        </div>
        <WishList wishModal={wishModal} setWishModal={setWishModal}></WishList>
      </div>

      <div className="lg:mr-12 text-base-100 navbar-end">
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="text-base-100 btn btn-ghost hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Header;
