import React from "react";

function Input() {
  return (
    <form>
      <label>
        🥓Width size:
        <input type="text" name="width" />
      </label>
      <label>
        🥓Height size:
        <input type="text" name="height" />
      </label>
    </form>
  );
}

export default Input;
