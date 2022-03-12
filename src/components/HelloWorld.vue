<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div class="text-[#2c3e50] font-normal text-center space-y-2">
    <h1 class="text-4xl font-medium text-[#00bd7e]">{{ msg }}</h1>
    <h3 class="font-inherit">
      You have successfully created a new project with
      <span class="text-orange-500 font-medium">
        Vue 3 Vite SSR boilerplate
      </span>
    </h3>
  </div>
</template>
