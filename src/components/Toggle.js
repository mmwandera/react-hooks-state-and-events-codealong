import React from "react";
import { useState } from "react";

function Toggle() {
 const [isOn, setIsOn] = useState(false);

 function handleChange () {
  //  setIsOn(!isOn);
  setIsOn((isOn) => !isOn);
 }

 const color = isOn ? "red" : "white";

  return (
    <button style={{ background: color }} onClick={handleChange} >{isOn? "ON" : "OFF"}</button>
  );
}

export default Toggle;
