/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const main = css`
  width: 100px;
  height: 50px;
  position: relative;
`;

const switchMain = css`
  border-radius: 50%;
  position: absolute;
  top: 0px;
`;

const switchOff = css`
  ${switchMain};
  background-color: #9e9e9e;
  width: 50%;
  height: 100%;
`;

const switchOn = css`
  ${switchMain};
  background-color: white;
  width: 50%;
  height: 100%;
  left: 50%;
`;

const background = css`
  width: 75px;
  height: 30px;
  background-color: #5d5d5d;
  border-radius: 15px;
  position: absolute;
  top: calc(50% - 15px);
  left: calc(50% - 32px);
`;

function LightSwitch({ light, onChange }) {
  function _handleClick(event) {
    if (typeof onChange === "function") {
      onChange(light);
    }
  }

  return (
    <div css={main} onClick={_handleClick}>
      <div css={background}></div>
      <div css={light.state.on ? switchOn : switchOff}></div>
    </div>
  );
}

export default LightSwitch;
