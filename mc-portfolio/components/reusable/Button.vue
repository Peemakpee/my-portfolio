<template>
    <button @click="$emit('click')">{{ title }}</button>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  // Define the props
  const props = defineProps(['title']);
  </script>
  
  <style scoped>
  /* Add any styles if needed */
  </style>
  