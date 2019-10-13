/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LightSwitch from "./LightSwitch";
import LightSlider from "./LightSlider";
import LightIcon from "./LightIcon";

const main = css`
  display: flex;
  flex-flow: row wrap;
  background-color: #2a2a2a;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  color: #7f7f7f;
`;

const icon = css`
  width: 10%;
`;

const name = css`
  flex-grow: 1;
  text-align: left;
`;

const lightSwitch = css``;

const brightness = css`
  width: 100%;
  flex-grow: 1;
`;

function LightListItem({ light, dispatcher }) {
  function switchLight() {
    dispatcher({ type: "toggleOn", payload: { light, on: !light.state.on } });
  }

  function setBrightness(bri) {
    dispatcher({
      type: "setBrightness",
      payload: { light, bri }
    });
  }
  // function setHue(hue) {
  //   dispatcher({
  //     type: "setHue",
  //     payload: { light, hue }
  //   });
  // }

  // function setSaturation(sat) {
  //   dispatcher({
  //     type: "setSaturation",
  //     payload: { light, sat }
  //   });
  // }

  // function setColor(color) {
  //   console.log("setColor", color);
  //   let hue = Math.floor((color.hsl.h / 360) * 65535);
  //   let bri = Math.floor(color.hsl.l * 254);
  //   let sat = Math.floor(color.hsl.s * 254);

  //   dispatcher({
  //     type: "setColor",
  //     payload: {
  //       light,
  //       color: { bri, sat, hue }
  //     }
  //   });
  // }

  // let color = {
  //   h: (light.state.hue / 65535) * 360,
  //   s: light.state.sat / 254,
  //   l: light.state.bri / 254
  // };

  function _renderBrightness() {
    if (!light.state.on) {
      return null;
    }

    return (
      <div css={brightness}>
        <LightSlider
          min={1}
          max={254}
          value={light.state.bri}
          onChange={setBrightness}
        />
      </div>
    );
  }

  return (
    <div css={main}>
      <div css={icon}>
        <LightIcon light={light} />
      </div>
      <div css={name}>
        <h1>{light.name}</h1>
      </div>
      <div css={lightSwitch}>
        <LightSwitch light={light} onChange={switchLight} />
      </div>
      {_renderBrightness()}
    </div>
  );
}

export default LightListItem;
