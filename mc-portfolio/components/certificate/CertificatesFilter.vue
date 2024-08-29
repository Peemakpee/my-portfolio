<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
    select: {
        type: String,
        default: "certificates",
    },
    selectOptions: {
        type: Array,
        default: () => [
            "Web Development",
            "Data Science",
            "DevOps",
        ],
    },
});

const emit = defineEmits(['change']);
</script>

<template>
    <select @change="emit('change', $event.target.value)" :name="select" :id="select" class="
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
    ">
        <option value="">All Certificates</option>
        <option v-for="option in selectOptions" :key="option" :value="option" class="sm:text-md">
            {{ option }}
        </option>
    </select>
</template>

<style lang="scss" scoped></style>
