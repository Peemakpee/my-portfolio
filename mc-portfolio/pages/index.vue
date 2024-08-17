<template>
    <div class="bg-gray-100 min-h-screen flex flex-col">
        <!-- App header -->
        <AppHeader />

        <!-- Main content -->
        <main class="flex-1 p-4">
            <h2 class="text-2xl font-semibold mb-4">Welcome to My Portfolio</h2>
            <p>This is the main content of the page.</p>
        </main>

        <!-- App footer -->
        <AppFooter />

        <!-- Go back to top button -->
        <div class="flex space-x-2 mr-8 mb-6 right-0 bottom-0 z-50 fixed items-center sm:space-x-4">
            <button @click="scrollToTop" class="bg-blue-500 text-white p-2 rounded">
                Back to Top
            </button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>

<style scoped>
/* Add any additional styles if needed */
</style>