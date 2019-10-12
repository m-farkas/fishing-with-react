import { useState, useEffect } from "react";
import jshue from "jshue";

function useBridge(config) {
  const [hueContext, setHueContext] = useState({
    config,
    bridge: null,
    user: null,
    status: "connecting"
  });

  useEffect(() => {
    async function connectBridge() {
      if (!config) {
        return;
      }

      if (hueContext.config && hueContext.config.id === config.id) {
        return;
      }

      const hue = jshue();
      const bridge = hue.bridge(config.ip);
      const user = bridge.user(config.username);
      setHueContext({ config, bridge, user, status: "ready" });
    }

    connectBridge();
  });

  return [hueContext];
}

export default useBridge;
