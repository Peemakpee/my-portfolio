<template>
    <!-- Scroll to top -->
    <transition name="fade">
        <div v-show="isScrolled" class="
          transition
          duration-500
          transform
          hover:scale-110
          rounded-full
          cursor-pointer
          flex
          p-2
          bg-indigo-500
          hover:bg-indigo-600
          text-white
          items-center
          hover:shadow-sm
          border-none
          ring-none
          outline-none
        " @click="backToTop">
            <i data-feather="chevron-up"></i>
        </div>
    </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import feather from 'feather-icons';

// Reactive state
const userScrollPosition = ref(0);

// Computed property to check if scrolled
const isScrolled = computed(() => userScrollPosition.value > 100);

// Methods
const updateScrollPosition = () => {
    userScrollPosition.value = window.scrollY;
};

const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

// Lifecycle hooks
onMounted(() => {
    window.addEventListener('scroll', updateScrollPosition);
    feather.replace(); // Update feather icons
});

onUnmounted(() => {
    window.removeEventListener('scroll', updateScrollPosition);
});
</script>

<style scoped>
/* Styles are adapted from the original SCSS */
</style>