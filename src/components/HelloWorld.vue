<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-[#2c3e50] font-normal">
    <h1 class="text-4xl font-medium text-[#00bd7e]">{{ msg }}</h1>
    <h3 class="font-inherit">
      You’ve successfully created a project with
      <a target="_blank" href="https://vitejs.dev/">Vite</a> +
      <a target="_blank" href="https://vuejs.org/">Vue 3</a>.
    </h3>
  </div>
</template>
