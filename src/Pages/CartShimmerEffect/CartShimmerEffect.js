import React from "react";
import "./CartShimmerEffect.css";

const CartShimmerEffect = () => {
  return (
    <div className="mx-1 md:mx-5 -mb-0 lg:-mb-10 xl:-mb-6 2xl:-mb-20">
      <div className="single-product-cat  w-full">
        <div className="bg w-11/12 h-2/5 mt-5  rounded-lg"></div>
        <div className="mt-8 w-11/12">
          <div className="h-5 mt-3 bg"></div>
          <div className="h-3 mt-3 bg"></div>
          <div className="h-3 mt-3 bg"></div>
          <div className="h-3 mt-3 bg"></div>
          <div className="h-12 w-3/6  mt-4 bg addToCart-btn-shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default CartShimmerEffect;
