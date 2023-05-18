<script setup>
import { RouterLink } from "vue-router";
import BaseModal from "@/components/BaseModal.vue";
import { ref } from "vue";

const activeModal = ref(false);

function toggleModal() {
  activeModal.value = !activeModal.value;
}
</script>

<template>
  <header class="sticky bg-weather-primary top-0 shadow-lg">
    <nav
      class="container flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }">
        <div class="flex gap-3 items-center flex-1">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="text-2xl">The Local Weather</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i
          @click="toggleModal"
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary cursor-pointer duration-150"
        ></i>
        <i
          class="fa-solid fa-plus text-xl hover:text-weather-secondary cursor-pointer duration-150"
        ></i>
      </div>

      <BaseModal :activeModal="activeModal" @close-modal="toggleModal">
        <div class="text-black">
          <h1 class="text-2xl mb-1">About:</h1>
          <p class="mb-4">
            The Local WeatherNR allows you to track the current and future
            weather of cities of your choosing.
          </p>
          <h2 class="text-2xl">How it works:</h2>
          <ol class="list-decimal list-inside mb-4">
            <li>
              Search for your city by entering the name into the search bar.
            </li>
            <li>
              Select the city within the results, ths will take you to the
              current weather selection.
            </li>
            <li>
              Track the city by clicking on "+" icon in the right. This will
              save to view at a later time on the home page.
            </li>
          </ol>
          <h2 class="text-2xl">Removing a city</h2>
          <p class="mb-4">
            If you no longer wish to track the city, simply select the city
            within the home page . At the bottom of the page, there will be an
            option to to delete the city.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>
