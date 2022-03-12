import Cookies from "js-cookie";

const getStorageKey = (store, state) => `${store.$id}.${state}`;

export default function ({ pinia }) {
  pinia.use(({ options, store }) => {
    // Check if store has persist option and it is array
    if (options.persist && Array.isArray(options.persist)) {
      options.persist.forEach((state) => {
        const rawValueFromCookie = Cookies.get(`${store.$id}.${state}`);
        store[state] = rawValueFromCookie
          ? JSON.parse(rawValueFromCookie)
          : null;
      });

      if (!import.meta.env.SSR) {
        if (window.__PINIA_STATE__) {
          options.persist.forEach((state) => {
            const key = getStorageKey(store, state);
            const value = window.__PINIA_STATE__[store.$id][state];

            if (value) {
              Cookies.set(key, JSON.stringify(value));
            } else {
              Cookies.remove(key);
            }
          });
        }
      }

      store.$subscribe((mutation, state) => {
        console.log(mutation, state);
        if (mutation.events.type === "set") {
          options?.persist?.forEach((stateName) => {
            const key = getStorageKey(store, state);
            const value = state[stateName];

            if (value) {
              Cookies.set(key, JSON.stringify(value));
            } else {
              Cookies.remove(key);
            }
          });
        }
      });
    }
  });
}
