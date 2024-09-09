<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    select: {
        type: String,
        default: "projects",
    },
    selectOptions: {
        type: Array,
        default: () => [
            "Web Application",
            "Mobile Application",
            "Desktop Application",
        ],
    },
});

const emit = defineEmits(['change']);
</script>

<template>
    <div class="relative w-full sm:w-auto">
        <select 
            @change="emit('change', $event.target.value)" 
            :name="props.select" 
            :id="props.select" 
            class="
                w-full
                sm:w-auto
                font-general-medium
                px-4
                py-2
                border-1 border-gray-200
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
                appearance-none
                pr-10
            "
        >
            <option value class="text-sm sm:text-md">All Projects</option>
            <option v-for="option in props.selectOptions" :key="option" :value="option" class="text-sm sm:text-md">
                {{ option }}
            </option>
        </select>
        <i data-feather="chevron-down"
            class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 pointer-events-none"></i>
    </div>
</template>

<style scoped>
@media (max-width: 640px) {
    select {
        font-size: 14px;
        padding: 8px 12px;
    }
}
</style>
