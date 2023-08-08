import React from "react";

export default function MakeReservation() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-3">Make Reservation</h1>
          {/* {{$res := index .Data "reservation"}} */}

          <p>
            <strong>Reservation Details</strong>
            <br />
            Room: <br />
            Arrible: <br />
            Departure:
          </p>

          <form
            method="post"
            action="/make-reservation"
            className=""
            novalidate
          >
            {/* <input type="hidden" name="csrf_token" value="{{.CSRFToken}}">
                    <input type="hidden" name="start_date" value="{{index .StringMap "start_date"}}">
                    <input type="hidden" name="end_date" value="{{index .StringMap "end_date"}}">
                    <input type = "hidden" name = "room_id" value = "{{$res.RoomID}}"> */}

            <div className="form-group mt-3">
              <label for="first_name">First Name:</label>
              {/* {{with .Form.Errors.Get "first_name"}}
                            <label className="text-danger">{{.}}</label>
                        {{end}}
                        <input className="form-control {{with .Form.Errors.Get "first_name"}} is-invalid {{end}}" */}
              {/* id="first_name" autocomplete="off" type='text'
                               name='first_name' value="{{$res.FirstName}}" required> */}
            </div>

            <div className="form-group">
              <label for="last_name">Last Name:</label>
              {/* {{with .Form.Errors.Get "last_name"}}
                            <label className="text-danger">{{.}}</label>
                        {{end}}
                        <input className="form-control {{with .Form.Errors.Get "last_name"}} is-invalid {{end}}"
                               id="last_name" autocomplete="off" type='text'
                               name='last_name' value="{{$res.LastName}}" required> */}
            </div>

            <div className="form-group">
              <label for="email">Email:</label>
              {/* {{with .Form.Errors.Get "email"}}
                            <label className="text-danger">{{.}}</label>
                        {{end}}
                        <input className="form-control {{with .Form.Errors.Get "email"}} is-invalid {{end}}" id="email"
                               autocomplete="off" type='email'
                               name='email' value="{{$res.Email}}" required> */}
            </div>

            <div className="form-group">
              <label for="phone">Phone:</label>
              {/* {{with .Form.Errors.Get "phone"}} */}
              {/* <label className="text-danger">{{.}}</label>
                        {{end}}
                        <input className="form-control {{with .Form.Errors.Get "phone"}} is-invalid {{end}}" id="phone"
                               autocomplete="off" type='email'
                               name='phone' value="{{$res.Phone}}" required> */}
            </div>

            <hr />
            <input
              type="submit"
              className="btn btn-primary"
              value="Make Reservation"
            />
          </form>
        </div>
      </div>
    </div>
  );
}
