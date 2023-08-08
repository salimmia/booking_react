import React from "react";
import Woman from "./../images/woman-laptop.png";
import OutsideImage from "./../images/outside.png";
import TrayImage from "./../images/tray.png";

export default function Home() {
  return (
    <>
      <div id="main-carousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#main-carousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#main-carousel" data-slide-to="1"></li>
          <li data-target="#main-carousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Woman} className="d-block w-100" alt="woman laptop" />
            <div className="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={OutsideImage} alt="outside" />

            <div className="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={TrayImage} alt="tray" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center mt-4">
              Welcome to Fort Smythe Bed and Breakfast
            </h1>
            <p>
              Your home away form home, set on the majestic waters of the
              Atlantic Ocean, this will be a vacation to remember. Your home
              away form home, set on the majestic waters of the Atlantic Ocean,
              this will be a vacation to remember. Your home away form home, set
              on the majestic waters of the Atlantic Ocean, this will be a
              vacation to remember. Your home away form home, set on the
              majestic waters of the Atlantic Ocean, this will be a vacation to
              remember. Your home away form home, set on the majestic waters of
              the Atlantic Ocean, this will be a vacation to remember. Your home
              away form home, set on the majestic waters of the Atlantic Ocean,
              this will be a vacation to remember.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <a href="/search-availability" className="btn btn-success">
              Make Reservation Now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
