import React from "react";

export default function SearchAvailability() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <h1 class="mt-3">Search for Availability</h1>

          <form
            action="/search-availability"
            method="post"
            novalidate
            class="needs-validation"
          >
            {/* <input type="hidden" name="csrf_token" value="{{.CSRFToken}}" /> */}
            <div class="row">
              <div class="col">
                <div class="row" id="reservation-dates">
                  <div class="col-md-6">
                    <input
                      required
                      class="form-control"
                      type="text"
                      name="start"
                      placeholder="Arrival"
                    />
                  </div>
                  <div class="col-md-6">
                    <input
                      required
                      class="form-control"
                      type="text"
                      name="end"
                      placeholder="Departure"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <button type="submit" class="btn btn-primary">
              Search Availability
            </button>
          </form>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  );
}
