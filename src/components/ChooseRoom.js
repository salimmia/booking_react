import React from "react";

export default function ChooseRoom() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Choose a Room</h1>

            {/* {{$rooms := index .Data "rooms"}} */}
            <ul>
              {/* {{range $rooms}}
                        <li><a href = "/choose-room/{{.ID}}">{{.RoomName}}</a> </li>
                    {{end}} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
