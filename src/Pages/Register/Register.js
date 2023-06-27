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

  // if (loading) {
  //   return (
  //     <div className="text-center m-56">
  //       <button className="btn btn-square loading"></button>
  //     </div>
  //   );
  // }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const address = form.address.value;
    console.log(name, email, password, address);
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
  // update profile
  const handleUpdateUserProfile = (name) => {
    const profile = {
      displayName: name,
    };
    updateUserProfile(profile)
      .then((res) => {})
      .catch((err) => console.error(err));
  };

  // google SignIn
  const handleGoogleSignIn = () => {
    console.log("Google hi");
    googleSignIn()
      .then((res) => {
        // const user = res.user;
        // const { displayName, email } = user;
        // saveUser(displayName, email);
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
      });
  };
  const handleFacebookSignIn = () => {
    console.log("Facebook hi");
    // googleSignIn()
    //   .then((res) => {
    //     const user = res.user;
    //     const { displayName, email } = user;
    //     saveUser(displayName, email);
    //   })
    //   .catch((err) => {
    //     setLoading(false);
    //     console.error(err);
    //   });
  };
  return (
    <>
      {showModalR ? (
        <>
          <div className="flex justify-center items-center lg:justify-end lg:items-start overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-3xl">
              <div className="border-0 register-pageA shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 login-body">
                  <form
                    onSubmit={handleSubmit}
                    className=" px-8 pt-6 pb-8 w-full"
                  >
                    <div className="flex mb-4  justify-between">
                      <h3 className="register-text text-4xl text-black font-semibold">
                        Sign Up
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModalR(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                    <div>
                      <label
                        // htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Name <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="name"
                        name="name"
                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div>
                      <label
                        // htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        // htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        // id="password"
                        placeholder="••••••••"
                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    {/* <div>
                      <label
                        // htmlFor="ConfirmPassword"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm Password
                        <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="ConfirmPassword"
                        name="ConfirmPassword"
                        // id="ConfirmPassword"
                        placeholder="••••••••"
                        className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div> */}
                    <div>
                      <label
                        // htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Address
                        <span className="text-green-500">*</span>
                      </label>
                      <input
                        type="address"
                        name="address"
                        // id="address"
                        placeholder="Address"
                        className="mb-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
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
                  {/* facebook */}
                  <div className="relative">
                    <button
                      onClick={handleFacebookSignIn}
                      className="ml-8 btn-facebook w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Facebook
                    </button>
                    <img
                      className="absolute top-0 left-20 px-3 py-2 mr-4"
                      src={fb}
                      alt=""
                    />
                  </div>
                  {/* google */}
                  <div className="relative">
                    <button
                      onClick={handleGoogleSignIn}
                      className="ml-8 btn-googleR w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Google
                    </button>
                    <img
                      className="absolute top-3 left-24 "
                      src={googleIcon}
                      alt=""
                    />
                  </div>
                  <div className="text-sm  text-center font-medium text-gray-400">
                    <p className="mb-4">Have an account?</p>
                    <p onClick={() => setShowModalR(false)}>
                      <button
                        onClick={() => setShowModal(true)}
                        className="register-page text-black underline dark:text-blue-500"
                      >
                        Please Login Your Account
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Register;
