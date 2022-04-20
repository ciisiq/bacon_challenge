import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Input from "../Input/Input";
import "./App.css";

// const url = `https://baconmockup.com/300/200/random/bacon`;

function App() {
  const [bacon, setBacon] = useState();
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const url = `https://baconmockup.com/${width}/${height}/random/bacon`;

  const handleWidth = (e) => {
    setWidth(e.target.value);
  };

  const handleHeight = (e) => {
    setHeight(e.target.value);
  };

  async function getBacon() {
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      const base64data = reader.result;
      setBacon(base64data);
    };
  }

  useEffect(() => {
    getBacon();
  }, []);

  return (
    <div className="App">
      <h1>The best bacon's pictures 🥓🥓</h1>
      <h3> Please search from any size eg. 200 x 200 </h3>
      <Input onChangeWidth={handleWidth} onChangeHight={handleHeight} />
      <Button click={() => getBacon()} />
      <Image props={bacon} />
    </div>
  );
}

export default App;
