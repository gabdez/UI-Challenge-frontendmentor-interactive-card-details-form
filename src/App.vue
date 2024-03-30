<template>
  <header>
  </header>

  <main class="h-full">
    <desktopView v-if="windowWidth > 470" />
    <mobileView v-else />
  </main>

  <footer></footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import desktopView from "./views/desktop-view.vue";
import mobileView from "./views/mobile-view.vue";

const windowWidth = ref(window.innerWidth)

const onResize = () => {
  windowWidth.value = window.innerWidth
}
window.addEventListener('resize', onResize);
</script>
