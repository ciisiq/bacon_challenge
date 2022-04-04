import React from "react";

export default function Image({ bacon }) {
  return (
    <div>
      <p>Your new bacon is:</p>
      <img alt="bacon">{bacon}</img>
    </div>
  );
}
