<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import AboutMe from '~/components/about/AboutMe.vue';

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <div>
        <AboutMe class="container mx-auto" />

        <!-- <AboutCounter />

        <AboutClients class="container mx-auto" /> -->
    </div>
</template>

<style scoped></style>
