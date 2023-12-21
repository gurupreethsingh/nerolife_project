import React from "react";
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.gif";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.gif";

const Artist = () => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <div className="card h-100">
            <img src={one} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={two} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={three} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src={four} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artist;
