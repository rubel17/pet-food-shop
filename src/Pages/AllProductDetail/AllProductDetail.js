import React from "react";
import "./AllProductDetail.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import pic from "../../assets/image/cat food.png";

const AllProductDetail = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="card ">
      <Carousel showDots={true} responsive={responsive}>
        <div className="w-60 card">
          <Link to={`/foodDetails/`}>
            <object>
              <div>
                <div>
                  <div>
                    <img src={pic} alt="" />
                    <Link>
                      <img alt="" />
                    </Link>
                  </div>
                </div>
                <div>
                  <h1>{/* {name} */} Name</h1>
                  <h2 className="text-medium pb-1">{/* {weight} */} weight</h2>
                  <h3 className="text-medium font-semibold">
                    {/* {Amount} */}Amount
                  </h3>

                  <div className="md:flex md:mb-1">
                    <div className="product-rating">
                      <div className="Stars">rating</div>
                    </div>
                    <h2>views</h2>
                  </div>

                  <Link className="addToCart-btn glow-on-hover text-lg">
                    Add To Cart
                  </Link>
                </div>
              </div>
            </object>
          </Link>
        </div>
      </Carousel>
    </div>
  );
};

export default AllProductDetail;
