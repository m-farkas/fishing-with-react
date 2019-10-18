import React, { useRef, useState, useEffect, useContext } from "react";
import HueContext from "../contexts/HueContext";
import LightList from "./LightList";

function Lights() {
  const hueContext = useContext(HueContext);
  const [lights, setLights] = useState([]);

  // TODO Change useState to useReducer with LightReducer

  useEffect(() => {
    async function loadLights() {
      if (hueContext.status !== "ready") {
        return;
      }

      const response = await hueContext.user.getLights();

      const newLights = Object.keys(response).map(key => {
        let light = response[key];
        light.id = key;
        return light;
      });

      setLights(newLights);
    }

    loadLights();
  }, [hueContext]);

  if (hueContext.status === "connecting") {
    return "Connecting to bridge...";
  }

  return <LightList lights={lights} />;
}

export default Lights;
