import React from "react";
import "./AdditionalInfo.css";

const AdditionalInfo = () => {
  return (
    <div>
      <div className="flex justify-around additional">
        <p className="brand">Brand : </p>
        <p>Brit</p>
      </div>
      <div className="flex justify-around additional">
        <p className="brand">Weight :</p>
        <p>1.5 kg</p>
      </div>
      <div className="flex justify-around additional">
        <p className="brand">Flavour :</p>
        <p>Chicken</p>
      </div>
    </div>
  );
};

export default AdditionalInfo;
