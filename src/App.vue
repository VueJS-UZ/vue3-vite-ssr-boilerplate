<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="font-inter">
      <HelloWorld msg="You did it!" />

      <nav class="space-x-4">
        <RouterLink custom v-slot="{ href, navigate, isExactActive }" to="/">
          <a
            class="no-underline px-4 hover:text-green-500"
            transition="colors"
            :class="[isExactActive ? 'text-green-500' : 'text-gray-900']"
            border="0"
            border-r="solid 1 gray-300"
            :href="href"
            @click="navigate"
          >
            Home
          </a>
        </RouterLink>
        <RouterLink
          custom
          v-slot="{ href, navigate, isExactActive }"
          text="gray-900 hover:green-400"
          to="/about"
        >
          <a
            class="no-underline pl-2 pr-4 hover:text-green-500"
            transition="colors"
            :class="[isExactActive ? 'text-green-500' : 'text-gray-900']"
            :href="href"
            @click="navigate"
            >About
          </a>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
body {
  @apply font-inter;
}
</style>
