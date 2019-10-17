/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext, useState } from "react";
import HueContext from "../contexts/HueContext";

export default function BridgeForm() {
  const [bridgeIp, setBridgeIp] = useState("127.0.0.1");
  const { addBridge } = useContext(HueContext);

  function _handleChange(e) {
    setBridgeIp(e.target.value);
  }

  function _handleClick() {
    addBridge({ ip: bridgeIp });
  }

  return (
    <div>
      <input type="text" value={bridgeIp} onChange={_handleChange} />
      <button onClick={_handleClick}>Connect</button>
    </div>
  );
}
