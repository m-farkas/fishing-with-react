import React from "react";
import LightListItem from "./LightListItem";
import { List } from "office-ui-fabric-react";

function LightList({ lights, lightDispatcher }) {
  function _onRenderCell(item) {
    return <LightListItem light={item} dispatcher={lightDispatcher} />;
  }

  return <List items={lights} onRenderCell={_onRenderCell} />;
}

export default LightList;
