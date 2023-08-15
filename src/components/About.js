import { useState, useEffect } from "react";

export default function About() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestOptions = {
      method: "GET",
      headers: headers,
    };

    fetch(`http://localhost:8080/about`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>This is the testing page</h1>
          <table className="table">
            <thead>
              <tr>
                <th>RoomName</th>
                <th>Created At</th>
                <th>Updated At</th>
              </tr>
            </thead>
            <tbody>
              {rooms.map((room) => (
                <tr key={room.id}>
                  <td>{room.room_name}</td>
                  <td>{room.created_at}</td>
                  <td>{room.updated_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
