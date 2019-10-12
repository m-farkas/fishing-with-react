import React from "react";
import useConfig from "../hooks/useConfig";
import ConfigContext from "./ConfigContext";

function ConfigContextProvider({ children }) {
  const [config, dispatch] = useConfig();

  return (
    <ConfigContext.Provider value={{ config, dispatch }}>
      {children}
    </ConfigContext.Provider>
  );
}

export default ConfigContextProvider;
