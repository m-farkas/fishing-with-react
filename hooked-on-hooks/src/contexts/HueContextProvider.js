import React, { useContext, useCallback } from "react";
import jshue from "jshue";

import HueContext from "./HueContext";
import useBridge from "../hooks/useBridge";
import ConfigContext from "./ConfigContext";
import MessageContext from "./MessageContext";

function HueContextProvider({ children }) {
  const { config, dispatch } = useContext(ConfigContext);
  const { log } = useContext(MessageContext);
  const [hueContext] = useBridge(config.activeBridge);

  const _addBridge = useCallback(
    async ({ ip }) => {
      const hue = jshue();
      const bridge = hue.bridge(ip);
      const data = await bridge.createUser("uuSmartHome");

      if (data[0].error) {
        log({ type: "error", text: data[0].error.description });
        return;
      }

      const username = data[0].success.username;

      dispatch({
        type: "addBridge",
        payload: {
          ip,
          name: ip,
          username
        }
      });
    },
    [dispatch]
  );

  const _removeBridge = useCallback(
    async bridge => {
      dispatch({
        type: "removeBridge",
        payload: {
          id: bridge.id
        }
      });
    },
    [dispatch]
  );

  return (
    <HueContext.Provider
      value={{
        ...hueContext,
        addBridge: _addBridge,
        removeBridge: _removeBridge
      }}
    >
      {children}
    </HueContext.Provider>
  );
}

export default HueContextProvider;
