<script setup>
import { ref, onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';

const contacts = ref([
    {
        id: 1,
        name: "Your Address, Your City, Your Country",
        icon: "map-pin",
    },
    {
        id: 2,
        name: "email@domain.com",
        icon: "mail",
    },
    {
        id: 3,
        name: "555 8888 888",
        icon: "phone",
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
