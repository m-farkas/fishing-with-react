/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import ConfigContext from "../contexts/ConfigContext";

const mainCss = css`
  display: flex;
  flex-flow: row wrap;
`;

const itemCss = css`
  flex-grow: 0 1 auto;
  width: 200px;
  height: 50px;
  font-align: center;
  vertical-align: middle;
  margin: 10px;
`;

const activeItemCss = css`
  ${itemCss}
  color: #ffffff;
  background-color: #2a2a2a;
`;

const inactiveItemCss = css`
  ${itemCss}
  color: #7f7f7f;
  background-color: #37373d;
`;

function BridgeListItem({ bridge, active, configDispatch }) {
  function _handleClick() {
    configDispatch({
      type: "setActiveBridge",
      payload: { id: bridge.id }
    });
  }
  return (
    <div css={active ? activeItemCss : inactiveItemCss} onClick={_handleClick}>
      {bridge.name}
    </div>
  );
}

function BridgeList() {
  const { config, dispatch } = useContext(ConfigContext);

  const items = config.bridges.map(bridge => (
    <BridgeListItem
      bridge={bridge}
      active={config.activeBridge.id === bridge.id}
      configDispatch={dispatch}
    />
  ));

  return <div css={mainCss}>{items}</div>;
}

export default BridgeList;
