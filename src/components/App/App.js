import React, { useState } from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Input from "../Input/Input";
import "./App.css";

function App() {
  const [width, setwidth] = useState();
  const [height, setHeight] = useState();

  async function handleClick(newBacon) {
    const response = await fetch(`https://baconmockup.com/300/200/bacon`);
    const data = await response.json();
    JSON.parse(newBacon);
    console.log(data);
    newBacon = data;
  }

  return (
    <div className="App">
      <h1>The best bacon's pictures 🥓🥓</h1>
      <h3> Please search from any size eg. 200 x 200 </h3>
      <Input />
      <Button click={() => handleClick()} />
      <Image />
    </div>
  );
}

export default App;
