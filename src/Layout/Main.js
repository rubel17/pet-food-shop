import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";
import Header from "../Pages/Header/Header";
import Info from "../Pages/Info/Info";
const Main = () => {
  return (
    <div>
      <Header></Header>
      <Info></Info>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
