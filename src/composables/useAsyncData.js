import { onMounted, onServerPrefetch, ref, useSSRContext } from "vue";

export function useAsyncData(key, handler) {
  if (typeof handler !== "function") {
    throw new TypeError("asyncData handler must be a function");
  }

  const data = ref(null);
  const error = ref(null);
  const isLoading = ref(false);

  const refresh = async () => {
    try {
      isLoading.value = true;
      data.value = await handler();
    } catch (e) {
      error.value = e;
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(async () => {
    if (window.__ASYNC__DATA__[key]) {
      data.value = window.__ASYNC__DATA__[key];
      window.__ASYNC__DATA__[key] = null;
    } else {
      refresh();
    }
  });

  onServerPrefetch(async () => {
    const ctx = useSSRContext();
    ctx.asyncData[key] = await handler();
    data.value = ctx.asyncData[key];
  });

  return { data, error, isLoading, refresh };
}
