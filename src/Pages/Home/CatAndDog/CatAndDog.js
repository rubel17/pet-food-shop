import React from "react";
import catBg from "../../../assets/image/cat-bg.png";
import dogBg from "../../../assets/image/dog-bg.png";
import cat from "../../../assets/image/cat.png";
import dog from "../../../assets/image/dog.png";
import catLV from "../../../assets/image/cat-left-vector.png";
import catRV from "../../../assets/image/cat-right-vector.png";
import catM from "../../../assets/image/cat-Misc.png";
import catA from "../../../assets/image/cat-Arrow.png";
import catE from "../../../assets/image/cat-Ellipse.png";
import catP from "../../../assets/image/cat-pawprint.png";
import catH from "../../../assets/image/Cat-Highlight.png";
import dogLV from "../../../assets/image/dog-left-vector.png";
import dogRV from "../../../assets/image/dog-right-vector.png";
import dogP from "../../../assets/image/pawprint 4.png";
import dogB from "../../../assets/image/bone 5.png";
import dogE from "../../../assets/image/dog-Ellipse.png";
import dogH from "../../../assets/image/Highlight_05 (1).png";
import { Link } from "react-router-dom";
import "./CatAndDog.css";

const CatAndDog = () => {
  return (
    <div>
      <div className="hidden md:flex justify-center">
        <div className="px-5">
          <div className="relative">
            <img src={catBg} alt="" />
            <img
              className="absolute 2xl:top-20 xl:top-16 left-10 z-10 w-1/3"
              src={cat}
              alt=""
            />
            <img className="absolute top-0 left-0" src={catLV} alt="" />
            <img className="absolute bottom-0 right-0" src={catRV} alt="" />
            <img className="absolute top-12 left-60 z-10" src={catM} alt="" />
            <img
              className="absolute bottom-6 right-10 z-10"
              src={catA}
              alt=""
            />
            <img className="absolute bottom-2 left-14" src={catE} alt="" />
            <div className="absolute top-28 right-12">
              <h1 className="cat-offer flex">
                Get <p className="cat15 px-4"> 15%</p> Off
              </h1>

              <img className="-mt-16 ml-64" src={catH} alt="" />

              <p className="cat-banner-p py-4 -ml-16">
                The Best Place for All Your Pet Needs
              </p>
              <Link to="/shop" className="btn-banner-shop px-7 py-4 ml-9">
                Shop Now
              </Link>
              <img className="-ml-10" src={catP} alt="" />
            </div>
          </div>
        </div>

        <div className="px-5">
          <div className="relative">
            <img src={dogBg} alt="" />
            <img
              className="absolute right-14 z-10 2xl:top-24 xl:top-20 w-1/4"
              src={dog}
              alt=""
            />
            <img className="absolute top-0 left-0" src={dogLV} alt="" />
            <img className="absolute bottom-0 right-0" src={dogRV} alt="" />
            <img className="absolute top-6 left-16 z-10" src={dogP} alt="" />
            <img className="absolute top-8 right-10" src={dogB} alt="" />
            <img className="absolute bottom-0 right-14" src={dogE} alt="" />
            <div className="absolute top-28 left-40">
              <h1 className="dog-offer">Black Friday </h1>
              <h1 className="dog-offer2 flex">
                Get <p className="cat15 px-4"> 20%</p> Off
              </h1>

              <p className="cat-banner-p 2xl:py-4 xl:py-1 -ml-16">
                Quality Products for Happy Pets
              </p>
              <Link className="btn-banner-shop2 px-7 py-4 ml-9">Shop Now</Link>
              <img src={dogH} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatAndDog;
