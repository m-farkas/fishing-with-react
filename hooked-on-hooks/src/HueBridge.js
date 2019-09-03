import React, { useEffect, useState } from "react";
import HueContextProvider from "./HueContextProvider";
import jshue from "jshue";

function HueBridge({ ipAddress, login, children }) {
  const [hueContext, setHueContext] = useState({ bridge: null, user: null });

  useEffect(() => {
    async function connectHue() {
      if (hueContext.bridge && hueContext.user) {
        return;
      }

      const hue = jshue();
      const bridge = hue.bridge(ipAddress);
      let username = localStorage.getItem(login);

      if (!username) {
        const data = await bridge.createUser(login);
        username = data[0].success.username;
        localStorage.setItem(login, username);
      }

      const user = bridge.user(username);
      setHueContext({ bridge, user });
    }

    connectHue();
  });

  return <HueContextProvider value={hueContext}>{children}</HueContextProvider>;
}

export default HueBridge;
