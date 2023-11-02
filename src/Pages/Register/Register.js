import React, { useContext, useState } from "react";
import "./Register.css";
import { useLocation, useNavigate } from "react-router-dom";
import fb from "../../assets/image/fb.png";
import googleIcon from "../../assets/image/google.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Register = ({ showModalR, setShowModalR, setShowModal }) => {
  const [error, setError] = useState("");
  const { createUsers, updateUserProfile, loading, setLoading, googleSignIn } =
    useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const number = form.number.value;
    const address = form.address.value;
    console.log(name, email, password, address, number);
    createUsers(email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        handleUpdateUserProfile(name);
        navigate(from, { replace: true });
        setError("");
        form.reset();
      })
      .catch((err) => {
        console.log(err);
        setError(`${err.message} Input Valid Email And Password`);
      });
  };

  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  const handleGoogleSignIn = () => {
    console.log("Google hi");
    googleSignIn()
      .then((res) => {
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  const handleFacebookSignIn = () => {
    console.log("Facebook hi");
  };
  return (
    <>
      <div className="drawer drawer-end z-10">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu w-80 md:w-96 lg:max-w-full 2xl:w-1/4 min-h-full bg-white text-black">
            <form onSubmit={handleSubmit} className=" px-8 pt-6 pb-8 w-full">
              <div className="flex mb-4  justify-between">
                <h3 className="register-text text-4xl text-black font-semibold">
                  Sign Up
                </h3>
                <p
                  onClick={() => {
                    document.getElementById("my-drawer-3").click();
                  }}
                  className="text-2xl mt-6"
                >
                  x
                </p>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Name <span className="text-green-500">*</span>
                </label>
                <input
                  type="name"
                  name="name"
                  className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Email <span className="text-green-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  placeholder="name@gmail.com"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Password <span className="text-green-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  required
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Phone <span className="text-green-500">*</span>
                </label>
                <input
                  type="number"
                  name="number"
                  placeholder="+880123456789"
                  className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                  Address
                  <span className="text-green-500">*</span>
                </label>
                <input
                  type="address"
                  name="address"
                  placeholder="Address"
                  className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                  required
                />
              </div>
              <div className="text-error mb-4">{error}</div>

              <button
                type="submit"
                className="btn-register w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Sign up
              </button>
            </form>
            <div className="text-center mb-6 text-black font-medium">
              <u>Or Login with</u>
            </div>

            <div className="flex justify-center mb-5">
              <img
                onClick={handleFacebookSignIn}
                className=""
                src={fb}
                alt=""
              />
              <img
                onClick={handleGoogleSignIn}
                className="ml-3"
                src={googleIcon}
                alt=""
              />
            </div>
            <div className="text-sm  text-center font-medium text-gray-400">
              <p className="mb-2">Have an account?</p>

              <button
                onClick={() => {
                  document.getElementById("my-drawer-3").click();
                }}
              >
                <label
                  htmlFor="my-drawer-2"
                  className="drawer-button dark:text-blue-500 text-base font-bold"
                >
                  Please Login Your Account
                </label>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Register;
