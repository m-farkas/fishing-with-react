import React, { useState } from "react";

export default function BridgeForm() {
  const [bridgeIp, setBridgeIp] = useState("127.0.0.1");

  function _handleChange(e) {
    setBridgeIp(e.target.value);
  }

  // TODO Add button and  on click call HueContext.addBridge

  return (
    <div>
      <input type="text" value={bridgeIp} onChange={_handleChange} />
    </div>
  );
}
