import React from "react";
import "./Footer.css";
import footers from "../../assets/image/Brand-Icon.png";
import fb from "../../assets/image/fb.png";
import linkedin from "../../assets/image/lindin.png";
import twitter from "../../assets/image/twi.png";
import instagram from "../../assets/image/inesta.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mt-32">
      <div className="lg:flex">
        <div className="w-1/2 ml-5 lg:ml-80">
          <img className="footer-img" src={footers} alt="" />
          <p className="footerLeft-p">
            Lorem Ipsum is simply dummy text of the printing and
            <br />
            typesetting industry. Lorem Ipsum has been the industry's
            <br />
            standard dummy text
          </p>
          <div className="flex">
            <Link to="www.facebook.com" target="_blank">
              <img className="facebook px-3 py-2 mr-4" src={fb} alt="" />
            </Link>
            <Link>
              <img className="linkedin px-2 py-2 mr-4" src={linkedin} alt="" />
            </Link>
            <Link>
              <img className="twitter px-2 py-2 mr-4" src={twitter} alt="" />
            </Link>
            <Link>
              <img
                className="instagram px-2 py-2 mr-4"
                src={instagram}
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <div className="lg:flex ml-5 md:ml-0">
            <div className="w-1/2">
              <p className="footerR-Quick mb-2 mt-10 md:mt-0">Quick Link</p>
              <p className="mb-3">
                <Link to="/">Home</Link>
              </p>
              <p className="mb-3">
                <Link to="/shop">Shop</Link>
              </p>
              <p className="mb-3">
                <Link to="/blog">Blog</Link>
              </p>
              <p className="mb-3">
                <Link to="/clearanceSale">Clearance Sale</Link>
              </p>
              <p>
                <Link to="/offer">Offer</Link>
              </p>
            </div>
            <div className="lg:w-1/2">
              <p className="footerR-Quick mb-4 mt-10 md:mt-0">Contact Us</p>
              <input
                className="footer-input py-2 px-16"
                type="text"
                placeholder="Full Name"
              />
              <input
                className="footer-input py-2 px-16"
                type="text"
                placeholder="Email"
              />
              <input
                className="footer-input2  py-14 px-16"
                type="text"
                placeholder="Write message..."
              />
              <br />
              <Link className="btn-SM px-3 py-2 lg:px-7 lg:py-3">
                Send Message
              </Link>
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-32 bg-black text-white py-3">
        Copy right 2023. all rights reserved by Paws and Claws
      </p>
    </div>
  );
};

export default Footer;
