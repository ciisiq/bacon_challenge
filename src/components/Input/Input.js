import React from "react";
import "./input.css";

function Input({ onChangeWidth, onChangeHight }) {
  return (
    <div className="search">
      <div>
        <h4>🥓Width size:</h4>
        <input
          type="text"
          name="width"
          placeholder="Width here"
          onChange={onChangeWidth}
        />
      </div>
      <div>
        <h4>🥓Height size:</h4>
        <input
          type="text"
          name="height"
          placeholder="Height here"
          onChange={onChangeHight}
        />
      </div>
    </div>
  );
}

export default Input;
