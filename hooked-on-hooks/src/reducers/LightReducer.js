function lightsReducer(lights, action, hueContext) {
  switch (action.type) {
    case "toggleOn":
      return toggleOn(lights, action.payload, hueContext);
    case "setBrightness":
      return setBrightness(lights, action.payload, hueContext);
    case "setHue":
      return setHue(lights, action.payload, hueContext);
    case "setSaturation":
      return setSaturation(lights, action.payload, hueContext);
    case "setColor":
      return setColor(lights, action.payload, hueContext);
    case "setEffect":
      return setEffect(lights, action.payload, hueContext);
    case "reset":
      return action.payload;
    default:
      return lights;
  }
}

function toggleOn(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.on = !light.state.on;
  return newLights;
}

function setBrightness(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.bri = payload.brightness;
  return newLights;
}

function setHue(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.hue = payload.hue;
  return newLights;
}

function setSaturation(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.sat = payload.sat;
  return newLights;
}

function setEffect(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.bri = payload.brightness;
  //
  return newLights;
}

function setColor(lights, payload, hueContext) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.bri = payload.color.bri;
  light.state.hue = payload.color.hue;
  light.state.sat = payload.color.sat;
  return newLights;
}

export default lightsReducer;
