<script setup>
import { useAuthStore } from "@/stores/auth";
import { useHead } from "@/composables/useHead";
import { useAsyncData } from "@/composables/useAsyncData";
import { usePiniaAction } from "@/composables/usePiniaAction";

const { data, isLoading } = useAsyncData("home", () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Message from the server");
    }, 250);
  });
});

const authStore = useAuthStore();

usePiniaAction(authStore.fetchUser);

useHead({
  title: "Home page",
  meta: [
    {
      name: "description",
      content: "This is Vue 3 Vite SSR boilerplate project",
    },
  ],
});
</script>

<template>
  <main>
    <p class="text-lg" v-if="isLoading">Loading...</p>
    <p v-else transition="all" text="lg hover:orange-500">
      <span>Async data: </span>
      <span>{{ data }}</span>
    </p>

    <p>
      <span>Pinia state: </span>
      <code>{{ authStore.user }}</code>
    </p>
  </main>
</template>
