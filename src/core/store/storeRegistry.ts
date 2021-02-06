import { AppStore } from './store';

let store: AppStore;

const register = (injectedStore: AppStore) => {
  store = injectedStore;
};

const getStore = () => {
  return store;
};

export default {
  register,
  getStore,
};
