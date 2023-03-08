import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ClearanceSale from "../Pages/ClearanceSale/ClearanceSale";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Offer from "../Pages/Offer/Offer";
import Shop from "../Pages/Shop/Shop";

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
        element: <ClearanceSale></ClearanceSale>,
      },
      {
        path: "/offer",
        element: <Offer></Offer>,
      },
      // {
      //   path: "/login",
      //   element: <Login></Login>,
      // },
      //       {
      //         path: "/register",
      //         element: <Register></Register>,
      //       },
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
