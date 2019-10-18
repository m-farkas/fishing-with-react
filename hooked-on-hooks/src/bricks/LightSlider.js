/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useRef, useState } from "react";

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
  const ref = useRef(null);
  const [value, setValue] = useState(initValue);

  function _handleClick(event) {
    const newWidth =
      (event.clientX - ref.current.offsetLeft) / ref.current.offsetWidth;

    const newValue = Math.round(newWidth * (max - min) + min);

    setValue(newValue);

    if (typeof onChange === "function") {
      onChange(newValue);
    }
  }

  // TODO Handle onMouseMove and use useDebounceCallback to handle huge amount of value changes

  const width = ((value - min) / (max - min)) * 100;

  return (
    <div ref={ref} css={main} onClick={_handleClick}>
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
