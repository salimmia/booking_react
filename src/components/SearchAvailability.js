import React from "react";

export default function SearchAvailability() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h1 className="mt-3">Search for Availability</h1>

          <form
            action="/search-availability"
            method="post"
            novalidate
            className="needs-validation"
          >
            {/* <input type="hidden" name="csrf_token" value="{{.CSRFToken}}" /> */}
            <div className="row">
              <div className="col">
                <div className="row" id="reservation-dates">
                  <div className="col-md-6">
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="start"
                      placeholder="Arrival"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      required
                      className="form-control"
                      type="text"
                      name="end"
                      placeholder="Departure"
                    />
                  </div>
                </div>
              </div>
            </div>

            <hr />

            <button type="submit" className="btn btn-primary">
              Search Availability
            </button>
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}
