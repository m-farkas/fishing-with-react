import React from "react";
import LightListItem from "./LightListItem";

function LightList({ lights, lightDispatcher }) {
  const items = lights.map(light => {
    return <LightListItem light={light} dispatcher={lightDispatcher} />;
  });

  return <div>{items}</div>;
}

export default LightList;
