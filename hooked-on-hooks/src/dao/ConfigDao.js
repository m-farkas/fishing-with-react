import AsyncLocalStorage from "./AsyncLocalStorage";

const CONFIG_KEY = "config";

export async function load() {
  const data = await AsyncLocalStorage.getItem(CONFIG_KEY);

  if (!data) {
    return { bridges: [] };
  }

  return JSON.parse(data);
}

export async function save(config) {
  const data = JSON.stringify(config);
  await AsyncLocalStorage.setItem(CONFIG_KEY, data);
}

export default {
  load,
  save
};
