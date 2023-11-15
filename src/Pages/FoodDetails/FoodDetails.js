import React, { useContext } from "react";
import "./FoodDetails.css";
import foodDetails from "../../assets/image/Food Details.png";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ProductsDetails from "../Products/ProductsDetails/ProductsDetails";

import productBg from "../../assets/image/product-bg.png";
import checkCircle from "../../assets/image/check-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import CartShimmerEffect from "../CartShimmerEffect/CartShimmerEffect";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const productDetail = useLoaderData({});
  const { data: relatedProducts = [], refetch } = useQuery({
    queryKey: [`allProduct/category`],
    queryFn: () =>
      fetch(
        `https://y-rubelrk.vercel.app/allProduct/${productDetail?.category}`
      ).then((res) => res.json()),
  });

  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleAddToCart = (id) => {
    const email = user?.email;
    const productId = id;
    const Amounts = parseInt(productDetail?.Amount);
    const name = productDetail?.name;
    const weight = productDetail?.weight;
    const img = productDetail?.img;
    const value = 1;
    const addToCartList = {
      name,
      email,
      Amounts,
      weight,
      img,
      productId,
      value,
    };
    // add Data to localStorage
    const prevCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const cart = [...prevCartData, addToCartList];
    localStorage.setItem("cartData", JSON.stringify(cart));
    window.dispatchEvent(new Event("storage"));
    toast.success("Add To Cart Successful");

    if (user) {
      fetch(`https://y-rubelrk.vercel.app/addToCart`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(addToCartList),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add To Cart Successful");
          }
        });
    } else {
      // toast.error("Please Login");
    }
  };
  const handleAddToWishListFood = (id) => {
    const email = user?.email;
    const productId = id;
    const name = productDetail?.name;
    const weight = productDetail?.weight;
    const img = productDetail?.img;
    const Amounts = parseInt(productDetail?.Amount);
    const AddToWishList = {
      name,
      email,
      Amounts,
      weight,
      img,
      productId,
    };
    const prevWishData = JSON.parse(localStorage.getItem("wishData")) || [];
    const wish = [...prevWishData, AddToWishList];
    localStorage.setItem("wishData", JSON.stringify(wish));
    window.dispatchEvent(new Event("storage"));
    toast.success("Add To Wish Successful");
  };
  refetch();
  return (
    <>
      <div className="lg:-mb-48">
        <div className="relative mb-8 lg:mb-24">
          <div className="catFood-Banners">
            <img src={foodDetails} alt="" />
          </div>
          <div className="text-center absolute top-1/3 right-1/3 lg:right-1/4 xl:right-1/3   2xl:right-0 2xl:left-0  text-white">
            <h1 className="font-semibold lg:text-6xl">Food Details</h1>
            <p className="text-2xl">
              Home/ <span className="uppercase">{productDetail?.category}</span>
            </p>
          </div>
        </div>

        <div className="lg:flex mb-32">
          <div className="relative 2xl:ml-72 xl:ml-60 lg:ml-40 md:ml-20">
            <img className="-mt-8 brightness " src={productBg} alt="" />
            <img
              className="absolute top-1/4 left-1/4 md:left-40 md:top-20 w-1/3 lg:w-1/2"
              src={productDetail?.img}
              alt=""
            />
          </div>
          <div className="product-text ml-3">
            <h1 className="text-4xl font-semibold pb-3">
              {productDetail?.name}
            </h1>
            <h3 className="text-medium font-semibold pb-3">
              {productDetail?.Amount}
            </h3>
            <h2 className="text-xl font-bold pb-3">
              Brit Adult Cat Food Delicious chunks with chicken for adult cat
            </h2>
            <div className="flex text-medium pb-3">
              <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
              <h2>
                With Brit Adult’s crispy chunks, your naughty Senior will
                visibly enjoy the <br /> delicious flavour of chicken.
              </h2>
            </div>
            <div className="flex text-medium pb-3">
              <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
              <h2>
                With Brit Adult’s crispy chunks, your naughty Senior will
                visibly enjoy the <br /> delicious flavour of chicken.
              </h2>
            </div>
            <div className="flex text-medium pb-3">
              <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
              <h2>
                With Brit Adult’s crispy chunks, your naughty Senior will
                visibly enjoy the <br /> delicious flavour of chicken.
              </h2>
            </div>
            <div className="flex text-medium pb-3">
              <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
              <h2>
                With Brit Adult’s crispy chunks, your naughty Senior will
                visibly enjoy the <br /> delicious flavour of chicken.
              </h2>
            </div>

            <h1 className="pb-3">
              <span className="text-xl font-semibold">Categories: </span>
              Cat dry food, Adult food
            </h1>

            <div className="pb-3 flex">
              <span className="text-xl font-semibold mr-5">Share: </span>
              <Link to="https://www.facebook.com/" target="_blank">
                <FontAwesomeIcon className="md:mt-2" icon={faFacebookF} />
              </Link>
              <Link to="https://www.linkedin.com/" target="_blank">
                <FontAwesomeIcon className="md:mt-2 ml-5" icon={faLinkedinIn} />
              </Link>
              <Link to="https://twitter.com/" target="_blank">
                <FontAwesomeIcon className="md:mt-2 ml-5" icon={faTwitter} />
              </Link>
              <Link to="https://www.instagram.com/" target="_blank">
                <FontAwesomeIcon className="md:mt-2 ml-5" icon={faInstagram} />
              </Link>
            </div>
            <p className="inStock font-semibold text-xl pb-3">In Stock</p>
            <div className="flex">
              <Link
                onClick={() => handleAddToCart(productDetail?._id)}
                // className="btn-cart "
                className="btn-cart addToCart-btn glow-on-hover text-lg"
              >
                Add To Cart
              </Link>

              <Link
                className="btn-wishList"
                onClick={() => handleAddToWishListFood(productDetail?._id)}
              >
                <div className="flex  px-2 rounded-lg border-black py-2.5 text-center mr-2 addToCart-btn glow-on-hover">
                  <p className="font-semibold text-xl">Add To Wish List</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mb-28">
          <div className="lg:border-b-2 2xl:mx-80 xl:mx-40 lg:mx-20">
            <div className="lg:flex justify-center mb-2  ml-5 lg:ml-0">
              <p className="mb-3 lg:mb-0">
                <Link
                  to={`/foodDetails/${productDetail?._id}`}
                  className=" mr-28 pr-2 hover:border-b-2 hover:border-b-indigo-500 border-b-2 lg:border-b-0"
                >
                  Description
                </Link>
              </p>
              <p className="mb-3 lg:mb-0">
                <Link
                  to={`/foodDetails/${productDetail?._id}/additionalInfo`}
                  className="mr-28 pr-2 hover:border-b-2 hover:border-b-indigo-500 border-b-2 lg:border-b-0"
                >
                  Additional Information
                </Link>
              </p>
              <p className="mb-3 lg:mb-0">
                <Link
                  to={`/foodDetails/${productDetail?._id}/reviews`}
                  className="mr-28 pr-2 hover:border-b-2 hover:border-b-indigo-500 border-b-2 lg:border-b-0"
                >
                  Reviews
                </Link>
              </p>

              <p>
                <Link
                  to={`/foodDetails/${productDetail?._id}/shipping`}
                  className="hover:border-b-2 hover:border-b-indigo-500 border-b-2 lg:border-b-0"
                >
                  Shipping & Delivery
                </Link>
              </p>
            </div>
          </div>

          <Outlet></Outlet>
        </div>

        {/* Related Products */}

        <h1 className="RelatedProduct ml-5 2xl:ml-80 lg:ml-64">
          Related Products
        </h1>
        <section className="lg:flex justify-center lg:mt-20 mt-8">
          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 product-height">
            <div>
              {relatedProducts.length === 0 ? (
                <Slider {...settings}>
                  {Array.from({ length: 10 }).map((data, i) => (
                    <CartShimmerEffect key={i} />
                  ))}
                </Slider>
              ) : (
                <Slider {...settings}>
                  {relatedProducts?.map((FoodList) => (
                    <ProductsDetails
                      key={FoodList._id}
                      FoodList={FoodList}
                    ></ProductsDetails>
                  ))}
                </Slider>
              )}
            </div>
            <Link to={`/allProduct/${productDetail?.category}`}>
              <u>
                <p className="lg:text-end cat-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>
        </section>
      </div>
      <ToastContainer />
    </>
  );
};

export default FoodDetails;
