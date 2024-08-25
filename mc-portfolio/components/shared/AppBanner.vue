<template>
    <section class="flex flex-col sm:justify-between items-center sm:flex-row mt-8 sm:mt-2">
        <!-- Banner left contents -->
        <div class="w-full md:w-1/3 text-left">
            <h1
                class="font-general-semibold text-3xl md:text-3xl xl:text-4xl text-center sm:text-left text-secondary-dark dark:text-primary-light uppercase">
                Hi, I am Mc Phy
            </h1>
            <p
                class="font-general-medium mt-2 text-lg sm:text-xl xl:text-2xl text-center sm:text-left leading-none text-gray-400 dark:text-ternary-dark">
                A Web Developer
            </p>
            <div class="flex justify-center sm:block">
                <a href="/Resume_Cabanes.pdf" download=""
                    class="flex justify-center items-center w-40 sm:w-48 mt-6 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-secondary-dark hover:dark:bg-ternary-dark text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume">
                    <i data-feather="arrow-down-circle" class="ml-0 sm:ml-0 mr-2 sm:mr-1 w-5 sm:w-6 duration-100"></i>
                    <span class="text-sm sm:text-base font-normal duration-100">Download Resume</span>
                </a>
            </div>
        </div>

        <!-- Banner right illustration -->
        <div class="w-full md:w-2/3 text-right float-right">
            <img v-if="$colorMode.value === 'dark'" src="../../static/developer-dark.png" alt="Developer Dark" />
            <img v-else src="../../static/developer.png" alt="Developer Light" />
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import feather from 'feather-icons';


onMounted(() => {
    feather.replace(); // Replaces the placeholders with icons
});
</script>

<style scoped>
/* Add any specific styles here */
</style>