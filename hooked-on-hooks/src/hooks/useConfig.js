import { useEffect, useReducer, useRef } from "react";
import ConfigReducer from "../reducers/ConfigReducer";
import ConfigDao from "../dao/ConfigDao";

function useConfig() {
  const isReady = useRef(false);

  const [config, dispatch] = useReducer(ConfigReducer, {
    bridges: [],
    activeBridge: null
  });

  useEffect(() => {
    if (isReady.current) {
      return;
    }

    async function load() {
      const data = await ConfigDao.load();
      isReady.current = true;
      dispatch({ type: "reset", payload: data });
    }

    load();
  }, []);

  useEffect(() => {
    if (!isReady.current) {
      return;
    }

    ConfigDao.save(config);
  });

  async function dispatchWrapper(action) {
    const config = dispatch(action);
    await ConfigDao.save(config);
    return config;
  }

  return [config, dispatch];
}

export default useConfig;
