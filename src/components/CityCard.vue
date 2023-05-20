<template>
  <div
    class="flex justify-between items-center bg-weather-secondary py-4 px-4 rounded-md shadow-md cursor-pointer"
  >
    <div class="flex flex-col">
      <h1 class="text-2xl">{{ city.city }}</h1>
      <h1 class="font-medium tracking-wide">{{ city.state }}</h1>
    </div>

    <div class="sm:flex flex-col gap-2 hidden">
      <h1 class="text-sm sm:text-xl self-end">
        {{ city.weather.main.temp }} &deg;
      </h1>
      <div class="flex gap-2">
        <span class="text-xs">H: {{ city.weather.main.temp_max }}</span>
        <span class="text-xs">L: {{ city.weather.main.temp_min }}</span>
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
