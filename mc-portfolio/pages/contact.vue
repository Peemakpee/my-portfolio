<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';

const contacts = ref([
    {
        id: 1,
        name: "Feria Street, Calinan, Davao City , Philippines",
        icon: "map-pin",
    },
    {
        id: 2,
        name: "cabanesmcphy123@gmail.com",
        icon: "mail",
    },
    {
        id: 3,
        name: "+63 976-537-5605",
        icon: "smartphone",
    },
]);

onMounted(() => {
    feather.replace();
});

onUpdated(() => {
    feather.replace();
});
</script>

<template>
    <div class="
      container
      mx-auto
      flex flex-col-reverse
      md:flex-row md:py-10 md:mt-20
    ">
        <!-- Contact form -->
        <ContactForm />

        <!-- Contact details -->
        <ContactDetails :contacts="contacts" />
    </div>
</template>
