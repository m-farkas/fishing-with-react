import React from "react";
import { SketchPicker } from "react-color";
import {
  getColorFromString,
  ColorPicker,
  Slider,
  Stack,
  Toggle
} from "office-ui-fabric-react";
import colorConvert from "color-convert";

function LightListItem({ light, dispatcher }) {
  function switchLight() {
    dispatcher({ type: "toggleOn", payload: { lightId: light.id } });
  }

  function setBrightness(value) {
    dispatcher({
      type: "setBrightness",
      payload: { lightId: light.id, brightness: value }
    });
  }
  function setHue(value) {
    dispatcher({
      type: "setHue",
      payload: { lightId: light.id, hue: value }
    });
  }
  function setSaturation(value) {
    dispatcher({
      type: "setSaturation",
      payload: { lightId: light.id, sat: value }
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
    <Stack>
      <Stack.Item>
        <h1>{light.name}</h1>
      </Stack.Item>
      <Stack.Item>
        <Toggle
          checked={light.state.on}
          onChange={switchLight}
          onText="On"
          offText="Off"
        />
      </Stack.Item>

      <Stack.Item>
        <Slider
          label="Brightness"
          min={1}
          max={254}
          step={1}
          value={light.state.bri}
          onChange={setBrightness}
        />
      </Stack.Item>

      <Stack.Item>
        <Slider
          label="Hue"
          min={0}
          max={65535}
          step={100}
          value={light.state.hue}
          onChange={setHue}
        />
      </Stack.Item>

      <Stack.Item>
        <Slider
          label="Saturation"
          min={0}
          max={254}
          step={1}
          value={light.state.sat}
          onChange={setSaturation}
        />
      </Stack.Item>
      <Stack.Item>
        <label>Color</label>
        <SketchPicker
          color={color}
          onChange={setColor}
          disableAlpha
          presetColors={[]}
          width="50%"
        />
      </Stack.Item>
    </Stack>
  );
}

export default LightListItem;
