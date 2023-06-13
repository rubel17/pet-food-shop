import React from "react";
import "./Home.css";
import CatAndDog from "./CatAndDog/CatAndDog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Heart from "../../assets/image/Heart.png";
import imgC from "../../assets/image/cat 1.png";
import imgD from "../../assets/image/dog 1.png";
import imgL from "../../assets/image/litter-box 1.png";
import imgT from "../../assets/image/dog-toy 1.png";
import imgH from "../../assets/image/beauty-saloon 1.png";
import imgA from "../../assets/image/Accessories.png";
import imgF from "../../assets/image/fish 1.png";
import imgB from "../../assets/image/parrot 1.png";
import imgR from "../../assets/image/rabbit 1.png";
import imgN from "../../assets/image/new.png";
import imgAr from "../../assets/image/Arrow_04.png";
import imgFin from "../../assets/image/pawprint (1) 1.png";
import imgFing from "../../assets/image/pawprint 2.png";
import imgBon from "../../assets/image/bone 3.png";
import imgCol from "../../assets/image/Blob Shape.png";
import imgCol2 from "../../assets/image/Blob Shape (1).png";
import imgCol3 from "../../assets/image/neeeeeeee.png";
import imgCol4 from "../../assets/image/Blob Shape (3).png";
import imgArr from "../../assets/image/Highlight_04.png";
import imgArr2 from "../../assets/image/Highlight_05.png";
import imgShed from "../../assets/image/Ellipse 4.png";
import imgPcckA from "../../assets/image/pack-a.png";
import imgPcckB from "../../assets/image/pack-b.png";
import imgPcckC from "../../assets/image/pack-c.png";
import imgPcckD from "../../assets/image/pack-d.png";
import imgPcckE from "../../assets/image/pack-e.png";
import imgPcckF from "../../assets/image/Royal Canin.png";
import imgPcckG from "../../assets/image/Pedigree Adult1.png";
import imgPcckH from "../../assets/image/Pedigree Adult2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ClearanceSale from "./ClearanceSale/ClearanceSale";
import Litters from "./Litters/Litters";
import BrandLogo from "./BrandLogo/BrandLogo";
// import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
// import useTitle from "../../hooks/useTitle";

const Home = () => {
  //   const { loading } = useContext(AuthContext);
  //   useTitle("Home");

  //   if (loading) {
  //     return (
  //       <div className="text-center m-56">
  //         <button className="btn btn-square loading"></button>
  //       </div>
  //     );
  //   }
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
      <section className="flex justify-center">
        <div className="category">
          <div className="Product grid grid-cols-1 divide-y">
            <Link
              to="/catFood"
              className="Items1 bg-emerald-100 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgC} alt="" />
                <p>Cat Food</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items2 py-5 flex justify-between">
              <div className="flex">
                <img src={imgD} alt="" />
                <p>Dog Food</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items1 bg-emerald-100 py-5 flex justify-between">
              <div className="flex">
                <img src={imgL} alt="" />
                <p>Litter</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items2 py-5 flex justify-between">
              <div className="flex">
                <img src={imgT} alt="" />
                <p>Toys</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items1 bg-emerald-100 py-5 flex justify-between">
              <div className="flex">
                <img src={imgH} alt="" />
                <p>Care & Health</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items2 py-5 flex justify-between">
              <div className="flex">
                <img src={imgA} alt="" />
                <p>Accessories</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items1 bg-emerald-100 py-5 flex justify-between">
              <div className="flex">
                <img src={imgF} alt="" />
                <p>Fish Food & Accessories</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items2 py-5 flex justify-between">
              <div className="flex">
                <img src={imgB} alt="" />
                <p>Bird Food & Accessories </p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link className="Items1 bg-emerald-100 py-5 flex justify-between">
              <div className="flex">
                <img src={imgR} alt="" />
                <p>Rabit Food & Accessories </p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
          </div>
        </div>
        <div className="banner flex bg-emerald-50">
          <div className="banner-text">
            <img className="new" src={imgN} alt="" />
            <h1 className="text-5xl font-bold banner-h">Pet Food Shop</h1>
            <p className="banner-p">Keeping Your Pets Healthy and Happy</p>
            <div className="flex">
              <Link>
                <button className="btn-shop text-2xl font-semibold">
                  Shop Now
                </button>
              </Link>
              <img className="btn-arrow" src={imgAr} alt="" />
            </div>
            <img className="finger" src={imgFin} alt="" />
          </div>
          <div>
            <div className="flex">
              <img className="finger-a" src={imgFing} alt="" />
              <img className="bone" src={imgBon} alt="" />
            </div>
            <div>
              <div className="relative">
                <div className="flex">
                  <img className="color-b1" src={imgCol2} alt="" />
                  <img className="color-b2" src={imgCol3} alt="" />
                </div>
                <div className="flex justify-between">
                  <img className="color-b3" src={imgCol} alt="" />
                  <img className="color-b4" src={imgCol4} alt="" />
                </div>
                <div>
                  <img className="shed" src={imgShed} alt="" />
                </div>
              </div>
              <div className="absolute flex top-80 right-280">
                <img className="arrow-l" src={imgArr} alt="" />
                <img className="arrow-r" src={imgArr2} alt="" />
              </div>
              <div>
                <div className="flex">
                  <img className="pack-a z-20" src={imgPcckA} alt="" />
                  <img className="pack-b z-10" src={imgPcckB} alt="" />
                </div>
                <div className="flex">
                  <img className="pack-c z-40" src={imgPcckC} alt="" />
                  <img className="pack-d z-30" src={imgPcckD} alt="" />
                  <img className="pack-e z-40" src={imgPcckE} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Cat Food */}
      <section className="Cat-Foods">
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
                        <FontAwesomeIcon className="star pr-1" icon={faStar} />
                        <FontAwesomeIcon className="star pr-1" icon={faStar} />
                        <FontAwesomeIcon className="star pr-1" icon={faStar} />
                        <FontAwesomeIcon className="star pr-1" icon={faStar} />
                        <FontAwesomeIcon className="star pr-1" icon={faStar} />
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
                    <h1 className="text-xl font-semibold py-1">Kit Cat Food</h1>
                    <h2 className="text-medium pb-1">
                      Mini Fish Medley (2 Kg)
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
              </Link>
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
      {/* Dog Food */}
      <section className="dog-Foods mb-40">
        <div className="md:text-center">
          <h1 className="text-3xl font-semibold dog-food-text">Dog Foods</h1>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
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
                  <Link className="btn-dog px-3 py-3">Add To Cart </Link>
                </div>
              </div>
              {/* product-end */}
            </Slider>
            <Link>
              <u>
                <p className="lg:text-end dog-see-all mt-8 pr-11">See all</p>
              </u>
            </Link>
          </div>
          {/* slider end */}
        </div>
      </section>
      {/* bannar */}
      <section>
        <CatAndDog></CatAndDog>
      </section>
      {/* clearance Sale */}
      <ClearanceSale></ClearanceSale>
      {/* Litters */}
      <Litters></Litters>
      {/* Logo */}
      <BrandLogo></BrandLogo>
    </>
  );
};

export default Home;
