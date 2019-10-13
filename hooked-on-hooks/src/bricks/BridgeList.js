/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import ConfigContext from "../contexts/ConfigContext";
import BridgeListItem from "./BridgeListItem";

const mainCss = css`
  display: flex;
  flex-flow: row wrap;
`;

const itemCss = css`
  flex-grow: 0 1 auto;
  margin: 10px;
`;

function BridgeList() {
  const { config, dispatch } = useContext(ConfigContext);

  const items = config.bridges.map(bridge => (
    <div key={bridge.id} css={itemCss}>
      <BridgeListItem
        bridge={bridge}
        active={config.activeBridge && config.activeBridge.id === bridge.id}
        configDispatch={dispatch}
      />
    </div>
  ));

  return <div css={mainCss}>{items}</div>;
}

export default BridgeList;
