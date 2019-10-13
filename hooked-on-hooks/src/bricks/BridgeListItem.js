/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const itemCss = css`
  display: flex;
  width: 200px;
  height: 50px;
  padding: 5px;
  align-items: center;
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

const nameCss = css`
  flex: 1 0 auto;
  text-align: left;
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
      <div onClick={_handleRemove}>X</div>
    </div>
  );
}

export default BridgeListItem;
