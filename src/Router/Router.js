import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import CatFood from "../Pages/CatFood/CatFood";
import ClearancSale from "../Pages/ClearancSale/ClearancSale";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Home from "../Pages/Home/Home";
// import Login from "../Pages/Login/Login";
import Offer from "../Pages/Offer/Offer";
// import Register from "../Pages/Register/Register";
import Shop from "../Pages/Shop/Shop";
import Reviews from "../Pages/FoodDetails/Reviews/Reviews";
import AdditionalInfo from "../Pages/FoodDetails/AdditionalInfo/AdditionalInfo";
import Shipping from "../Pages/FoodDetails/Shipping/Shipping";

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
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/ClearanceSale",
        element: <ClearancSale></ClearancSale>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
      {
        path: "/catFood",
        element: <CatFood></CatFood>,
      },
      {
        path: "/foodDetails",
        element: <FoodDetails></FoodDetails>,
        children: [
          {
            path: "/foodDetails/reviews",
            element: <Reviews></Reviews>,
          },
          {
            path: "/foodDetails/shipping",
            element: <Shipping></Shipping>,
          },
          {
            path: "/foodDetails/additionalInfo",
            element: <AdditionalInfo></AdditionalInfo>,
          },
        ],
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      // {
      //   path: "/register",
      //   element: <Register></Register>,
      // },
      //       {
      //         path: "/allProduct",
      //         element: <AllProduct></AllProduct>,
      //       },
      //       {
      //         path: "/allProduct/:Brand",
      //         element: (
      //           <PrivateRoute>
      //             <ProductCategoriesDetails></ProductCategoriesDetails>
      //           </PrivateRoute>
      //         ),
      //         loader: ({ params }) =>
      //           fetch(`${process.env.REACT_APP_API}/AllProduct/${params.Brand}`),
      //       },
      //       {
      //         path: "/ProductBooking/:id",
      //         element: (
      //           <PrivateRoute>
      //             <ProductBooking></ProductBooking>
      //           </PrivateRoute>
      //         ),
      //         loader: ({ params }) =>
      //           fetch(`${process.env.REACT_APP_API}/ProductBooking/${params.id}`),
      //       },
      //     ],
      //   },
      //   {
      //     path: "/dashBoard",
      //     element: (
      //       <PrivateRoute>
      //         <DashBoardLayout></DashBoardLayout>
      //       </PrivateRoute>
      //     ),
      //     children: [
      //       {
      //         path: "/dashBoard",
      //         element: (
      //           <PrivateRoute>
      //             <DashBoard></DashBoard>
      //           </PrivateRoute>
      //         ),
      //       },
      //       {
      //         path: "/dashBoard/myOrder",
      //         element: <MyBookings></MyBookings>,
      //       },
      //       {
      //         path: "/dashBoard/allUser/Buyer",
      //         element: (
      //           <AdminRoute>
      //             <AllUser></AllUser>
      //           </AdminRoute>
      //         ),
      //       },
      //       {
      //         path: "/dashBoard/allUser/Seller",
      //         element: (
      //           <AdminRoute>
      //             <AllSeller></AllSeller>
      //           </AdminRoute>
      //         ),
      //       },
      //       {
      //         path: "/dashBoard/addProduct",
      //         element: <AddProduct></AddProduct>,
      //       },
      //       {
      //         path: "/dashBoard/myProduct",
      //         element: <MyProduct></MyProduct>,
      //       },
      //       {
      //         path: "/dashBoard/reportItem",
      //         element: (
      //           <AdminRoute>
      //             <ReportItems></ReportItems>
      //           </AdminRoute>
      //         ),
      //       },
      //       {
      //         path: "/dashBoard/payment/:id",
      //         element: <Payment></Payment>,
      //         loader: ({ params }) =>
      //           fetch(`${process.env.REACT_APP_API}/bookingData/${params.id}`),
      //       },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
