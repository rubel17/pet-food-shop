import React from "react";
import "./Litters.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useQuery } from "@tanstack/react-query";
import LittersDetail from "../../LittersDetail/LittersDetail";
const Litters = () => {
  const { data: litters = [] } = useQuery({
    queryKey: ["litters"],
    queryFn: () =>
      fetch("https://y-livid-three.vercel.app/allProduct/litters").then((res) =>
        res.json()
      ),
  });
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
      <section>
        <div className="text-center">
          <h1 className="text-3xl font-semibold litters-text">Litters</h1>
          <p className="text-2xl font-medium litters-paragraph">
            Our Trending Products
          </p>
        </div>

        <div className="lg:flex justify-center lg:mt-16 mt-8">
          <div className="pl-10 pr-7 lg:pl-28 lg:pr-28 lg:w-10/12 h-screen">
            <div>
              <Slider {...settings}>
                {litters.map((littersList) => (
                  <LittersDetail
                    key={littersList._id}
                    littersList={littersList}
                  ></LittersDetail>
                ))}
              </Slider>
            </div>
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
