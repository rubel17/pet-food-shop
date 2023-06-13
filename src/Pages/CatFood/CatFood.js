import React from "react";
import "./CatFood.css";
import catFood from "../../assets/image/cat food.png";
import Slider from "react-slick";
import imgFin from "../../assets/image/pawprint (1) 1.png";
import { Link } from "react-router-dom";
import imgPcckC from "../../assets/image/pack-c.png";
import imgPcckD from "../../assets/image/pack-d.png";
import imgPcckE from "../../assets/image/pack-e.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import Heart from "../../assets/image/Heart.png";
import imgPcckB from "../../assets/image/pack-b.png";
import imgPcckA from "../../assets/image/pack-a.png";
import imgBon from "../../assets/image/bone 3.png";
import CatAndDog from "../Home/CatAndDog/CatAndDog";
const CatFood = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    rows: 2,
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
      {/* banner */}
      <div className="relative">
        <div className="catFood-Banner">
          <img src={catFood} alt="" />
        </div>
        <div className="catFood-banner-text">
          <h1>Cat Foods</h1>
          <p>Home/Cat Foods</p>
        </div>
      </div>
      {/* cat foods */}
      <section className="Cat-Foods mb-40">
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold cat-food-text">Cat Foods</h1>
          <p className="text-2xl font-medium cat-p">Our Trending Products</p>
        </div>
        <div className="flex cat-product">
          <div className="cat-finger">
            <img className="cat-finger-img" src={imgFin} alt="" />
          </div>
          {/* slider start */}
          <div className="cat-category">
            <Slider {...settings}>
              {/* product-1 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                    </div>
                    <h2>(50+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-2 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
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
              {/* product-3 */}
              <div className="single-product mb-20">
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
                  <h1 className="text-xl font-semibold py-1">Kit Cat Food</h1>
                  <h2 className="text-medium pb-1">Mini Fish Medley (2 Kg)</h2>
                  <h3 className="text-medium font-semibold">1100 Tk.</h3>
                  <div className="flex mb-4">
                    <div className="flex mr-3 mt-1">
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star1 pr-1" icon={faStar} />
                    </div>
                    <h2>(30+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-4 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
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
              {/* product-5 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                    </div>
                    <h2>(55+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-6 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                    </div>
                    <h2>(50+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-7 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                    </div>
                    <h2>(50+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-5 */}
              <div className="single-product mb-20">
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
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                    </div>
                    <h2>(55+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-3 */}
              <div className="single-product mb-20">
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
                  <h1 className="text-xl font-semibold py-1">Kit Cat Food</h1>
                  <h2 className="text-medium pb-1">Mini Fish Medley (2 Kg)</h2>
                  <h3 className="text-medium font-semibold">1100 Tk.</h3>
                  <div className="flex mb-4">
                    <div className="flex mr-3 mt-1">
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star pr-1" icon={faStar} />
                      <FontAwesomeIcon className="star1 pr-1" icon={faStar} />
                    </div>
                    <h2>(30+ views)</h2>
                  </div>
                  <Link className="btn-cart px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-end */}
            </Slider>
            <Link>
              <u>
                <p className="lg:text-end cat-see-all mt-8 pr-11">See all</p>
              </u>
            </Link>
          </div>
          {/* slider end */}
          <div className="cat-bone">
            <img className="cat-bone-img" src={imgBon} alt="" />
          </div>
        </div>
      </section>
      <CatAndDog></CatAndDog>
    </>
  );
};

export default CatFood;
