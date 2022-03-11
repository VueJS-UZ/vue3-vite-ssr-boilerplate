import { inject, onMounted, onServerPrefetch, useSSRContext } from "vue";

export function usePiniaAction(handler) {
  onServerPrefetch(async () => {
    const ctx = useSSRContext();
    const pinia = inject("pinia");
    await handler();
    ctx.piniaState = pinia.state.value;
  });

  onMounted(async () => {
    if (!window.__PINIA_STATE__) {
      await handler();
    }
  });
}
