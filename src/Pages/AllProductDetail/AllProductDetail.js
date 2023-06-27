import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const AllProductDetail = ({ productDetail = {} }) => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div className="text-center m-56">
        <button className="btn btn-square loading"></button>
      </div>
    );
  }
  //   console.log(productDetail);
  const { name, Amount } = productDetail;
  console.log(name);
  return <div className="text-black">Amount:{Amount}</div>;
};

export default AllProductDetail;
