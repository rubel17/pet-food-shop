import React from "react";
import "./AdditionalInfo.css";
import { useLoaderData } from "react-router-dom";

const AdditionalInfo = () => {
  const productDetail = useLoaderData({});
  return (
    <>
      <div className=" ">
        <div>
          <div className="flex justify-between mx-20 md:mx-60 xl:mx-80 2xl:mx-96 border-b-2">
            <p className="brand my-3">Brand : </p>
            <p className="uppercase  my-4"> {productDetail?.category}</p>
          </div>

          <div className="flex  justify-between mx-20 md:mx-60 xl:mx-80 2xl:mx-96 border-b-2">
            <p className="brand my-3">Weight :</p>
            <p className="my-4">{productDetail?.weight}</p>
          </div>
          <div className="flex justify-between mx-20 md:mx-60 xl:mx-80 2xl:mx-96">
            <p className="brand my-3">Flavour :</p>
            <p className="my-4"> {productDetail?.name}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdditionalInfo;
