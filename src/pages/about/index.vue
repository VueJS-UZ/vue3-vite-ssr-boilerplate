<script setup>
import { useAsyncData } from "@/composables/useAsyncData";
import { useHead } from "@/composables/useHead";
import { reactive } from "vue";

const { data } = useAsyncData("about", () => "Message for the about page!");

const head = reactive({ title: "About page" });

useHead(head);
</script>

<template>
  <div class="space-y-2 text-center">
    <h1 class="text-3xl">This is an about page</h1>
    <p>{{ data }}</p>
  </div>
</template>
