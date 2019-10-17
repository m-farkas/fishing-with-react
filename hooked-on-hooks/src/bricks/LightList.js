/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LightListItem from "./LightListItem";

const main = css`
  padding: 10px;
`;

function LightList({ lights, onDispatch }) {
  const items = lights.map(light => {
    return (
      <LightListItem
        key={light.uniqueid}
        light={light}
        onDispatch={onDispatch}
      />
    );
  });

  return <div css={main}>{items}</div>;
}

export default LightList;
