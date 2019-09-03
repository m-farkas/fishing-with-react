import React from "react";
import HueContext from "./HueContext";

function HueContextProvider({ value, children }) {
  return <HueContext.Provider value={value}>{children}</HueContext.Provider>;
}

export default HueContextProvider;
