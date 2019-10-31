/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const itemCss = css`
  display: flex;
  height: 40px;
  align-items: center;
  border-radius: 15px;
  border-color: #2a2a2a;
  border-style: solid;
  border-width: 2px;
`;

const activeItemCss = css`
  ${itemCss}
  color: #ffffff;
  background-color: #2a2a2a;
`;

const inactiveItemCss = css`
  ${itemCss}
  color: #2a2a2a;
  background-color: #ffffff;

  &:hover {
    color: #ffffff;
    background-color: #5d5d5d;
  }
`;

const nameCss = css`
  flex: 1 0 auto;
  text-align: center;
  cursor: default;

  &:active {
    font-size: 120%;
  }
`;

const deleteCss = css`
  width: 40px;
  cursor: default;

  &:hover {
    font-weight: bold;
    color: red;
  }

  &:active {
    font-size: 120%;
  }
`;

function BridgeListItem({ bridge, active, configDispatch }) {
  function _handleSetActive() {
    configDispatch({
      type: "setActiveBridge",
      payload: { id: bridge.id }
    });
  }

  function _handleRemove() {
    configDispatch({
      type: "removeBridge",
      payload: { id: bridge.id }
    });
  }

  return (
    <div css={active ? activeItemCss : inactiveItemCss}>
      <div onClick={_handleSetActive} css={nameCss}>
        {bridge.name}
      </div>
      <div onClick={_handleRemove} css={deleteCss}>
        X
      </div>
    </div>
  );
}

export default BridgeListItem;
