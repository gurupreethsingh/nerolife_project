import React from "react";
import one from "../assets/images/one.jpg";
import three from "../assets/images/three.jpg";
import five from "../assets/images/five.jpg";
import { Link } from "react-router-dom";

const Threelogin = () => {
  return (
    <div>
      <div className="threelogin">
        <div class="row row-cols-1 row-cols-md-3 g-5 threelogindiv">
          <Link to="/userlogin">
            <div class="col">
              <div class="card h-100">
                <img src={one} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center">USER</h5>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/outletlogin">
            <div class="col">
              <div class="card h-100">
                <img src={three} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center">OUTLET</h5>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/artistlogin">
            <div class="col">
              <div class="card h-100">
                <img src={five} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title text-center">ARTIST</h5>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Threelogin;
