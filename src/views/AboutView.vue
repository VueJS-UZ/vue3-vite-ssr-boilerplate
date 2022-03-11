<script setup>
import { useAsyncData } from "@/composables/useAsyncData";
import { useHead } from "@/composables/useHead";
import { reactive } from "vue";

const { data } = useAsyncData("about", () => "Message for the about page!");

const head = reactive({ title: "About page" });

useHead(head);
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ data }}</p>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>
