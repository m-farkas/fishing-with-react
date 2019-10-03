/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LightListItem from "./LightListItem";

const main = css`
  padding: 10px;
`;

function LightList({ lights, lightDispatcher }) {
  const items = lights.map(light => {
    return <LightListItem light={light} dispatcher={lightDispatcher} />;
  });

  return <div css={main}>{items}</div>;
}

export default LightList;
