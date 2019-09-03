import React from "react";
import HueContext from "./HueContext";

function HueContextShow({ value, children }) {
  const hueData = HueContext.Consumer;
  return <div>{hueData.value}</div>;
}

export default HueContextShow;
