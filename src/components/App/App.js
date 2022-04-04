import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import Image from "../Image/Image";
import Input from "../Input/Input";
import "./App.css";

const url = "https://baconmockup.com/300/200/";

function App() {
  // const [width, setwidth] = useState();
  // const [height, setHeight] = useState();
  const [bacon, setBacon] = useState();

  async function getBacon() {
    const response = await fetch(url);
    const imageBlob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(imageBlob);
    reader.onloadend = () => {
      const base64data = reader.result;
      setBacon(base64data);
      console.log(base64data);
    };

    // const data = await response.json();
    // JSON.parse(newBacon);
    // console.log(data);
    // newBacon = data;
  }

  useEffect(() => {
    getBacon();
  }, []);

  return (
    <div className="App">
      <h1>The best bacon's pictures 🥓🥓</h1>
      <h3> Please search from any size eg. 200 x 200 </h3>
      <Input />
      <Button click={() => getBacon()} />
      <Image src={bacon} />
    </div>
  );
}

export default App;
