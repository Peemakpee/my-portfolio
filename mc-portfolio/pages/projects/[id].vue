<template>
    <div class="container mx-auto">
        <!-- Check if there are projects and then load -->
        <div v-if="project">
            <!-- Project heading and meta info -->
            <div>
                <p class="
                    font-general-medium
                    text-left text-3xl
                    sm:text-4xl
                    font-bold
                    text-primary-dark
                    dark:text-primary-light
                    mt-14
                    sm:mt-20
                    mb-7
                ">
                    {{ project.title }}
                </p>
                <div class="flex">
                    <div class="flex items-center mr-10">
                        <i data-feather="clock" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
                        <span class="
                            font-general-medium
                            ml-2
                            leading-none
                            text-primary-dark
                            dark:text-primary-light
                        ">{{ project.publishDate }}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
                        <span class="
                            font-general-medium
                            ml-2
                            leading-none
                            text-primary-dark
                            dark:text-primary-light
                        ">{{ project.tag }}</span>
                    </div>
                </div>
            </div>

            <!-- Project gallery -->
            <div class="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
                <div class="mb-10 sm:mb-0" v-for="projectImage in project.projectImages" :key="projectImage.id">
                    <img :src="projectImage.img" class="rounded-xl cursor-pointer shadow-lg sm:shadow-none" />
                </div>
            </div>

            <!-- Project info -->
            <div class="block sm:flex gap-0 sm:gap-10 mt-14">
                <!-- Single project left section details -->
                <div class="w-full sm:w-1/3 text-left">
                    <!-- Single project technologies -->
                    <div class="mb-7">
                        <p class="
                            font-general-medium
                            text-2xl text-primary-dark
                            dark:text-ternary-light
                            mb-2
                        ">
                            {{ project.techTitle }}
                        </p>
                        <p class="
                            font-general-regular
                            text-primary-dark
                            dark:text-ternary-light
                        ">
                            {{ project.technologies.join(", ") }}
                        </p>
                    </div>

                    <!-- Project links -->
                    <div class="mb-7">
                        <p class="
                            font-general-medium
                            text-2xl text-primary-dark
                            dark:text-ternary-light
                            mb-2
                        ">
                            Project Links
                        </p>
                        <div class="flex gap-4">
                            <a v-if="project.github" :href="project.github" target="_blank"
                                class="text-blue-600 hover:underline">
                                GitHub
                            </a>
                            <a v-if="project.liveSite && project.liveSite !== 'Not Deployed'" :href="project.liveSite"
                                target="_blank" class="text-blue-600 hover:underline">
                                Live Site
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Single project right section details -->
                <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p class="
                        font-general-medium
                        text-primary-dark
                        dark:text-primary-light
                        text-2xl
                        font-bold
                        mb-1
                    ">
                        {{ project.detailsTitle }}
                    </p>
                    <p v-for="projectDetail in project.projectDetails" :key="projectDetail.id" class="
                        font-general-regular
                        mb-5
                        text-lg text-primary-dark
                        dark:text-ternary-light
                    ">
                        {{ projectDetail.details }}
                    </p>
                </div>
            </div>
        </div>

        <!-- Load not found components if no project found -->
        <div v-else class="font-general-medium container mx-auto text-center">
            <h1>No projects yet</h1>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onUpdated } from 'vue';
import { useRoute } from '#app';
import { useProjectStore } from '@/stores/useProjectStore';
import feather from 'feather-icons';

const route = useRoute();
const projectStore = useProjectStore();

const project = computed(() => {
    return projectStore.projects.find(p => p.id === route.params.id);
});

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<style lang="scss" scoped></style>
