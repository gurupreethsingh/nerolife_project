import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-body-secondary text-dark p-5">
      <div className="d-flex justify-content-evenly flex-wrap">
        <div className="text-center">
          <h5 className=" border-bottom border-warning">Address</h5>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                COMPANY NAME : NEROLIFE NETWORKS PVT. LTD.
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                COMPANY ADDRESS : #17, KIRLOSKAR LAYOUT,
                <br />
                BANGALORE 560073 KARNATAKA, INDIA
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                Phone - (+91)-9740619310
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                Email - NEROLIFEEXCLUSIVENETWORKS@GMAIL.COM
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h5 className=" border-bottom border-warning">WebLinks</h5>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/Events">
                Events
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h5 className=" border-bottom border-warning">Social</h5>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="https://www.facebook.com"
                target="_blank"
              >
                <FaFacebook />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="https://www.linkedin.com"
                target="_blank"
              >
                <FaLinkedin />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="https://instagram.com"
                target="_blank"
              >
                <FaInstagramSquare />
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link text-dark"
                to="https://www.twitter.com"
                target="_blank"
              >
                <FaTwitter />
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h5 className=" border-bottom border-warning">Company Details</h5>
          <ul className="nav flex-column nav-underline">
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/termsandconditions">
                Terms & Conditions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/privacy">
                Privacy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark" to="/companyprofile">
                Company Profile
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <small className="d-flex justify-content-between p-5">
        <Link
          to="https://www.ecoders.in"
          target="_blank"
          className="text-warning"
        >
          &copy; Nerolife, POWERED BY NIGHTCUBE SYSTEMS
        </Link>
        <Link
          to="https://www.ecoders.in"
          target="_blank"
          className="text-warning"
        >
          Developed And Maintained by Ecoders
        </Link>
      </small>
    </footer>
  );
};

export default Footer;
