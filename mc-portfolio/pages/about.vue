<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import AboutMe from '~/components/about/AboutMe.vue';
import CertificatesGrid from '~/components/certificate/CertificatesGrid.vue';

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

        <CertificatesGrid class="container mx-auto" />

        <AboutTechTools class="container mx-auto" />
    </div>
</template>

<style scoped></style>
