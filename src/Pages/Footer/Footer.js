import React from "react";
import "./Footer.css";
import {
  faEnvelope,
  faPhoneVolume,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import footers from "../../assets/image/Brand-Icon.png";
import footerLine from "../../assets/image/footer-line.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <>
      <footer className="footer xl:px-60 lg:px-20 px-10 mb-10">
        <div>
          <div className="flex">
            <img className="w-10 h-10" src={footers} alt="" />
            <p className="text-2xl font-semibold mt-2 pl-2">Petopia</p>
          </div>
          <p className="mt-6">
            It is a long established fact that a reader will <br /> be
            distracted by the readable content of a <br /> page when looking at
            its layout.
          </p>
          <div className="mt-2">
            <Link to="https://www.facebook.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5" icon={faFacebookF} />
            </Link>
            <Link to="https://www.linkedin.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5 ml-5" icon={faLinkedinIn} />
            </Link>
            <Link to="https://twitter.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5 ml-5" icon={faTwitter} />
            </Link>
            <Link to="https://www.instagram.com/" target="_blank">
              <FontAwesomeIcon className="md:mt-5 ml-5" icon={faInstagram} />
            </Link>
          </div>
        </div>
        <div>
          <span className="text-lg font-bold">Quick Link</span>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p className="py-3">
            <Link to="/shop">Shop</Link>
          </p>
          <p>
            <Link to="/blog">Blog</Link>
          </p>

          <p className="py-3">
            <Link to="/allProduct/clearanceSale">Clearance Sale</Link>
          </p>
          <p>
            <Link to="/offer">Offer</Link>
          </p>
        </div>
        <div>
          <span className="text-lg font-bold">Company</span>
          <p>About</p>
          <p className="py-4">Career</p>
          <p>Contact</p>
        </div>
        <div>
          <span className="text-lg font-bold">Contact</span>
          <p>There are many variations simply is dummy text.</p>
          <p type="email" className="pt-3">
            <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
            Rubelrk377@gmail.com
          </p>
          <p className="py-4">
            <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
            Orion IT,Khulna-9000.
          </p>
          <p>
            <FontAwesomeIcon className="mr-2" icon={faPhoneVolume} />
            +8801725207525
          </p>
        </div>
      </footer>
      <div className="flex justify-center">
        <img src={footerLine} alt="" />
      </div>
      <div className="flex justify-center pt-5 pb-6">
        <p>Copy right 2023. all rights reserved by Petopia</p>
      </div>
    </>
  );
};

export default Footer;
