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
      <div>
        <div className="drawer drawer-end z-50">
          <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col items-center justify-center">
            {/* Page content here */}
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-5" className="drawer-overlay"></label>
            <ul className="menu w-80 md:w-96 lg:max-w-full 2xl:w-1/4 min-h-full bg-white text-black">
              <div className=" px-8 pt-6 w-full">
                <div className="flex mb-4  justify-between">
                  <h3 className="register-text text-3xl text-black font-semibold">
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
                              className="text-base md:text-lg  mt-2"
                            >
                              <button className="btn-addToCart px-2 py-1">
                                Add To Cart
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:p-3">
                        <p>
                          <img src={Love} alt="" />
                        </p>
                        <button
                          onClick={() => handleDeleteWishList(wishList._id)}
                        >
                          <img className="mt-20 md:mt-14" src={Delete} alt="" />
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default WishList;
