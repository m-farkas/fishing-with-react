import ConfigDao from "../dao/ConfigDao";

function addBridge(config, { ip, name, username }) {
  const newBridges = config.bridges.concat();
  const bridge = { id: config.bridges.length + 1, ip, name, username };
  newBridges.push(bridge);
  const newConfig = { ...config, bridges: newBridges, activeBridge: bridge };
  return newConfig;
}

function removeBridge(config, { id }) {
  const newBridges = config.bridges.filter(b => b.id !== id);
  const newConfig = { ...config, bridges: newBridges };

  if (config.activeBridge.id === id) {
    if (config.bridges.length > 0) {
      config.activeBridge = config.bridges[0];
    } else {
      config.activeBridge = null;
    }
  }

  return newConfig;
}

function setActiveBridge(config, { id }) {
  const bridge = config.bridges.find(item => item.id === id);
  const newConfig = { ...config, activeBridge: bridge };
  return newConfig;
}

function ConfigReducer(config, action) {
  switch (action.type) {
    case "addBridge":
      return addBridge(config, action.payload);
    case "removeBridge":
      return removeBridge(config, action.payload);
    case "setActiveBridge":
      return setActiveBridge(config, action.payload);
    case "reset":
      return action.payload;
    default:
      return config;
  }
}

export default ConfigReducer;
