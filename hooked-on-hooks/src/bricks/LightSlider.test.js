import React from "react";
import ReactDOM from "react-dom";
import LightSlider from "./LightSlider";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  act(() => {
    ReactDOM.render(
      <LightSlider min={1} max={10} initValue={5} onChange={() => {}} />,
      container
    );
  });
});
