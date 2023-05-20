<template>
  <div
    class="flex justify-between items-center bg-weather-secondary py-2 px-4 sm:py-4 sm:px-4 rounded-md shadow-md cursor-pointer"
  >
    <div class="flex flex-col">
      <h1 class="text-base sm:text-2xl">{{ city.city }}</h1>
      <h1 class="text-xs sm:text-sm font-medium tracking-wide">
        {{ city.state }}
      </h1>
    </div>

    <div class="flex flex-col gap-1 sm:gap-2">
      <h1 class="text-sm sm:text-xl self-end">
        {{ city.weather.main.temp }} &deg;F
      </h1>
      <div class="flex gap-2">
        <span class="text-xs">H: {{ city.weather.main.temp_max }} &deg;F</span>
        <span class="text-xs">L: {{ city.weather.main.temp_min }} &deg;F</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  city: {
    type: Object,
    default: () => {},
  },
});
</script>
