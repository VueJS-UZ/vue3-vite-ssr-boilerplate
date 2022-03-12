<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
</script>

<template>
  <div class="grid min-h-screen lg:grid-cols-2 items-center justify-center">
    <header class="text-center">
      <div class="flex justify-center mb-4">
        <img alt="Vue logo" src="@/assets/logo.svg" width="125" height="125" />
      </div>

      <div class="space-y-2">
        <HelloWorld msg="You did it!" />

        <nav class="space-x-4">
          <RouterLink custom v-slot="{ href, navigate, isExactActive }" to="/">
            <a
              class="no-underline px-4 hover:(text-green-500 underline decoration-green-500 decoration-dotted)"
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
            to="/about"
          >
            <a
              class="no-underline pl-2 pr-4 hover:(text-green-500 underline decoration-green-500 decoration-dotted)"
              transition="all"
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
  </div>
</template>

<style lang="scss">
body {
  @apply font-inter;
}
</style>
