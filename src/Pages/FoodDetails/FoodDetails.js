import React, { useContext } from "react";
import "./FoodDetails.css";
import foodDetails from "../../assets/image/Food Details.png";
import { Link, Outlet, useLoaderData } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeartFD from "../../assets/image/Heart-FD.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import ProductsDetails from "../Products/ProductsDetails/ProductsDetails";

const FoodDetails = () => {
  const productDetail = useLoaderData({});
  const { data: relatedProducts = [] } = useQuery({
    queryKey: [`allProduct/category`],
    queryFn: () =>
      fetch(`http://localhost:4000/allProduct/${productDetail?.category}`).then(
        (res) => res.json()
      ),
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
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div>
        {/* banner */}
        <div className="relative mb-24">
          <div className="catFood-Banner">
            <img src={foodDetails} alt="" />
          </div>
          <div className="catFood-banner-text">
            <h1>Food Details</h1>
            <p>Home/{productDetail?.category}</p>
          </div>
        </div>
        {/* product start */}

        <div className="product-details flex mb-32">
          <div className="product-details-body shadow-md">
            <div className="product-body-img">
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
            <div className="flex mb-5">
              <div className="flex mr-3 mt-1">
                <FontAwesomeIcon className="star pr-1" icon={faStar} />
                <FontAwesomeIcon className="star pr-1" icon={faStar} />
                <FontAwesomeIcon className="star pr-1" icon={faStar} />
                <FontAwesomeIcon className="star pr-1" icon={faStar} />
                <FontAwesomeIcon className="star pr-1" icon={faStar} />
              </div>
              <h2>{productDetail?.views}</h2>
            </div>
            <div className="flex text-lg  mb-6">
              <button className="upAndDown px-2">-</button>
              <p className=" px-4">1</p>
              <button className="upAndDown px-2">+</button>
            </div>
            <div className="flex">
              <Link to="/addCart" className="btn-cart px-6 py-1">
                Add To Cart
              </Link>
              <Link className="btn-wishList" to="/wishList">
                <div className="flex  px-6">
                  <img src={HeartFD} alt="" />
                  <p>Add To Wish List</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* reviews section */}
        <div className="foodDetails-border border-t-2">
          <div className="pb-10 relative border-b-2 ">
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
        {/* related product */}
        <div className="mb-20">
          <h1 className="RelatedProduct">Related Products</h1>
          {/* product */}
          <section className="Cat-Foods relatedProFood">
            <div className="flex cat-product">
              {/* slider start */}
              <div className="cat-category">
                <Slider {...settings}>
                  {relatedProducts?.map((FoodList) => (
                    <ProductsDetails
                      key={FoodList._id}
                      FoodList={FoodList}
                    ></ProductsDetails>
                  ))}
                </Slider>
                <Link to={`/allProduct/${productDetail?.category}`}>
                  <u>
                    <p className="lg:text-end cat-see-all mt-8 pr-11">
                      See all
                    </p>
                  </u>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
