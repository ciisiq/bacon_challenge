import React from "react";

export default function Image({ props }) {
  return (
    <div>
      <p>Your new bacon is: </p>
      <img alt="bacon" src={props}></img>
    </div>
  );
}
