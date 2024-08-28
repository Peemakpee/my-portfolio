<script setup>
defineProps({
    tool: Object,
});
</script>

<template>
    <!-- About single tech tool -->
    <div>
        <a :href="tool.url" target="_blank" rel="noopener noreferrer">
            <img :src="tool.img" :alt="tool.title" class="
            w-64
            py-5
            px-10
            border border-ternary-light
            dark:border-ternary-dark
            shadow-sm
            rounded-lg
            mb-8
            cursor-pointer
            dark:bg-secondary-light
          " />
        </a>
    </div>
</template>
