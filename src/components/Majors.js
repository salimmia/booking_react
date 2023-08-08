import React from "react";
import MajorImage from "./../images/marjors-suite.png";

export default function Majors() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            src={MajorImage}
            class="img-fluid img-thumbnail mx-auto d-block room-image"
            alt="room image"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="text-center mt-4">Major's Suite</h1>
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

      <div class="row">
        <div class="col text-center">
          <a id="check-availability-button" href="#!" class="btn btn-success">
            Check Availability
          </a>
        </div>
      </div>
    </div>
  );
}
