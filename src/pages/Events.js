import React from "react";
import one from "../assets/images/one.jpg";
import two from "../assets/images/two.gif";
import three from "../assets/images/three.jpg";
import four from "../assets/images/four.gif";
import five from "../assets/images/five.jpg";
import "./Events.css";

const Events = () => {
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between">
        <div className="eventleft">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                className="active"
                aria-current="true"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                className="active"
                aria-current="true"
                aria-label="Slide 3"
              ></button>

              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                className="active"
                aria-current="true"
                aria-label="Slide 4"
              ></button>

              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                className="active"
                aria-current="true"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active card"
                data-bs-interval="2000"
              >
                <img src={one} className="d-block w-100" alt="one" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={two} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={three} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={four} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fourth slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={five} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Fifth slide label</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="eventright">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>

              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>

              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="4"
                aria-label="Slide 5"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={one} className="d-block w-100" alt="one" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>First slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={two} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Second slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={three} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={four} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                </div>
              </div>
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={five} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Third slide label</h5>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
