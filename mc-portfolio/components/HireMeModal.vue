<template>
    <transition name="fade">
        <div v-show="modal" class="font-general-regular fixed inset-0 z-30">
            <!-- Modal body background as backdrop -->
            <div v-show="modal" @click="showModal()" class="
                bg-filter bg-black bg-opacity-50
                fixed
                inset-0
                w-full
                h-full
                z-20
            "></div>
            <!-- Modal contents -->
            <main class="flex flex-col items-center justify-center h-full w-full">
                <transition name="fade-up-down">
                    <div v-show="modal" class="modal-wrapper flex items-center z-30">
                        <div class="
                            modal
                            max-w-md
                            mx-5
                            xl:max-w-xl
                            lg:max-w-xl
                            md:max-w-xl
                            bg-secondary-light
                            dark:bg-primary-dark
                            max-h-screen
                            shadow-lg
                            flex-row
                            rounded-lg
                            relative
                        ">
                            <div class="
                                modal-header
                                flex
                                justify-between
                                gap-10
                                p-5
                                border-b border-ternary-light
                                dark:border-ternary-dark
                            ">
                                <h5 class="text-primary-dark dark:text-primary-light text-xl">
                                    What project are you looking for?
                                </h5>
                                <button class="px-4 text-primary-dark dark:text-primary-light" @click="showModal()">
                                    <i data-feather="x" class="w-8 sm:w-12"></i>
                                </button>
                            </div>
                            <div class="modal-body p-5 w-full h-full">
                                <form @submit.prevent="submitForm" class="max-w-xl m-4 text-left">
                                    <div class="mt-0">
                                        <input v-model="formData.name" class="
                                                w-full
                                                px-5
                                                py-2
                                                border-1 border-gray-200
                                                dark:border-secondary-dark
                                                rounded-md
                                                text-md
                                                bg-secondary-light
                                                dark:bg-ternary-dark
                                                text-primary-dark
                                                dark:text-ternary-light
                                            " id="name" name="name" type="text" required placeholder="Name"
                                            aria-label="Name" />
                                    </div>
                                    <div class="mt-6">
                                        <input v-model="formData.email" class="
                                                w-full
                                                px-5
                                                py-2
                                                border-1 border-gray-200
                                                dark:border-secondary-dark
                                                rounded-md
                                                text-md
                                                bg-secondary-light
                                                dark:bg-ternary-dark
                                                text-primary-dark
                                                dark:text-ternary-light
                                            " id="email" name="email" type="text" required placeholder="Email"
                                            aria-label="Email" />
                                    </div>
                                    <div class="mt-6 relative">
                                        <div class="relative">
                                            <select v-model="formData.subject" class="
                                                    w-full
                                                    px-5
                                                    py-2
                                                    border-1 border-gray-200
                                                    dark:border-secondary-dark
                                                    rounded-md
                                                    text-md
                                                    bg-secondary-light
                                                    dark:bg-ternary-dark
                                                    text-primary-dark
                                                    dark:text-ternary-light
                                                " id="subject" name="subject" required aria-label="Project Category">
                                                <option v-for="category in categories" :key="category.id"
                                                    :value="category.value">
                                                    {{ category.name }}
                                                </option>
                                            </select>
                                            <i data-feather="chevron-down"
                                                class="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300 pointer-events-none"></i>
                                        </div>
                                    </div>

                                    <div class="mt-6">
                                        <textarea v-model="formData.message" class="
                                                w-full
                                                px-5
                                                py-2
                                                border-1 border-gray-200
                                                dark:border-secondary-dark
                                                rounded-md
                                                text-md
                                                bg-secondary-light
                                                dark:bg-ternary-dark
                                                text-primary-dark
                                                dark:text-ternary-light
                                            " id="message" name="message" cols="14" rows="6" aria-label="Details"
                                            placeholder="Project description"></textarea>
                                    </div>

                                    <div class="mt-6 pb-4 sm:pb-1">
                                        <Button title="Send Request" class="
                                                px-4
                                                sm:px-6
                                                py-2
                                                sm:py-2.5
                                                text-white
                                                bg-secondary-dark
                                                dark:bg-ternary-dark
                                                hover:bg-blue-950
                                                dark:hover:bg-secondary-dark
                                                rounded-md
                                                focus:ring-1 focus:ring-indigo-900
                                                duration-500
                                            " type="submit" aria-label="Submit Request" />
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer mt-2 sm:mt-0 py-5 px-8 border0-t text-right">
                                <button class="
                                        px-4
                                        sm:px-6
                                        py-2
                                        bg-gray-600
                                        text-primary-light
                                        hover:bg-ternary-dark
                                        dark:bg-gray-200
                                        dark:text-secondary-dark
                                        dark:hover:bg-primary-light
                                        rounded-md
                                        focus:ring-1 focus:ring-indigo-900
                                        duration-500
                                    " @click="showModal()" aria-label="Close Hire Me Modal">
                                    Close
                                </button>
                            </div>
                        </div>
                        <!-- Success Modal -->
                        <div v-if="showSuccessModal"
                            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                            <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
                                <p class="text-center text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                                    Thank You!
                                </p>
                                <p class="text-center text-gray-600 dark:text-gray-400 mb-6">
                                    Your message has been sent successfully. I appreciate your interest, looking forward
                                    to connecting with you!
                                </p>
                                <div class="text-center">
                                    <Button title="Close" @click="closeModal"
                                        class="px-4 py-2 dark:bg-ternary-dark bg-secondary-dark text-white rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </main>
        </div>
    </transition>
</template>

<script setup>
import { useCategoryStore } from '@/stores/useCategoryStore';
import { defineProps, onMounted, computed } from 'vue';
import { createClient } from '@supabase/supabase-js';
import feather from 'feather-icons';
import Button from './reusable/Button.vue';

const config = useRuntimeConfig();

// Initialize Supabase client using Nuxt.js runtime config
const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
);

const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});
const showSuccessModal = ref(false);

const submitForm = async () => {
    try {
        const { data, error } = await supabase
            .from('contactform')
            .insert([
                {
                    name: formData.value.name,
                    email: formData.value.email,
                    subject: formData.value.subject,
                    message: formData.value.message
                }
            ]);

        if (error) throw error;

        console.log('Form submitted successfully:', data);
        formData.value = { name: '', email: '', subject: '', message: '' };
        showSuccessModal.value = true; // Show success modal
    } catch (error) {
        console.error('Error submitting form:', error);
    }
};

const closeModal = () => {
    showSuccessModal.value = false;
};

const store = useCategoryStore();
const categories = computed(() => store.getCategories);

// Props
const props = defineProps(['showModal', 'modal', 'categories']);

// Methods
const showModal = () => {
    props.showModal();
};

// Lifecycle hooks
onMounted(() => {
    feather.replace(); // Initialize feather icons
});
</script>

<style scoped>
.modal-body {
    max-height: 500px;
}

.bg-gray-800-opacity {
    background-color: #2d374850;
}

@media screen and (max-width: 768px) {
    .modal-body {
        max-height: 400px;
    }
}

.fade-up-down-enter-active {
    transition: all 0.3s ease;
}

.fade-up-down-leave-active {
    transition: all 0.3s ease;
}

.fade-up-down-enter {
    transform: translateY(10%);
    opacity: 0;
}

.fade-up-down-leave-to {
    transform: translateY(10%);
    opacity: 0;
}

.fade-enter-active {
    -webkit-transition: opacity 2s;
    transition: opacity 0.3s;
}

.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
