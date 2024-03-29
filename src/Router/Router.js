import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CatFood from "../Pages/CatFood/CatFood";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Home from "../Pages/Home/Home";
import Offer from "../Pages/Offer/Offer";
import Shop from "../Pages/Shop/Shop";
import Reviews from "../Pages/FoodDetails/Reviews/Reviews";
import AdditionalInfo from "../Pages/FoodDetails/AdditionalInfo/AdditionalInfo";
import Shipping from "../Pages/FoodDetails/Shipping/Shipping";
import DogFood from "../Pages/DogFood/DogFood";
import Products from "../Pages/Products/Products";
import AllProductDetail from "../Pages/AllProductDetail/AllProductDetail";
import CheckOut from "../Pages/CheckOut/CheckOut";
import Description from "../Pages/FoodDetails/Description/Description";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
      {
        path: "/allProduct/catFood",
        element: <CatFood></CatFood>,
      },
      {
        path: "/allProduct/dogFood",
        element: <DogFood></DogFood>,
      },
      {
        path: "/allProductDetail",
        element: <AllProductDetail></AllProductDetail>,
      },
      {
        path: "/allProduct/:category",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`https://y-rubelrk.vercel.app/allProduct/${params.category}`),
      },
      {
        path: "/foodDetails/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) =>
          fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
        children: [
          {
            path: "/foodDetails/:id",
            element: <Description></Description>,
            loader: ({ params }) =>
              fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/foodDetails/:id/reviews",
            element: <Reviews></Reviews>,
            loader: ({ params }) =>
              fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
          {
            path: "/foodDetails/:id/shipping",
            element: <Shipping></Shipping>,
          },
          {
            path: "/foodDetails/:id/additionalInfo",
            element: <AdditionalInfo></AdditionalInfo>,
            loader: ({ params }) =>
              fetch(`https://y-rubelrk.vercel.app/productDetails/${params.id}`),
          },
        ],
      },
      {
        path: "/checkOut",
        element: <CheckOut></CheckOut>,
      },
    ],
  },

  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
