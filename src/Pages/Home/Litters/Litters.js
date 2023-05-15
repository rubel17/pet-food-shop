import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Litters.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import Heart from "../../../assets/image/Heart.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import imgPcckA from "../../../assets/image/pngegg (12) 1.png";
// import imgPcckB from "../../../assets/image/pngegg (13) 1.png";
import imgPcckC from "../../../assets/image/pngegg (14) 1.png";
import imgPcckD from "../../../assets/image/pngegg (15) 1.png";
// import imgPcckE from "../../../assets/image/pack-e.png";
// import imgFin from "../../../assets/image/pawprint 4.png";
import imgPcckF from "../../../assets/image/Royal Canin.png";
import imgPcckG from "../../../assets/image/Pedigree Adult1.png";
import imgPcckH from "../../../assets/image/Pedigree Adult2.png";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
const Litters = () => {
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
    <div>
      <section className="dog-Foods">
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold litters-text">Litters</h1>
          <p className="text-2xl font-medium dog-p">Our Trending Products</p>
        </div>
        <div className="flex dog-product">
          {/* slider start */}
          <div className="dog-category">
            <Slider {...settings}>
              {/* product-1 */}
              <div className="single-product">
                <div className=" single-product-dog">
                  <div className=" single-product-body-img relative">
                    <img src={imgPcckF} alt="" />
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
                    Royal Canin Digestive Care
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-2 */}
              <div className="single-product">
                <div className=" single-product-dog">
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
                    Pro Plan Dog Food
                  </h1>
                  <h2 className="text-medium pb-1">Chicken & Egg (1.5 Kg)</h2>
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-3 */}
              <div className="single-product">
                <div className=" single-product-dog">
                  <div className=" single-product-body-img relative">
                    <img src={imgPcckG} alt="" />
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
                    Pedigree Adult Food
                  </h1>
                  <h2 className="text-medium pb-1">
                    Chicken & Vegetables (2 Kg)
                  </h2>
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-4 */}
              <div className="single-product">
                <div className=" single-product-dog">
                  <div className=" single-product-body-img relative">
                    <img src={imgPcckH} alt="" />
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
                    Pedigree Adult Food
                  </h1>
                  <h2 className="text-medium pb-1">Real Beef (2 Kg)</h2>
                  <h3 className="text-medium font-semibold">1500 Tk.</h3>
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-5 */}
              <div className="single-product">
                <div className=" single-product-dog">
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-6 */}
              <div className="single-product">
                <div className=" single-product-dog">
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-7 */}
              <div className="single-product">
                <div className=" single-product-dog">
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
                  <Link className="btn-litter px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-end */}
            </Slider>
            <Link>
              <u>
                <p className="lg:text-end litter-see-all mt-8 pr-11">See all</p>
              </u>
            </Link>
          </div>
          {/* slider end */}
        </div>
      </section>
    </div>
  );
};

export default Litters;
