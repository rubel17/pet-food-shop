import React from "react";
import "./AdditionalInfo.css";
import { useLoaderData } from "react-router-dom";

const AdditionalInfo = () => {
  const productDetail = useLoaderData({});
  return (
    <div>
      <div className="flex justify-around additional">
        <p className="brand">Brand : </p>
        <p> {productDetail?.category}</p>
      </div>
      <div className="flex justify-around additional">
        <p className="brand">Weight :</p>
        <p>{productDetail?.weight}</p>
      </div>
      <div className="flex justify-around additional">
        <p className="brand">Flavour :</p>
        <p> {productDetail?.name}</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
