<script setup>
import { ref, computed, onMounted } from 'vue';
import { useCertificateStore } from '@/stores/useCertificateStore';
import CertificatesFilter from './CertificatesFilter.vue';

const store = useCertificateStore();
const selectedCertificate = ref('');
const searchCertificate = ref('');

// Computed properties
const certificatesHeading = computed(() => store.certificatesHeading);
const certificatesDescription = computed(() => store.certificatesDescription);
const certificates = computed(() => store.certificates);

const filteredCertificates = computed(() => {
    if (selectedCertificate.value) {
        return filterCertificatesByCategory();
    } else if (searchCertificate.value) {
        return filterCertificatesBySearch();
    }
    return certificates.value;
});

// Methods
function filterCertificatesByCategory() {
    return certificates.value.filter(item => {
        let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
        return category.includes(selectedCertificate.value);
    });
}

function filterCertificatesBySearch() {
    const certificate = new RegExp(searchCertificate.value, 'i');
    return certificates.value.filter(el => el.title.match(certificate));
}

// Lifecycle hook
onMounted(() => {
    // Any setup needed
});
</script>

<template>
    <div class="pt-10 sm:pt-20 md:pt-24">
        <!-- Certificates grid header -->
        <div class="text-center">
            <p class="
          font-general-semibold
          text-2xl
          sm:text-5xl
          font-semibold
          mb-10
          text-primary-dark
          dark:text-ternary-light
        ">
                {{ certificatesHeading }}
            </p>
        </div>

        <!-- Certificates grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            <div v-for="certificate in filteredCertificates" :key="certificate.id" class="
          rounded-xl
          shadow-lg
          hover:shadow-xl
          cursor-pointer
          dark:hover:shadow-secondary-dark
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
        " aria-label="Single Certificate">
                <NuxtLink :to="`/certificate/${certificate.id}`">
                    <div class="flex justify-center">
                        <img :src="certificate.img" :alt="certificate.title" class="rounded-t-xl border-none" />
                    </div>
                    <div class="text-center px-4 py-6">
                        <p class="
                font-general-semibold
                text-xl text-ternary-dark
                dark:text-ternary-light
                font-semibold
                mb-2
              ">
                            {{ certificate.title }}
                        </p>
                        <span class="
                font-general-medium
                text-lg text-ternary-dark
                dark:text-ternary-light
              ">{{ certificate.category }}</span>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
