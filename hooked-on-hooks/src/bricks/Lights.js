import React, { useState } from "react";
import LightList from "./LightList";

function Lights() {
  const [lights] = useState([]);

  // TODO Load and convert lights from Hue bridge via HueContext.user.getLights

  return <LightList lights={lights} />;
}

export default Lights;
