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
      <div className="2xl:-mb-96 lg:-mb-52">
        <div className="relative mb-8 lg:mb-24">
          <div className="catFood-Banners">
            <img src={foodDetails} alt="" />
          </div>
          <div className="catFood-banner-texts text-center mt-12 lg:mt-36 lg:ml-96 absolute top-0 left-0   text-white">
            <h1 className="font-semibold lg:text-6xl">Food Details</h1>
            <p className="text-2xl">Home/{productDetail?.category}</p>
          </div>
        </div>

        <div className="product-details lg:flex -mb-52 lg:mb-32 mx-5 lg:mx-0">
          <div className="product-details-body lg:ml-80 lg:w-96 lg:h-96 mb-10 lg:mb-0 shadow-md">
            <div className="product-body-img lg:w-96 lg:h-96">
              <img src={productDetail?.img} alt="" />
            </div>
          </div>
          <div className="product-text">
            <h1 className="text-xl font-semibold pb-3">
              {productDetail?.name}
            </h1>
            <h3 className="text-medium font-semibold pb-3">
              {productDetail?.Amount}
            </h3>
            <h2 className="text-medium pb-3">
              Flavor: {productDetail?.weight}{" "}
            </h2>
            <h2 className="text-medium pb-3">
              Cat Life Stage: Adult 1 year - 5 years{" "}
            </h2>

            <div className="flex">
              <div className="product-rating">
                <div
                  className="Stars"
                  style={{
                    "--rating": productDetail?.Rating || productDetail?.rating,
                  }}
                ></div>
              </div>
              <h2>{productDetail?.views}</h2>
            </div>

            <div className="flex">
              <Link
                onClick={() => handleAddToCart(productDetail?._id)}
                className="btn-cart px-6 py-1"
              >
                Add To Cart
              </Link>
              <Link
                className="btn-wishList"
                onClick={() => handleAddToWishList(productDetail?._id)}
              >
                <div className="flex  px-6">
                  <img src={wishList} alt="" />
                  <p>Add To Wish List</p>
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
