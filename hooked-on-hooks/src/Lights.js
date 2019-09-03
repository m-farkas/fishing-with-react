import React, { useState, useEffect, useContext } from "react";
import HueContext from "./HueContext";
import LightList from "./LightList";

function lightsReducer(lights, action, hueContext) {
  switch (action.type) {
    case "toggleOn":
      return toggleOn(lights, action.payload, hueContext);
    case "setBrightness":
      return setBrightness(lights, action.payload, hueContext);
    case "setColor":
      return setColor(lights, action.payload, hueContext);
    case "setEffect":
      return setEffect(lights, action.payload, hueContext);
    default:
      return lights;
  }
}

function toggleOn(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.lightId);
  light.state.on = !light.state.on;
  hueContext.user.setLightState(payload.lightId, { on: light.state.on });
  return newLights;
}

function setBrightness(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.lightId);
  light.state.bri = payload.brightness;
  hueContext.user.setLightState(payload.lightId, { bri: payload.brightness });
  return newLights;
}

function setEffect(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.lightId);
  light.state.bri = payload.brightness;
  hueContext.user.setLightState(payload.lightId, { effect: payload.effect });
  return newLights;
}

function setColor(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.lightId);
  light.state.bri = payload.color.bri;
  light.state.hue = payload.color.hue;
  light.state.sat = payload.color.sat;
  hueContext.user.setLightState(payload.lightId, payload.color);
  return newLights;
}

function Lights() {
  const hueContext = useContext(HueContext);
  const [lights, setLights] = useState(null);

  useEffect(() => {
    async function loadLights() {
      if (!hueContext.user || lights) {
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
  });

  function dispatch(action) {
    const newLights = lightsReducer(lights, action, hueContext);
    setLights(newLights);
  }

  if (!lights) {
    return "Loading...";
  }

  return <LightList lights={lights} lightDispatcher={dispatch} />;
}

export default Lights;
