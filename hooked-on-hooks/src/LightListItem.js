import React from "react";
import { SketchPicker } from "react-color";

function LightListItem({ light, dispatcher }) {
  function switchLight() {
    dispatcher({ type: "toggleOn", payload: { lightId: light.id } });
  }

  function setBrightness(event) {
    let value = parseInt(event.target.value);
    dispatcher({
      type: "setBrightness",
      payload: { lightId: light.id, brightness: value }
    });
  }
  function setHue(event) {
    let value = parseInt(event.target.value);
    dispatcher({
      type: "setHue",
      payload: { lightId: light.id, hue: value }
    });
  }
  function setSaturation(event) {
    let value = parseInt(event.target.value);
    dispatcher({
      type: "setSaturation",
      payload: { lightId: light.id, saturation: value }
    });
  }

  function setColor(color) {
    console.log("setColor", color);
    let hue = Math.floor((color.hsl.h / 360) * 65535);
    let bri = Math.floor(color.hsl.l * 254);
    let sat = Math.floor(color.hsl.s * 254);

    dispatcher({
      type: "setColor",
      payload: {
        lightId: light.id,
        color: { bri, sat, hue }
      }
    });
  }

  let color = {
    h: (light.state.hue / 65535) * 360,
    s: light.state.sat / 254,
    l: light.state.bri / 254
  };

  return (
    <div>
      <h1>{light.name}</h1>
      <form>
        <label>Power on</label>
        <input
          type="checkbox"
          name="on"
          onChange={switchLight}
          checked={light.state.on}
        />
        <br />
        <label>Brightness</label>
        <input
          type="number"
          name="bri"
          onChange={setBrightness}
          value={light.state.bri}
        />
        <br />
        <label>Hue</label>
        <input
          type="number"
          name="hue"
          onChange={setHue}
          value={light.state.hue}
        />
        <br />
        <label>Saturation</label>
        <input
          type="number"
          name="sat"
          onChange={setSaturation}
          value={light.state.sat}
        />
        <label>Color</label>
        <SketchPicker color={color} onChange={setColor} />
        <br />
        <label>Effect</label>
        <input type="text" name="effect" value={light.state.effect} />
      </form>
    </div>
  );
}

export default LightListItem;
