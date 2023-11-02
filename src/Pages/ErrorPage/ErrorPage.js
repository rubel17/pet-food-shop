import React from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Info from "../Info/Info";
import errorPage from "../../assets/image/Error Page.json";
import Lottie from "lottie-react";

const ErrorPage = () => {
  return (
    <>
      <Header></Header>
      <Info></Info>
      <div className="flex">
        <div className="w-1/2">
          <h1 className="e-oops">Oops !</h1>
          <p className="e-p">
            It is a long established fact that a reader will be distracted by{" "}
            <br />
            the readable content of a page when looking at its layout.
          </p>
          <Link className="px-7 py-3 e-goBack" to="./">
            Go Back
          </Link>
        </div>
        <div className="w-1/2 ">
          <div className="e-img">
            <Lottie animationData={errorPage} loop={true} />
          </div>
        </div>
      </div>
      <hr className="mb-10" />
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
