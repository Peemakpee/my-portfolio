<template>
    <div class="min-h-screen flex flex-col">
        <!-- App header -->
        <AppHeader />

        <!-- Main content -->
        <transition name="fade" mode="out-in">
            <Nuxt />
        </transition>

        <!-- App footer -->
        <AppFooter />

    </div>
</template>

<script setup>
import { ref } from 'vue';

</script>

<style scoped>
/* Add any additional styles if needed */
</style>