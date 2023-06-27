import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import React, { useContext, useState } from "react";
import "./Info.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const Info = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModalR, setShowModalR] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="flex justify-center bg-col md:h-20">
      <div className="md:flex md:justify-between t-width">
        <div className="md:flex">
          <div className="flex mt-3">
            <FontAwesomeIcon className="mt-5" icon={faPhoneVolume} />
            <div className="ml-3">
              <p>Contact Us</p>
              <p>+880123456789</p>
            </div>
          </div>
          <div className="md:ml-6 h-10 mt-5 md:border border-t"></div>
          <div className="flex mt-3 ml-5">
            <FontAwesomeIcon className="mt-5" icon={faEnvelope} />
            <div className="ml-3">
              <p>Email</p>
              <p>xyz@gmail.com</p>
            </div>
          </div>
          <div className="md:ml-6 h-10 mt-5 md:border border-t"></div>
          <div className="flex mt-7 ml-5">
            <div className="ml-3">
              <p>Time: 9AM - 10PM</p>
            </div>
          </div>
          <div className="md:ml-6 h-10 mt-5 md:border border-t"></div>
          <div className="flex mt-3 ml-5">
            <FontAwesomeIcon className="mt-5" icon={faFacebookF} />
            <FontAwesomeIcon className="mt-5 ml-5" icon={faLinkedinIn} />
            <FontAwesomeIcon className="mt-5 ml-5" icon={faTwitter} />
            <FontAwesomeIcon className="mt-5 ml-5" icon={faInstagram} />
          </div>
        </div>

        <div className="mt-10 md:mt-5">
          {user ? (
            <span className="pe-3 text-teal-300">{user.displayName}</span>
          ) : (
            <button type="button" onClick={() => setShowModalR(true)}>
              Sign Up
            </button>
          )}

          {user ? (
            <Link
              onClick={handleSignOut}
              className="normal-case btn btn-ghost"
              to="/register"
            >
              SignOut
            </Link>
          ) : (
            <button
              className="py-2 px-9 text-xl font-semibold active:bg-blue-500 active:text-white  outline-none focus:outline-none  bg-white text-emerald-600 w-32 ml-5"
              type="button"
              onClick={() => setShowModal(true)}
            >
              Login
            </button>
          )}
        </div>
      </div>
      <Login
        showModal={showModal}
        setShowModal={setShowModal}
        setShowModalR={setShowModalR}
        showModalR={showModalR}
      ></Login>
      <Register
        showModalR={showModalR}
        setShowModalR={setShowModalR}
        setShowModal={setShowModal}
      ></Register>
    </div>
  );
};

export default Info;
