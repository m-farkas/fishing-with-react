/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useEffect, useRef, useState } from "react";
import useDebounceCallback from "../hooks/useDebounceCallback";

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
  const [debounceOnChange] = useDebounceCallback(onChange, 100);
  const [value, setValue] = useState(initValue);

  useEffect(() => {
    const width = ref.current ? ref.current.offsetWidth : 0;
  });

  function _handleClick(event) {
    const newWidth =
      (event.clientX - ref.current.offsetLeft) / ref.current.offsetWidth;

    const newValue = Math.round(newWidth * (max - min) + min);

    setValue(newValue);

    if (typeof onChange === "function") {
      onChange(newValue);
    }
  }

  function _handleMouseMove(event) {
    if (event.buttons === 0) {
      return;
    }

    const newWidth =
      (event.clientX - ref.current.offsetLeft) / ref.current.offsetWidth;

    const newValue = Math.round(newWidth * (max - min) + min);

    setValue(newValue);

    if (typeof onChange === "function") {
      debounceOnChange(newValue);
    }
  }

  const width = ((value - min) / (max - min)) * 100;

  return (
    <div
      ref={ref}
      css={main}
      onClick={_handleClick}
      onMouseMove={_handleMouseMove}
    >
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
