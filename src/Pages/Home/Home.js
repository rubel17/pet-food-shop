import React, { useContext } from "react";
import "./Home.css";
import CatAndDog from "./CatAndDog/CatAndDog";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import imgC from "../../assets/image/cat 1.png";
import imgD from "../../assets/image/dog 1.png";
import imgL from "../../assets/image/litter-box 1.png";
import imgT from "../../assets/image/dog-toy 1.png";
import imgH from "../../assets/image/beauty-saloon 1.png";
import imgA from "../../assets/image/Accessories.png";
import imgF from "../../assets/image/fish 1.png";
import imgB from "../../assets/image/parrot 1.png";
import imgR from "../../assets/image/rabbit 1.png";
import imgN from "../../assets/image/new1.png";
import imgAr from "../../assets/image/Arrow_rr.png";
import imgFin from "../../assets/image/Group.png";
import pawPrint from "../../assets/image/pawprint (1) 3.png";
import imgBon from "../../assets/image/Highlight 24.png";
import bonePic from "../../assets/image/bone 3.png";
import imgCol from "../../assets/image/Blob Shape.png";
import imgCol2 from "../../assets/image/Blob Shape (1).png";
import imgCol3 from "../../assets/image/neeeeeeee.png";
import imgCol4 from "../../assets/image/Blob Shape (3).png";
import imgArr from "../../assets/image/Hight lightnew.png";
import imgShed from "../../assets/image/Ellipse 4.png";
import imgPcckA from "../../assets/image/pack-a.png";
import imgPcckB from "../../assets/image/pack-b.png";
import imgPcckC from "../../assets/image/pack-c.png";
import imgPcckD from "../../assets/image/pack-d.png";
import imgPcckE from "../../assets/image/pack-e.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ClearanceSale from "./ClearanceSale/ClearanceSale";
import Litters from "./Litters/Litters";
import BrandLogo from "./BrandLogo/BrandLogo";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import CatFoodDetail from "../CatFoodDetail/CatFoodDetail";
import { useQuery } from "@tanstack/react-query";
import DogFoodDetail from "../DogFoodDetail/DogFoodDetail";

const Home = () => {
  const { data: catFood = [] } = useQuery({
    queryKey: ["catFood"],
    queryFn: () =>
      fetch("https://y-livid-three.vercel.app/allProduct/catFood").then((res) =>
        res.json()
      ),
  });

  const { data: dogFood = [] } = useQuery({
    queryKey: ["allProduct/dogFood"],
    queryFn: () =>
      fetch("https://y-livid-three.vercel.app/allproduct/dogFood").then((res) =>
        res.json()
      ),
  });
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="text-center lg:m-56">
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

  return (
    <>
      <section className="lg:flex justify-center">
        <div className="category px-2">
          <div className="lg:w-96 grid grid-cols-1 divide-y">
            <Link
              to="/allProduct/catFood"
              className="Items1  py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgC} alt="" />
                <p>Cat Food</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/dogFood"
              className="Items2 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgD} alt="" />
                <p>Dog Food</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/litters"
              className="Items3  py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgL} alt="" />
                <p>Litter</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/toys"
              className="Items2 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgT} alt="" />
                <p>Toys</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/care&Health"
              className="Items3 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgH} alt="" />
                <p>Care & Health</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/accessories"
              className="Items2 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgA} alt="" />
                <p>Accessories</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/fishFood&Accessories"
              className="Items3 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgF} alt="" />
                <p>Fish Food & Accessories</p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/birdFood&Accessories"
              className="Items2 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgB} alt="" />
                <p>Bird Food & Accessories </p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
            <Link
              to="/allProduct/rabitFood&Accessories"
              className="Items4 py-5 flex justify-between"
            >
              <div className="flex">
                <img src={imgR} alt="" />
                <p>Rabit Food & Accessories </p>
              </div>
              <FontAwesomeIcon className="arrow mr-5" icon={faAngleRight} />
            </Link>
          </div>
        </div>
        <div className="banner hidden lg:inline-flex">
          <div className="banner-text">
            <img className="new" src={imgN} alt="" />
            <h1 className="text-5xl font-bold banner-h">Pet Food Shop</h1>
            <p className="banner-p">Keeping Your Pets Healthy and Happy</p>
            <div className="flex">
              <Link to="">
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
              <img className="finger-a" src={imgFin} alt="" />
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
              <div className="absolute top-80 right-280">
                <img src={imgArr} alt="" />
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
      {/* cat food */}
      <section className="lg:mt-32 mt-12">
        <div className="text-center">
          <h1 className="text-3xl font-semibold cat-food-text">Cat Foods</h1>
          <p className="text-2xl font-medium cat-paragraph">
            Best cat foods for your precious cat
          </p>
        </div>
        <div className="lg:flex lg:mt-16 mt-8">
          <div className="cat-finger hidden lg:inline-flex">
            <img className="cat-finger-img" src={pawPrint} alt="" />
          </div>

          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <div>
              <Slider {...settings}>
                {catFood.map((FoodList) => (
                  <CatFoodDetail
                    key={FoodList._id}
                    FoodList={FoodList}
                  ></CatFoodDetail>
                ))}
              </Slider>
            </div>
            <Link to="/allProduct/catFood">
              <u>
                <p className="lg:text-end cat-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>

          <div className="cat-bone hidden lg:inline-flex">
            <img className="cat-bone-img" src={bonePic} alt="" />
          </div>
        </div>
      </section>
      {/* dog food */}
      <section className="-mt-32 2xl:-mt-80">
        <div className="text-center">
          <h1 className="text-3xl font-semibold dog-food-text">Dog Foods</h1>
          <p className="text-2xl font-medium dog-paragraph">
            Best dog foods for your precious dog
          </p>
        </div>
        <div className="lg:flex justify-center lg:mt-16 mt-8">
          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <Slider {...settings}>
              {dogFood.map((dogFoodList) => (
                <DogFoodDetail
                  key={dogFoodList._id}
                  dogFoodList={dogFoodList}
                ></DogFoodDetail>
              ))}
            </Slider>
            <Link to="/allProduct/dogFood">
              <u>
                <p className="lg:text-end dog-see-all lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>
        </div>
      </section>

      {/* offer section */}
      <section className="-mt-32 2xl:-mt-80">
        <CatAndDog></CatAndDog>
      </section>

      <section className="-mt-32 xl:mt-32">
        <ClearanceSale></ClearanceSale>
      </section>

      <section className="mt-60">
        <Litters></Litters>
      </section>

      <BrandLogo></BrandLogo>
    </>
  );
};

export default Home;
