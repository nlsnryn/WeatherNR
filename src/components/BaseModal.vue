<script setup>
import { defineProps, defineEmits } from "vue";

defineEmits(["close-modal"]);
defineProps({
  activeModal: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="activeModal"
      class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8"
    >
      <Transition name="modal-inner">
        <div
          v-if="activeModal"
          class="p-4 bg-white self-start mt-32 max-w-screen-md"
        >
          <slot />
          <button
            @click="$emit('close-modal')"
            class="text-white mt-8 bg-weather-primary py-2 px-6"
          >
            Close
          </button>
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
