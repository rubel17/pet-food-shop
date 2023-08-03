import React, { useContext } from "react";
import "./WishList.css";
import Delete from "../../../assets/image/delete.png";
import Love from "../../../assets/image/red-love.png";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const WishList = ({ wishModal, setWishModal }) => {
  const { user } = useContext(AuthContext);
  const { data: userWishList = [], refetch } = useQuery({
    queryKey: [`/myWishList`],
    queryFn: () =>
      fetch(`https://y-livid-three.vercel.app/myWishList/${user?.email}`).then(
        (res) => res.json()
      ),
  });

  //add to cart
  const handleAddToCart = (wishList) => {
    const email = user?.email;
    const productId = wishList?._id;
    const Amounts = parseInt(wishList?.Amounts);
    const name = wishList?.name;
    const weight = wishList?.weight;
    const img = wishList?.img;
    const value = 1;
    const addToCartList = {
      name,
      email,
      Amounts,
      weight,
      img,
      productId,
      value,
    };
    fetch(`https://y-livid-three.vercel.app/addToCart`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToCartList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Add To Cart Successful");
        }
      });
  };
  refetch();
  //delete to wish List
  const handleDeleteWishList = (id) => {
    fetch(`https://y-livid-three.vercel.app/removeToWishList/${id}`, {
      method: "DELETE",
      // headers: {
      //   authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Delete Successful");
          refetch();
        }
      });
  };
  refetch();

  return (
    <>
      {wishModal ? (
        <>
          <div className="flex justify-center items-center lg:justify-end lg:items-start overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div>
              <div className="border-0 register-pageA shadow-lg    w-full bg-white outline-none focus:outline-none">
                <div>
                  <div className=" px-8 pt-6 w-full">
                    <div className="flex mb-4  justify-between">
                      <h3 className="register-text text-4xl text-black font-semibold">
                        Wish List
                      </h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setWishModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                          x
                        </span>
                      </button>
                    </div>
                  </div>

                  {userWishList.map((wishList) => (
                    <section key={wishList._id}>
                      <div className="mb-5">
                        <div className="flex justify-between me-3 wish-shadow bg-white outline-none focus:outline-none wish-product">
                          <div>
                            <div className="flex">
                              <div className="wish-product-body">
                                <div className=" wish-product-body-img">
                                  <img src={wishList.img} alt="" />
                                </div>
                              </div>
                              <div className="wish-product-text">
                                <h1 className="text-xl font-semibold py-1">
                                  {wishList.name}
                                </h1>
                                <h3 className="text-medium font-semibold">
                                  {wishList.Amounts} Tk.
                                </h3>
                                <h2 className="text-medium">
                                  Flavor:{wishList.weight}
                                </h2>
                                <div
                                  onClick={() => handleAddToCart(wishList)}
                                  className=" text-lg  mt-2"
                                >
                                  <button className="btn-addToCart px-2 py-1">
                                    Add To Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="p-3">
                            <p>
                              <img src={Love} alt="" />
                            </p>
                            <button
                              onClick={() => handleDeleteWishList(wishList._id)}
                            >
                              <img className="mt-14" src={Delete} alt="" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default WishList;
