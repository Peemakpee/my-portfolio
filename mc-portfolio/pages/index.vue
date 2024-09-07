<template>
    <div class="container mx-auto">
        <AppBanner />
        <ProjectsGrid :limit="6" />

        <!-- View more projects button -->
        <div class="mt-5 sm:mt-14 flex justify-center">
            <NuxtLink to="/projects" class="
      font-general-medium
      flex
      items-center
      px-6
      py-3
      rounded-lg
      shadow-lg
      hover:shadow-xl
      bg-secondary-dark
      dark:bg-ternary-dark
  hover:bg-[#1a3e70] 
  dark:hover:bg-secondary-dark
      focus:ring-1 focus:ring-indigo-900
      text-white text-lg
      sm:text-xl
      duration-300
    " aria-label="More Projects">
                <Button title="More Projects" />
            </NuxtLink>
        </div>

    </div>
</template>

<script setup>
import AppBanner from '~/components/shared/AppBanner.vue';
import Button from "~/components/reusable/Button.vue";
import { ref } from 'vue';
</script>

<style scoped></style>