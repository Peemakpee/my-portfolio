<template>
    <footer class="text-white py-4">
        <div class="container mx-auto flex flex-col items-center">
            <div class="
        pt-20
        sm:pt-30
        pb-8
        mt-20
        border-t-2 border-primary-light
        dark:border-secondary-dark
      ">

                <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
                    <p class="
            font-general-semibold
            text-3xl
            sm:text-4xl
            text-secondary-dark
            dark:text-primary-light
            mb-5
          ">
                        Connect with Me
                    </p>


                    <!-- Social Icons -->
                    <ul class="flex gap-4 sm:gap-8 mb-6">
                        <a v-for="social in socialProfiles" :key="social.id" :href="social.url" target="_blank"
                            rel="noopener noreferrer" class="
              text-gray-400
              hover:text-secondary-dark
              dark:hover:text-primary-dark
              cursor-pointer
              rounded-lg
              bg-gray-50
              dark:bg-ternary-dark
              hover:bg-gray-100
              shadow-sm
              p-4
              duration-500
            ">
                            <i :data-feather="social.icon" class="w-6 sm:w-8 h-6 sm:h-8"></i>
                        </a>
                    </ul>
                </div>

                <!-- Copyright -->
                <FooterCopyright />
            </div>
        </div>
    </footer>
</template>

<script setup>
import { useSocialStore } from '~/stores/useSocialStore';
import { onMounted } from 'vue';
import feather from 'feather-icons';
import FooterCopyright from './FooterCopyright.vue'; // Import FooterCopyright component

const socialStore = useSocialStore();
const socialProfiles = socialStore.getSocialProfiles;
const copyrightDate = socialStore.copyrightDate;

onMounted(() => {
    feather.replace(); // Replaces the placeholders with icons
});
</script>

<style scoped>
footer ul li a {
    color: inherit;
    text-decoration: none;
}

footer ul li a:hover {
    text-decoration: underline;
}
</style>
