import React from "react";
import "./CartShimmerEffect.css";
import { Shimmer } from "react-shimmer";

const CartShimmerEffect = () => {
  return (
    <>
      <div className="mx-2">
        <div className="single-product-cat  w-full">
          <div className="w-11/12 md:mt-5">
            <Shimmer className="rounded-lg" width={300} height={299} />
          </div>
          <div className="mt-2 md:mt-8 w-11/12">
            <Shimmer className="mt-1 md:mt-5" width="95%" height={20} />
            <Shimmer className="mt-1 md:mt-5" width="60%" height={14} />
            <Shimmer className="mt-1 md:mt-5" width="45%" height={14} />
            <Shimmer className="mt-1 md:mt-5" width="90%" height={14} />
            <Shimmer
              className="mt-5 addToCart-btn-shimmer"
              width="50%"
              height={45}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartShimmerEffect;
