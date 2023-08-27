import React, { useContext, useState } from "react";
import "./FoodDetails.css";
import foodDetails from "../../assets/image/Food Details.png";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ProductsDetails from "../Products/ProductsDetails/ProductsDetails";
import { toast } from "react-hot-toast";
import Heart from "../../assets/image/Heart.png";
import Love from "../../assets/image/red-love.png";
import productBg from "../../assets/image/product-bg.png";
import checkCircle from "../../assets/image/check-circle.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const FoodDetails = () => {
  const { user } = useContext(AuthContext);
  const productDetail = useLoaderData({});
  const { data: relatedProducts = [], refetch } = useQuery({
    queryKey: [`allProduct/category`],
    queryFn: () =>
      fetch(
        `https://y-livid-three.vercel.app/allProduct/${productDetail?.category}`
      ).then((res) => res.json()),
  });
  const [wishList, setWishList] = useState(Heart);

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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
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
    if (user) {
      fetch(`https://y-livid-three.vercel.app/addToCart`, {
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
    }
  };
  const handleAddToWishList = (id) => {
    let value = wishList;
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
    if (user && value === Heart) {
      setWishList(Love);
      fetch(`https://y-livid-three.vercel.app/addToWishList`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(AddToWishList),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            toast.success("Add To WishList Successful");
          }
        });
    } else {
      setWishList(Heart);
      console.log(productId);
      fetch(`https://y-livid-three.vercel.app/deleteToWishList/${productId}`, {
        method: "DELETE",
        // headers: {
        //   authorization: `Bearer ${localStorage.getItem("token")}`,
        // },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("Removed To WishList Successful");
            // refetch();
          }
        });
    }
  };
  refetch();
  return (
    <>
      <div className="lg:-mb-48">
        <div className="relative mb-8 lg:mb-24">
          <div className="catFood-Banners">
            <img src={foodDetails} alt="" />
          </div>
          <div className="catFood-banner-texts text-center mt-12 lg:mt-36 lg:ml-96 absolute top-0 left-0   text-white">
            <h1 className="font-semibold lg:text-6xl">Food Details</h1>
            <p className="text-2xl">Home/{productDetail?.category}</p>
          </div>
        </div>

        <div className="lg:flex -mb-52 lg:mb-32 ">
          <div className="relative 2xl:ml-72 xl:ml-60 lg:ml-40 md:ml-20">
            <img className="-mt-8 brightness " src={productBg} alt="" />
            <img
              className="absolute lg:top-1/4 top-32 left-20 lg:left-1/4 w-1/2"
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
                onClick={() => handleAddToWishList(productDetail?._id)}
              >
                <div className="flex  px-2 rounded-lg border-black py-2.5 text-center mr-2 addToCart-btn glow-on-hover">
                  <p className="font-semibold text-xl">Add To Wish List</p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="foodDetails-border border-t-2">
          <div className="pb-10 relative border-b-2 hidden lg:block ">
            <Link
              to={`/foodDetails/${productDetail?._id}`}
              className="food-btn hover:pb-3    hover:border-b-2 hover:border-b-indigo-500 absolute top-1 left-10 px-32 border-r-2"
            >
              Reviews
            </Link>

            <Link
              to={`/foodDetails/${productDetail?._id}/shipping`}
              className="food-btn hover:pb-3    hover:border-b-2 hover:border-b-indigo-500 absolute top-1 left-96 px-32 border-r-2"
            >
              Shipping and Delivery
            </Link>
            <Link
              to={`/foodDetails/${productDetail?._id}/additionalInfo`}
              className="food-btn hover:pb-3    hover:border-b-2 hover:border-b-indigo-500 absolute top-1 right-10 px-32"
            >
              Additional Information
            </Link>
          </div>

          <Outlet></Outlet>
        </div>

        {/* Related Products */}

        <h1 className="RelatedProduct ml-5 2xl:ml-72 lg:ml-64 border-b-2 2xl:w-1/6 lg:w-1/4">
          Related Products
        </h1>
        <section className="lg:flex justify-center lg:mt-24 mt-8">
          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <div>
              <Slider {...settings}>
                {relatedProducts?.map((FoodList) => (
                  <ProductsDetails
                    key={FoodList._id}
                    FoodList={FoodList}
                  ></ProductsDetails>
                ))}
              </Slider>
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
    </>
  );
};

export default FoodDetails;
