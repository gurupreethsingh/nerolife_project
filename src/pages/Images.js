import React from "react";
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.gif";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.gif";
import five from "../assets/images/five.jpg";

const Images = () => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src={one} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={two} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={two} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={two} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={three} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={four} class="card-img-top" alt="..." />
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src={five} class="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
