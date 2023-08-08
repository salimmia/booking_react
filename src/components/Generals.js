import React from "react";
import GenelarsImage from "./../images/generals-quarters.png";

export default function Generals() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            src={GenelarsImage}
            class="img-fluid img-thumbnail mx-auto d-block room-image"
            alt="room image"
          />
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h1 class="text-center mt-4">General's Quarters</h1>
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