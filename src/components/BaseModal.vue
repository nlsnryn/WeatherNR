<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["close-modal"]);
defineProps({
  activeModal: {
    type: Boolean,
    default: false,
  },
  deleteModal: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="activeModal || deleteModal"
      class="absolute w-full bg-black bg-opacity-30 h-screen top-5 left-0 flex justify-center px-8"
    >
      <Transition name="modal-inner">
        <div
          v-if="activeModal || deleteModal"
          class="p-4 bg-white self-start mt-40 sm:mt-32 max-w-screen-md rounded-md"
        >
          <slot />
          <button
            v-if="activeModal"
            @click="$emit('close-modal')"
            class="text-white mt-3 sm:mt-8 bg-weather-primary py-1 px-3 sm:py-2 sm:px-6 rounded-md text-sm sm:text-base"
          >
            Close
          </button>
          <div v-if="deleteModal" class="flex gap-3 sm:gap-5">
            <button
              @click="$emit('delete-location')"
              class="text-white mt-3 sm:mt-8 bg-weather-primary py-1 px-3 sm:py-2 sm:px-6 rounded-md duration-150 hover:bg-red-600 text-sm sm:text-base"
            >
              Yes
            </button>
            <button
              @click="$emit('close-modal')"
              class="text-white mt-3 sm:mt-8 bg-weather-primary py-1 px-3 sm:py-2 sm:px-6 rounded-md duration-150 text-sm sm:text-base"
            >
              No
            </button>
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-outer-enter-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-outer-leave-active {
  transition: opacity 0.8s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}
.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
