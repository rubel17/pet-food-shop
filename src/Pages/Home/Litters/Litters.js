import React from "react";
import "./Litters.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import LittersDetail from "../../LittersDetail/LittersDetail";
import CartShimmerEffect from "../../CartShimmerEffect/CartShimmerEffect";
const Litters = () => {
  const { data: litters = [] } = useQuery({
    queryKey: ["litters"],
    queryFn: () =>
      fetch("https://y-rubelrk.vercel.app/allProduct/litters").then((res) =>
        res.json()
      ),
  });
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    rows: 1,
    responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <>
      <section>
        <div className="text-center">
          <h1 className="text-5xl font-semibold">Litters</h1>
          <p className="text-base font-normal mt-2">Our Trending Products</p>
        </div>

        <div className="lg:flex justify-center lg:mt-16 mt-8">
          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 product-height">
            {litters.length === 0 ? (
              <Slider {...settings}>
                {Array.from({ length: 10 }).map((data, i) => (
                  <CartShimmerEffect key={i} />
                ))}
              </Slider>
            ) : (
              <Slider {...settings}>
                {litters.map((littersList) => (
                  <LittersDetail
                    key={littersList._id}
                    littersList={littersList}
                  ></LittersDetail>
                ))}
              </Slider>
            )}
            <Link to="/allProduct/litters">
              <u>
                <p className="lg:text-end dog-see-all -mt-6 lg:mt-8 lg:pr-11">
                  See all
                </p>
              </u>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Litters;
