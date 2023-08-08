import React from "react";
import { Link } from "react-router-dom";
import MajorImage from "./../images/marjors-suite.png";

export default function Majors() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img
            src={MajorImage}
            className="img-fluid img-thumbnail mx-auto d-block room-image"
            alt="room image"
          />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <h1 className="text-center mt-4">Major's Suite</h1>
          <p>
            Your home away form home, set on the majestic waters of the Atlantic
            Ocean, this will be a vacation to remember. Your home away form
            home, set on the majestic waters of the Atlantic Ocean, this will be
            a vacation to remember. Your home away form home, set on the
            majestic waters of the Atlantic Ocean, this will be a vacation to
            remember. Your home away form home, set on the majestic waters of
            the Atlantic Ocean, this will be a vacation to remember. Your home
            away form home, set on the majestic waters of the Atlantic Ocean,
            this will be a vacation to remember. Your home away form home, set
            on the majestic waters of the Atlantic Ocean, this will be a
            vacation to remember.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col text-center">
          <Link
            to={"#!"}
            id="check-availability-button"
            className="btn btn-success"
          >
            Check Availability
          </Link>
        </div>
      </div>
    </div>
  );
}
