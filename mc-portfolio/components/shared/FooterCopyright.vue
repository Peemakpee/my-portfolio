<template>
    <div class="flex justify-center items-center text-center">
        <div class="
          font-normal
          text-lg text-ternary-dark
          dark:text-ternary-light
        ">
            &copy; {{ copyrightDate }}.
            <a href="https://github.com/Peemakpee/my-portfolio" target="_blank" class="
            font-semibold
            hover:underline hover:text-secondary-dark
            dark:hover:text-ternary-dark
            duration-500
          ">{{ projectName }}</a>
            . Developed by
            <a href="https://dev.to/peemakpee" target="_blank" class="
            font-semibold
            dark:text-secondary-light
            uppercase
            hover:underline hover:text-secondary-dark
            dark:hover:text-ternary-dark
            duration-500
          ">{{ author }}</a>
        </div>
    </div>
</template>

<script setup>
import { useSocialStore } from '~/stores/useSocialStore';

// Data
const projectName = "Nuxt.js & Tailwind CSS Portfolio";
const author = "MCPHY";

// Accessing Pinia store
const socialStore = useSocialStore();
const copyrightDate = socialStore.copyrightDate;
</script>

<style scoped>
/* Add any specific styles here */
</style>
