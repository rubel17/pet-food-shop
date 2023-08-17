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
      <div className="flex justify-center pl-5 mb-12">
        <div className="main-footer lg:flex">
          <div className="mb-10 lg:ml-32  lg:w-1/3">
            <div className="flex">
              <img className="w-10 h-10" src={footers} alt="" />
              <p className="text-2xl font-semibold mt-2 pl-2">Petopia</p>
            </div>
            <p className="mt-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
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
          <div className="lg:ml-52 lg:flex lg:w-2/3">
            <div className="lg:w-1/3">
              <h1 className="font-semibold mb-8">Quick Link</h1>
              <p>
                <Link>Home</Link>
              </p>
              <p className="py-4">
                <Link>Shop</Link>
              </p>
              <p>
                <Link>Blog</Link>
              </p>

              <p className="py-4">
                <Link>Clearance Sale</Link>
              </p>
              <p>
                <Link>Offer</Link>
              </p>
            </div>
            <div className="my-10 lg:my-0 lg:-ml-16 lg:w-1/3">
              <h1 className="font-bold mb-8">Company</h1>
              <p>About</p>
              <p className="py-4">Career</p>
              <p>Contact</p>
            </div>
            <div className="lg:w-1/3 lg:-ml-16">
              <h1 className="font-bold mb-8">Contact</h1>
              <p>There are many variations simply is dummy text.</p>
              <p className="pt-3">
                <FontAwesomeIcon className="mr-2" icon={faEnvelope} />
                info@example.com
              </p>
              <p className="py-4">
                <FontAwesomeIcon className="mr-2" icon={faLocationDot} />
                6391 Elgin St. Celina
              </p>
              <p>
                <FontAwesomeIcon className="mr-2" icon={faPhoneVolume} />
                (629) 555-0129
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <img src={footerLine} alt="" />
      </div>
      <div className="flex justify-center pt-10 pb-6">
        <p>Copy right 2023. all rights reserved by Petopia</p>
      </div>
    </>
  );
};

export default Footer;
