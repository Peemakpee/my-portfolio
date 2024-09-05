<script setup>
defineProps({
    tool: Object,
});
</script>

<template>
    <!-- About single tech tool -->
    <div class="flex justify-center items-center">
        <a :href="tool.url" target="_blank" rel="noopener noreferrer">
            <img :src="tool.img" :alt="tool.title" class="
                    w-32
                    py-3
                    px-6
                    border border-ternary-light
                    dark:border-ternary-dark
                    shadow-sm
                    rounded-lg
      hover:shadow-lg
      dark:hover:shadow-secondary-dark
                    mb-2
                    cursor-pointer
                    dark:bg-secondary-light
                " />
        </a>
    </div>
</template>
