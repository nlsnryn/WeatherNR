<script setup>
import { RouterLink, useRoute, useRouter } from "vue-router";
import BaseModal from "@/components/BaseModal.vue";
import { uid } from "uid";
import { watch, ref } from "vue";

const activeModal = ref(false);
const savedCities = ref([]);
const route = useRoute();
const router = useRouter();
const iconsShow = ref(null);
const deleteModal = ref(false);

const addCity = () => {
  if (localStorage.getItem("savedCities")) {
    savedCities.value = JSON.parse(localStorage.getItem("savedCities"));
  }

  const locationObj = {
    id: uid(),
    state: route.params.state,
    city: route.params.city,
    coords: {
      lat: route.query.lat,
      lng: route.query.lng,
    },
  };

  savedCities.value.push(locationObj);
  localStorage.setItem("savedCities", JSON.stringify(savedCities.value));

  let query = Object.assign({}, route.query);
  delete query.preview;
  query.id = locationObj.id;
  router.replace({ query });
  iconsShow.value = true;
};

const removeCity = () => {
  const cities = JSON.parse(localStorage.getItem("savedCities"));
  const updatedCities = cities.filter((city) => {
    return city.id !== route.query.id;
  });
  localStorage.setItem("savedCities", JSON.stringify(updatedCities));

  deleteModal.value = false;
  iconsShow.value = false;
  router.push({
    name: "home",
  });
};

function deleteToggleModal() {
  deleteModal.value = !deleteModal.value;
}

function toggleModal() {
  activeModal.value = !activeModal.value;
}

watch(
  () => route.query.id,
  (newId) => {
    if (newId && !route.query.preview) {
      iconsShow.value = true; // Set iconsShow to true when opening CityView component
    }
  }
);
</script>

<template>
  <header class="sticky bg-weather-primary top-0 shadow-lg">
    <nav
      class="max-w-screen-md mx-auto flex flex-col sm:flex-row items-center gap-4 text-white py-6"
    >
      <RouterLink :to="{ name: 'home' }" @click="iconsShow = false">
        <div class="flex gap-3 items-center flex-1">
          <i class="fa-solid fa-sun text-2xl"></i>
          <p class="texl-xl sm:text-2xl">The Local Weather</p>
        </div>
      </RouterLink>

      <div class="flex gap-3 flex-1 justify-end">
        <i
          @click="toggleModal"
          class="fa-solid fa-circle-info text-xl hover:text-weather-secondary cursor-pointer duration-150"
        ></i>
        <i
          @click="addCity"
          v-if="route.query.preview"
          class="fa-solid fa-plus text-xl hover:text-weather-secondary cursor-pointer duration-150"
        ></i>

        <i
          @click="deleteToggleModal()"
          v-if="!route.query.preview && iconsShow"
          class="fa-solid fa-trash text-xl cursor-pointer hover:text-weather-secondary duration-150"
        ></i>
      </div>

      <BaseModal
        :deleteModal="deleteModal"
        @close-modal="deleteToggleModal"
        @delete-location="removeCity"
      >
        <div class="text-black">
          <h1 class="text-sm sm:text-base">
            Are you sure to delete this location?
          </h1>
        </div>
      </BaseModal>

      <BaseModal :activeModal="activeModal" @close-modal="toggleModal">
        <div class="text-black">
          <h1 class="text-xl sm:text-2xl mb-1">About:</h1>
          <p class="text-xs sm:text-base mb-4">
            The Local WeatherNR allows you to track the current and future
            weather of cities of your choosing.
          </p>
          <h2 class="text-xl sm:text-2xl">How it works:</h2>
          <ol class="text-xs sm:text-base list-decimal list-inside mb-4">
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
            <li>
              If you want to go back in Home page to search another
              location/city or to view your tracked location kindly click the
              "The Local Weather" logo.
            </li>
          </ol>
          <h2 class="text-xl sm:text-2xl">Removing a city</h2>
          <p class="text-xs sm:text-base mb-4">
            If you no longer wish to track the city, simply select the city
            within the home page . At the top of the page, there will be an icon
            trashcan to delete the city.
          </p>
        </div>
      </BaseModal>
    </nav>
  </header>
</template>
