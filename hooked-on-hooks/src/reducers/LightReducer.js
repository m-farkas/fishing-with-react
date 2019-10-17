function lightsReducer(lights, action) {
  switch (action.type) {
    case "toggleOn":
      return toggleOn(lights, action.payload);
    case "setBrightness":
      return setBrightness(lights, action.payload);
    case "setHue":
      return setHue(lights, action.payload);
    case "setSaturation":
      return setSaturation(lights, action.payload);
    case "setColor":
      return setColor(lights, action.payload);
    case "reset":
      return action.payload;
    default:
      return lights;
  }
}

function toggleOn(lights, payload) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.on = !light.state.on;
  return newLights;
}

function setBrightness(lights, payload) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.bri = payload.brightness;
  return newLights;
}

function setHue(lights, payload) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.hue = payload.hue;
  return newLights;
}

function setSaturation(lights, payload) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.sat = payload.sat;
  return newLights;
}

function setEffect(lights, payload) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.bri = payload.brightness;
  //
  return newLights;
}

function setColor(lights, payload) {
  const newLights = lights.concat();
  const light = newLights.find(l => l.id === payload.light.id);
  light.state.bri = payload.color.bri;
  light.state.hue = payload.color.hue;
  light.state.sat = payload.color.sat;
  return newLights;
}

export default lightsReducer;
