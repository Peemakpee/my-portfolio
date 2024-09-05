<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <ProjectsGrid class="container mx-auto" />
</template>

<style lang="scss" scoped></style>
