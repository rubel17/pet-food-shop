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
      fetch("http://localhost:4000/allProduct/litters").then((res) =>
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
              {litters.map((littersList) => (
                <LittersDetail
                  key={littersList._id}
                  littersList={littersList}
                ></LittersDetail>
              ))}
            </Slider>
            <Link to="/allProduct/litters">
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
