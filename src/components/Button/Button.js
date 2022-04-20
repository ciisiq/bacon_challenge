import React from "react";

function Button({ click }) {
  return (
    <>
      <button className="btn" onClick={click}>
        Get a Bacon
      </button>
    </>
  );
}

export default Button;
