<script setup>
import { useTechToolsStore } from '@/stores/useTechTools';

const techToolsStore = useTechToolsStore();
</script>

<template>
    <!-- About tech tools section -->
    <div class="mt-10 sm:mt-20">
        <p class="
        font-general-medium
        text-2xl text-center
        sm:text-3xl
        text-primary-dark
        dark:text-primary-light
      ">
            {{ techToolsStore.toolsHeading }}
        </p>
        <div class="grid grid-cols-2 sm:grid-cols-4 mt-10 sm:mt-14 gap-2">
            <AboutToolSingle v-for="tool in techToolsStore.tools" :key="tool.id" :tool="tool" />
        </div>
    </div>
</template>
