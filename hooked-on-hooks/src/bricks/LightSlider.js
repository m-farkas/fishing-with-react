/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";

const main = css`
  outline-style: solid;
  outline-color: black;
  outline-width: 5px;
  width: 100%;
  height: 30px;
`;

const slider = css`
  background-color: green;
  height: 100%;
`;

function LightSlider({ min, max, initValue, onChange }) {
  const [value, setValue] = useState(initValue);

  // TODO Handle click on slider and compute value from mouse vs. slider position

  const width = ((value - min) / (max - min)) * 100;

  return (
    <div css={main}>
      <div
        css={css`
          ${slider};
          width: ${width}%;
        `}
      ></div>
    </div>
  );
}

export default LightSlider;
