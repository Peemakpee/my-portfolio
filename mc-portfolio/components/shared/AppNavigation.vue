<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  showModal: Function,
  modal: Boolean,
  categories: Array,
});
</script>

<template>
  <!-- App header navigation links -->
  <div :class="isOpen ? 'block' : 'hidden'" class="
      font-general-regular
      m-0
      sm:ml-4
      mt-5
      sm:mt-3 sm:flex
      p-5
      sm:p-0
      justify-center
      items-center
      shadow-lg
      sm:shadow-none
    ">
    <NuxtLink to="/projects" class="block text-left text-lg sm:mx-4 mb-2 sm:py-2" aria-label="Projects"
      active-class="text-indigo-700 dark:text-indigo-400" exact-active-class="text-indigo-700 dark:text-indigo-400">
      Projects</NuxtLink>

    <NuxtLink to="/about" class="block text-left text-lg sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0"
      aria-label="About Me" active-class="text-indigo-700 dark:text-indigo-400 border-indigo-700 dark:border-indigo-400"
      exact-active-class="text-indigo-700 dark:text-indigo-400 border-indigo-700 dark:border-indigo-400">About Me
    </NuxtLink>

    <NuxtLink to="/contact" class="block text-left text-lg sm:mx-4 mb-2 sm:py-2 border-t-2 pt-3 sm:pt-2 sm:border-t-0"
      aria-label="Contact" active-class="text-indigo-700 dark:text-indigo-400 border-indigo-700 dark:border-indigo-400"
      exact-active-class="text-indigo-700 dark:text-indigo-400 border-indigo-700 dark:border-indigo-400">Contact
    </NuxtLink>

    <div class="
        font-general-regular
        border-t-2
        pt-3
        sm:pt-0 sm:border-t-0
        border-primary-light
        dark:border-secondary-dark
      ">
      <button class="
          sm:hidden
          block
          text-left text-md
          bg-secondary-dark
          hover:bg-secondary-dark
          text-white
          shadow-sm
          rounded-md
          px-4
          py-2
          mt-2
        " @click="showModal()" aria-label="Hire Me Button">
        Hire Me
      </button>
    </div>
  </div>
</template>

<style></style>
