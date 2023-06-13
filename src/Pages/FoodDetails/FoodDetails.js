import React from "react";
import "./FoodDetails.css";
import foodDetails from "../../assets/image/Food Details.png";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgPcckC from "../../assets/image/pack-c.png";
import HeartFD from "../../assets/image/Heart-FD.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import Heart from "../../assets/image/Heart.png";
import imgPcckA from "../../assets/image/pack-a.png";
import imgPcckB from "../../assets/image/pack-b.png";
import imgPcckD from "../../assets/image/pack-d.png";
import imgPcckE from "../../assets/image/pack-e.png";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";

const FoodDetails = () => {
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
            <p>Home/Cat Foods</p>
          </div>
        </div>
        {/* product start */}

        <div className="product-details flex mb-32">
          <div className="product-details-body shadow-md">
            <div className="product-body-img">
              <img src={imgPcckC} alt="" />
            </div>
          </div>
          <div className="product-text">
            <h1 className="text-xl font-semibold pb-3">
              Royal Canin Kitten Food
            </h1>
            <h3 className="text-medium font-semibold pb-3">500 Tk.</h3>
            <h2 className="text-medium pb-3">Flavor: Chicken (1 Kg) </h2>
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
              <h2>(50+ views)</h2>
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
        <div class="foodDetails-border border-t-2">
          <div className="pb-10 relative border-b-2 ">
            <Link
              to="/foodDetails/reviews"
              className="food-btn hover:pb-3    hover:border-b-2 hover:border-b-indigo-500 absolute top-1 left-10 px-32 border-r-2"
            >
              Reviews
            </Link>

            <Link
              to="/foodDetails/shipping"
              className="food-btn hover:pb-3    hover:border-b-2 hover:border-b-indigo-500 absolute top-1 left-96 px-32 border-r-2"
            >
              Shipping and Delivery
            </Link>
            <Link
              to="/foodDetails/additionalInfo"
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
              {/* <div className="cat-finger">
                <img className="cat-finger-img" src={imgFin} alt="" />
              </div> */}
              {/* slider start */}
              <div className="cat-category">
                <Slider {...settings}>
                  {/* product-1 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckC} alt="" />
                          <Link to="/wishList">
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Royal Canin Kitten Food
                        </h1>
                        <h2 className="text-medium pb-1">Chicken ( 1 Kg)</h2>
                        <h3 className="text-medium font-semibold">500 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                          </div>
                          <h2>(50+ views)</h2>
                        </div>
                        <Link to="/addCart" className="btn-cart px-3 py-3">
                          Add To Cart{" "}
                        </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-2 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckB} alt="" />
                          <Link>
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Brit Premium Senior Food
                        </h1>
                        <h2 className="text-medium pb-1">Chicken (1.5 Kg)</h2>
                        <h3 className="text-medium font-semibold">650 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStarHalfAlt}
                            />
                          </div>
                          <h2>(40+ views)</h2>
                        </div>
                        <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-3 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckD} alt="" />
                          <Link>
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Kit Cat Food
                        </h1>
                        <h2 className="text-medium pb-1">
                          Mini Fish Medley (2 Kg)
                        </h2>
                        <h3 className="text-medium font-semibold">1100 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star1 pr-1"
                              icon={faStar}
                            />
                          </div>
                          <h2>(30+ views)</h2>
                        </div>
                        <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-4 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckE} alt="" />
                          <Link>
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Magnus Adult Kitten Food
                        </h1>
                        <h2 className="text-medium pb-1">Chicken ( 2 Kg)</h2>
                        <h3 className="text-medium font-semibold">1000 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStarHalfAlt}
                            />
                          </div>
                          <h2>(45+ views)</h2>
                        </div>
                        <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-5 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckA} alt="" />
                          <Link>
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Pro Plan Natural Food
                        </h1>
                        <h2 className="text-medium pb-1">Chicken ( 1.5 Kg)</h2>
                        <h3 className="text-medium font-semibold">800 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                          </div>
                          <h2>(55+ views)</h2>
                        </div>
                        <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-6 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckD} alt="" />
                          <Link>
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Royal Canin Kitten Food
                        </h1>
                        <h2 className="text-medium pb-1">Chicken ( 1 Kg)</h2>
                        <h3 className="text-medium font-semibold">500 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                          </div>
                          <h2>(50+ views)</h2>
                        </div>
                        <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-7 */}
                  <Link to="/foodDetails">
                    <div className="single-product">
                      <div className=" single-product-body">
                        <div className=" single-product-body-img relative">
                          <img src={imgPcckC} alt="" />
                          <Link>
                            <img
                              className="absolute top-0 right-0 p-5"
                              src={Heart}
                              alt=""
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="single-product-text">
                        <h1 className="text-xl font-semibold py-1">
                          Royal Canin Kitten Food
                        </h1>
                        <h2 className="text-medium pb-1">Chicken ( 1 Kg)</h2>
                        <h3 className="text-medium font-semibold">500 Tk.</h3>
                        <div className="flex mb-4">
                          <div className="flex mr-3 mt-1">
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                            <FontAwesomeIcon
                              className="star pr-1"
                              icon={faStar}
                            />
                          </div>
                          <h2>(50+ views)</h2>
                        </div>
                        <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                      </div>
                    </div>
                  </Link>
                  {/* product-end */}
                </Slider>
                <Link>
                  <u>
                    <p className="lg:text-end cat-see-all mt-8 pr-11">
                      See all
                    </p>
                  </u>
                </Link>
              </div>
              {/* slider end */}
              {/* <div className="cat-bone">
                <img className="cat-bone-img" src={imgBon} alt="" />
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default FoodDetails;
