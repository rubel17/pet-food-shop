import React from "react";
import "./AllProductDetail.css";
import { Image, Shimmer } from "react-shimmer";

const AllProductDetail = () => {
  return (
    <div className="mx-1 md:mx-5 -mb-0 lg:-mb-10 xl:-mb-6 2xl:-mb-20">
      <div className="single-product-cat  w-full">
        <div className="w-11/12 mt-5">
          {/* <Image
            src="https://source.unsplash.com/random/300x299"
            fallback={<Shimmer width={300} height={299} />}
          /> */}
          <Shimmer className="rounded-lg" width={300} height={299} />
        </div>
        <div className="mt-8 w-11/12">
          <Shimmer className="mt-5" width="95%" height={20} />
          <Shimmer className="mt-5" width="60%" height={14} />
          <Shimmer className="mt-5" width="45%" height={14} />
          <Shimmer className="mt-5" width="90%" height={14} />
          <Shimmer
            className="mt-5 addToCart-btn-shimmer"
            width="50%"
            height={45}
          />
        </div>
      </div>
    </div>
  );
};

export default AllProductDetail;
