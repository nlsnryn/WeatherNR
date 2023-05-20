<script setup>
import { RouterView } from "vue-router";
import Navbar from "@/components/Navigation.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="flex flex-col min-h-screen font-Roboto bg-weather-primary">
    <Navbar />
    <RouterView v-slot="{ Component }">
      <Transition name="page" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
    <Footer />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: 600ms ease all;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
