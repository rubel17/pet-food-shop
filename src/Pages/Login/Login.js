import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import fb from "../../assets/image/fb.png";
import googleIcon from "../../assets/image/google.png";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Login = ({ showModal, showModalR, setShowModal, setShowModalR }) => {
  // const { loading, setLoading, logInUser, googleSignIn } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    console.log("Google hi");
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
      {showModal ? (
        <>
          <div className="flex justify-center items-center lg:justify-end lg:items-start overflow-x-auto overflow-y-auto fixed  inset-0 z-50 outline-none focus:outline-none">
            <div className="relative max-w-3xl">
              <div className="border-0 login-page shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 login-body">
                  <form className=" px-8 pt-6 pb-8 w-full">
                    <div className="flex mb-4  justify-between">
                      <h3 className="login-text text-4xl text-black font-semibold">
                        Login
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="mb-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="name@gmail.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        required
                      />
                    </div>
                    <div className="flex justify-between mb-10">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="remember"
                            type="checkbox"
                            value=""
                            className="w-4 h-4 appearance-none checked:bg-lime-600 border border-gray-300 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-lime-800 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                            required
                          />
                        </div>
                        <label
                          htmlFor="remember"
                          className="ml-2 text-sm font-medium text-lime-700 dark:text-gray-300"
                        >
                          Remember me <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <Link
                        to="/"
                        className="text-sm text-lime-700 hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>

                    <button
                      type="submit"
                      className="btn-login w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Login
                    </button>
                  </form>
                  <div className="text-center mb-8 text-black font-medium">
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
                      className="ml-8 btn-google w-full text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
                    <p className="mb-5">You have no account?</p>
                    <p onClick={() => setShowModal(false)}>
                      <button
                        onClick={() => setShowModalR(true)}
                        className="register-page text-black underline dark:text-blue-500"
                      >
                        Please Create An Account
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

export default Login;

// {
//   /* // import React, { useContext, useState } from "react"; */
// }
// import toast, { Toaster } from "react-hot-toast";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import useTitle from "../../hooks/useTitle";
// import useToken from "../../hooks/useToken";

// const Login = () => {
//   useTitle("Login");
//   const [error, setError] = useState("");
//   useTitle("Login");
//   const { loading, setLoading, logInUser, googleSignIn } =
//     useContext(AuthContext);
//   const [loginEmail, setLoginEmail] = useState();
//   const [token] = useToken(loginEmail);
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from?.pathname || "/";

//   if (token) {
//     navigate(from, { replace: true });
//   }

//   if (loading) {
//     return (
//       <div className="text-center m-56">
//         <button className="btn btn-square loading"></button>
//       </div>
//     );
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const email = form.email.value;
//     const password = form.password.value;
//     logInUser(email, password)
//       .then((result) => {
//         toast.success("Login Successful");
//         const user = result.user;
//         setLoginEmail(user.email);
//         setError("");
//         form.reset();
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.error(err.message);
//         setError(`Email or Password don't Match. ${err.message} `);
//       });
//   };

//   const handleGoogleSignIn = () => {
//     googleSignIn()
//       .then((res) => {
//         const user = res.user;
//         const { displayName, email } = user;
//         saveUser(displayName, email);
//       })
//       .catch((err) => {
//         setLoading(false);
//         console.error(err);
//       });
//   };

//   const saveUser = (name, email) => {
//     const user = { name, email };
//     fetch(`${process.env.REACT_APP_API}/users`, {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(user),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         setLoginEmail(email);
//         toast.success("Login Successful");
//       });
//   };

//   return (
//     <div className="hero min-h-screen bg-base-200">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <p className="py-6">
//             Login Your valid Account with Your Email address and Password
//           </p>
//           <button onClick={handleGoogleSignIn} className="btn btn-accent">
//             Google Sign In
//           </button>
//         </div>
//         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//           <form onSubmit={handleSubmit} className="card-body">
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Email</span>
//               </label>
//               <input
//                 required
//                 type="email"
//                 name="email"
//                 placeholder="email"
//                 className="input input-bordered"
//               />
//             </div>
//             <div className="form-control">
//               <label className="label">
//                 <span className="label-text">Password</span>
//               </label>
//               <input
//                 required
//                 name="password"
//                 type="password"
//                 placeholder="password"
//                 className="input input-bordered"
//               />
//               <label className="label">
//                 <Link to="#" className="label-text-alt link link-hover">
//                   Forgot password?
//                 </Link>
//               </label>
//             </div>
//             <Link
//               to="/register"
//               className="text-error label-text-alt link link-hover"
//             >
//               Create a new account?
//             </Link>

//             <div className="form-control mt-6">
//               <div className="text-error mb-4">{error}</div>
//               <button className="btn btn-primary">Login</button>
//             </div>
//           </form>
//           <Toaster></Toaster>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
