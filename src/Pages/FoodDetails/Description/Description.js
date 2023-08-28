import React from "react";
import checkCircle from "../../../assets/image/check-circle.png";
import { useLoaderData } from "react-router-dom";

const Description = () => {
  const productDetail = useLoaderData({});
  return (
    <div className="ml-5 lg:ml-80 mt-8">
      <h1 className="text-xl font-bold mb-6">
        Brit Adult <span className="uppercase"> {productDetail?.category}</span>{" "}
        Delicious chunks with chicken for adult
        <span className="uppercase"> {productDetail?.category}</span>
      </h1>
      <h3 className="text-xl font-bold mb-2">Composition</h3>
      <p className="mb-6">
        Brit Adult <span className="uppercase"> {productDetail?.category}</span>{" "}
        contains cereals, meat and animal derivatives (chicken 45%), vegetable
        protein extracts, oils and fats, derivatives of vegetable origin,
        yeasts, minerals
      </p>
      <h1 className="text-xl font-bold mb-2">Analytical Constituents</h1>
      <p className="uppercase mb-2 font-medium"> {productDetail?.name}</p>
      <p className="mb-6">
        protein 36.0%, fat content 12.0%, crude fibre 1.5%, crude ash 8%,
        calcium 1.3%, phosphorus 1.2%, taurine 0.3%
      </p>
      <h1 className="text-xl font-bold mb-4">Nutritional Additives</h1>

      <div className="flex mb-2">
        <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
        <p>vitamin A 30000 IU</p>
      </div>
      <div className="flex mb-2">
        <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
        <p>vitamin D3 1500 IU, vitamin E 150 mg</p>
      </div>
      <div className="flex mb-2">
        <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
        <p>3b103 (iron) 75 mg, 3b202 (iodine) 2 mg</p>
      </div>
      <div className="flex mb-2">
        <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
        <p>3b405 (copper) 10 mg</p>
      </div>
      <div className="flex mb-2">
        <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
        <p>3b502 (manganese) 86 mg</p>
      </div>
      <div className="flex mb-3">
        <img className="w-4 h-4 mr-2 mt-1" src={checkCircle} alt="" />
        <p>3b605 (zinc) 100 mg, 3b802 (selenium) 0.3 mg</p>
      </div>
      <p className="mb-3">Technological ADDITIVES antioxidants</p>
      <h1 className="text-xl font-bold mb-2">Sensory Additives</h1>
      <p>colourants</p>
    </div>
  );
};

export default Description;
