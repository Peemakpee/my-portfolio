<script setup>
import { computed, onMounted, onUpdated } from 'vue';
import { useRoute } from '#app';
import { useCertificateStore } from '@/stores/useCertificateStore';
import feather from 'feather-icons';

const route = useRoute();
const certificateStore = useCertificateStore();

const certificate = computed(() => {
    return certificateStore.certificates.find(c => c.id === route.params.id);
});

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <div class="container mx-auto">
        <!-- Check if there are certificates and then load -->
        <div v-if="certificate">
            <!-- Certificate heading and meta info -->
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
                    {{ certificate.title }}
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
                        ">{{ certificate.date }}</span>
                    </div>
                    <div class="flex items-center">
                        <i data-feather="tag" class="w-4 h-4 text-ternary-dark dark:text-ternary-light"></i>
                        <span class="
                            font-general-medium
                            ml-2
                            leading-none
                            text-primary-dark
                            dark:text-primary-light
                        ">{{ certificate.tag }}</span>
                    </div>
                </div>
            </div>

            <!-- Certificate gallery -->
            <div class="flex justify-center mt-12">
                <div class="w-full max-w-4xl">
                    <div class="flex flex-wrap justify-center gap-10">
                        <div v-for="certificateImage in certificate.certificateImages" :key="certificateImage.id">
                            <img :src="certificateImage.img" class="max-w-full h-auto rounded-xl shadow-lg" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Certificate info -->
            <div class="block sm:flex gap-0 sm:gap-10 mt-14">
                <!-- Single certificate left section details -->
                <div class="w-full sm:w-1/3 text-left">
                    <!-- Single certificate technologies -->
                    <div class="mb-7">
                        <p class="
                            font-general-medium
                            text-2xl text-primary-dark
                            dark:text-ternary-light
                            mb-2
                        ">
                            {{ certificate.skillTitle }}
                        </p>
                        <div class="font-general-regular text-primary-dark dark:text-ternary-light">
                            <div v-for="(skill, index) in certificate.skills" :key="index">
                                {{ skill }}
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Single certificate right section details -->
                <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
                    <p class="
                        font-general-medium
                        text-primary-dark
                        dark:text-primary-light
                        text-2xl
                        font-bold
                        mb-1
                    ">
                        {{ certificate.detailsTitle }}
                    </p>
                    <p v-for="certificateDetail in certificate.certificateDetails" :key="certificateDetail.id" class="
                        font-general-regular
                        mb-5
                        text-lg text-primary-dark
                        dark:text-ternary-light
                    ">
                        {{ certificateDetail.details }}
                    </p>
                </div>
            </div>

        </div>

        <!-- Load not found components if no certificate found -->
        <div v-else class="font-general-medium container mx-auto text-center">
            <h1>No certificates yet</h1>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
