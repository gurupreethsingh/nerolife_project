import React from "react";
import { Link } from "react-router-dom";
import nerolife_logo from "../assets/images/nerolife_logo.png";
// D:\all_react_applications\nerolife_swetha\nerolife\src\assets\images\nerolife_logo.png

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-secondary ps-5 pe-5">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={nerolife_logo} alt="nerolife logo" width={128} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  aria-current="page"
                  to="/events"
                >
                  Events
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/outlets">
                  Outlets
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/artists">
                  Artists
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/nitecube">
                  Nitecube
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about">
                  About us
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/images">
                      Images
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/videos">
                      Videos
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <span class="navbar-text">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link class="nav-link" to="/threelogin">
                    <span className="btn btn-sm btn-outline-dark">login</span>
                  </Link>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
