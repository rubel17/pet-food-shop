import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/image/45184974.jpg";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Header = () => {
  // const { user, logOut } = useContext(AuthContext);

  // const handleSignOut = () => {
  //   logOut()
  //     .then(() => {})
  //     .catch((error) => console.error(error));
  // };

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
            className="text-black bg-white menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
          >
            <li className="m-2">
              <Link to="/">Home</Link>
            </li>
            <li className="m-2">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="m-2">
              <Link to="/blogs">Blog</Link>
            </li>
            <li className="m-2">
              <Link to="/clearanceSale">Clearance Sale</Link>
            </li>
            <li className="m-2">
              <Link to="/offer">Offer</Link>
            </li>
          </ul>
        </div>
      </div>
      <img
        alt=""
        src={img}
        width="90px"
        height="90px"
        className="bg-current md:hidden  align-top"
      />
      <div className="navbar-center pl-8 hidden lg:flex">
        <img
          alt=""
          src={img}
          width="110px"
          height="110px"
          className="bg-current align-top"
        />
        <ul className="text-black menu menu-horizontal ml-32 p-0">
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
            <Link to="/clearanceSale">Clearance Sale</Link>
          </li>
          <li className="m-2">
            <Link to="/offer">Offer</Link>
          </li>
        </ul>
        <div className="relative ml-36">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered h-10"
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
        <button className="ml-12">
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
        <FontAwesomeIcon className="ml-4" icon={faHeart} />
      </div>

      <div className="lg:mr-12 text-base-100 navbar-end">
        {/* {user ? (
          <Link
            onClick={handleSignOut}
            className="normal-case btn btn-ghost"
            to="/register"
          >
            SignOut
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )} */}
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="text-base-100 btn btn-ghost lg:hidden"
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
