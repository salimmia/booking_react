import React, { useState } from "react";

const data = {
  FirstName: "Muhammad",
  LastName: "Selim",
  RoomName: "Genelars Quarters",
  Arrival: "2023-03-02",
  Departure: "2023-05-01",
  Email: "salimmia3745@gmail.com",
  Phone: "01521435652",
};
export default function ReservationSummary() {
  const [reservationData, setReservationData] = useState(data);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1 className="mt-5">Reservation Summary</h1>

          <hr />

          <table className="table table-striped">
            <thead></thead>
            <tbody>
              <tr>
                <td>Name:</td>
                <td>
                  {reservationData.FirstName} {reservationData.LastName}
                </td>
              </tr>
              <tr>
                <td>Room:</td>
                <td>{reservationData.RoomName}</td>
              </tr>
              <tr>
                <td>Arrival:</td>
                <td>{reservationData.Arrival}</td>
              </tr>
              <tr>
                <td>Departure:</td>
                <td>{reservationData.Departure}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{reservationData.Email}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{reservationData.Phone}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
