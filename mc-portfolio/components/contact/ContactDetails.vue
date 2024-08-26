<script setup>
const props = defineProps({
    contacts: {
        type: Array,
        required: true,
    },
});
</script>

<template>
    <!-- Contact details -->
    <div class="w-full md:w-1/2">
        <div class="text-left max-w-xl px-6">
            <h2 class="
          font-general-medium
          text-2xl text-secondary-dark
          dark:text-primary-light
          mt-8
          mb-8
        ">
                Contact details
            </h2>
            <ul class="font-general-regular">
                <li class="flex" v-for="contact in contacts" :key="contact.id">
                    <i :data-feather="contact.icon" class="w-5 text-gray-500 dark:text-secondary-light mr-4"></i>
                    <a href="#" class="text-lg mb-4 text-ternary-dark dark:text-secondary-light" :class="contact.icon === 'mail' || contact.icon === 'phone'
                            ? 'hover:underline cursor-pointer'
                            : ''
                        " aria-label="Website and Phone">
                        {{ contact.name }}
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
