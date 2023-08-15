import React, { useEffect, useState } from "react";

export default function ChooseRoom() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`http://localhost:8080/search-availability`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Choose a Room</h1>

            <ul>
              {rooms.map((room) => (
                <p>
                  {room.room_name}
                  {room.created_at}
                  {room.updated_at}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
