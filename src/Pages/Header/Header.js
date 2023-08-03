import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/image/Brand-Icon.png";
import CartList from "./CartList/CartList";
import WishList from "./WishList/WishList";
import love from "../../assets/image/w-love.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";

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
            className="h-10 w-10"
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
        <p className="absolute -top-3 right-4">
          <span className="text-white bg-lime-800 rounded-full">
            {userCartList.length}
          </span>
        </p>
      </div>
      <div className="relative lg:hidden">
        <button
          className="mr-14"
          type="button"
          onClick={() => setWishModal(true)}
        >
          <img className="w-20 h-10" src={love} alt="" />
        </button>
        <p className="absolute -top-3 right-14">
          <span className="text-white bg-lime-800 rounded-full">
            {userWishList.length}
          </span>
        </p>
      </div>
      <img
        alt=""
        src={img}
        width="60px"
        height="60px"
        className=" lg:hidden  align-top"
      />
      <div className="navbar-center md:pl-8 hidden lg:flex">
        <img
          alt=""
          src={img}
          width="60px"
          height="60px"
          className=" align-top"
        />
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
            className="input border-1 border-black input-bordered h-10 bg-white text-black"
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
          <p className="absolute -top-3 -right-1">
            <span className="text-white bg-lime-800 rounded-full">
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
            <img className="w-5 h-4" src={love} alt="" />
          </button>
          <p className="absolute -top-3 -right-1">
            <span className="text-white bg-lime-800 rounded-full">
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
