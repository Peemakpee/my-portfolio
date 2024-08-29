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
          mb-2
          text-ternary-dark
          dark:text-ternary-light
        ">
                {{ certificatesHeading }}
            </p>
            <!-- Uncomment this if you want to include the description -->
            <!-- <p class="text-lg sm:text-xl text-gray-500 dark:text-ternary-light">
        {{ certificatesDescription }}
      </p> -->
        </div>

        <!-- Filter and search certificates -->
        <div class="mt-8 sm:mt-10">
            <h3 class="
          font-general-regular
          text-center text-secondary-dark
          dark:text-ternary-light
          text-md
          sm:text-xl
          font-normal
          mb-4
        ">
                Search certificates by title or filter by category
            </h3>
            <div class="
          flex
          justify-between
          border-b border-primary-light
          dark:border-secondary-dark
          pb-3
          gap-2
        ">
                <div class="flex justify-between gap-2">
                    <span class="
              hidden
              sm:block
              bg-primary-light
              dark:bg-ternary-dark
              p-2.5
              shadow-sm
              rounded-xl
              cursor-pointer
            ">
                        <i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i>
                    </span>
                    <input v-model="searchCertificate" class="
              font-general-medium
              pl-3
              pr-1
              sm:px-4
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
            " id="name" name="name" type="search" placeholder="Search Certificates" aria-label="Name" />
                </div>
                <CertificatesFilter @change="selectedCertificate = $event" />
            </div>
        </div>

        <!-- Certificates grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
            <div v-for="certificate in filteredCertificates" :key="certificate.id" class="
          rounded-xl
          shadow-lg
          hover:shadow-xl
          cursor-pointer
          mb-10
          sm:mb-0
          bg-secondary-light
          dark:bg-ternary-dark
        " aria-label="Single Certificate">
                <NuxtLink :to="`/certificates/${certificate.id}`">
                    <div>
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
