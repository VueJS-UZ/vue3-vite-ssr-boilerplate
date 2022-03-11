import { unref, reactive, computed } from "vue";
import { useHead as _useHead } from "@vueuse/head";

export function useHead(head) {
  const newHead = computed(() =>
    reactive({
      ...head,
      title: `${unref(head.title)} - Vue 3 Vite SSR Boilerplate`,
    })
  );
  return _useHead(newHead);
}
