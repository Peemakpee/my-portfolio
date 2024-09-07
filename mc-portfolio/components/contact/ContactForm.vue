<script setup>
import { ref } from 'vue';
import { createClient } from '@supabase/supabase-js';
import Button from "@/components/reusable/Button.vue";

const config = useRuntimeConfig();

// Initialize Supabase client using Nuxt.js runtime config
const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabaseKey
);

// Form data and modal visibility
const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
});
const showSuccessModal = ref(false); // Control success modal visibility

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
</script>

<template>
    <!-- Contact form -->
    <div class="w-full md:w-1/2">
        <div class="
        leading-loose
        max-w-xl
        m-4
        p-7
        bg-secondary-light
        dark:bg-ternary-dark
        rounded-xl
        shadow-xl
        text-left
      ">
            <p class="
          font-general-medium
          text-secondary-dark
          dark:text-primary-light
          text-2xl
          mb-8
        ">
                Contact Form
            </p>
            <form @submit.prevent="submitForm" class="font-general-regular space-y-7">
                <div>
                    <label class="block text-lg text-secondary-dark dark:text-primary-light mb-2" for="name">Full
                        Name</label>
                    <input v-model="formData.name" class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-secondary-dark
              border-opacity-50
              text-ternary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-primary-dark
              rounded-md
              shadow-sm
              text-md
            " id="name" name="name" type="text" required placeholder="Your Name" aria-label="Name" />
                </div>
                <div class="mt-6">
                    <label class="block text-lg text-secondary-dark dark:text-primary-light mb-2"
                        for="email">Email</label>
                    <input v-model="formData.email" class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-secondary-dark
              border-opacity-50
              text-ternary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-primary-dark
              rounded-md
              shadow-sm
              text-md
            " id="email" name="email" type="email" required placeholder="Your Email" aria-label="Email" />
                </div>
                <div class="mt-6">
                    <label class="block text-lg text-secondary-dark dark:text-primary-light mb-2"
                        for="subject">Subject</label>
                    <input v-model="formData.subject" class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-secondary-dark
              border-opacity-50
              text-ternary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-primary-dark
              rounded-md
              shadow-sm
              text-md
            " id="subject" name="subject" type="text" required placeholder="Subject" aria-label="Subject" />
                </div>

                <div class="mt-6">
                    <label class="block text-lg text-secondary-dark dark:text-primary-light mb-2"
                        for="message">Message</label>
                    <textarea v-model="formData.message" class="
              w-full
              px-5
              py-2
              border border-gray-300
              dark:border-secondary-dark
              border-opacity-50
              text-ternary-dark
              dark:text-secondary-light
              bg-ternary-light
              dark:bg-primary-dark
              rounded-md
              shadow-sm
              text-md
            " id="message" name="message" cols="14" rows="6" aria-label="Message"></textarea>
                </div>

                <div class="mt-6">
                    <Button title="Send Message" class="
              px-4
              py-2.5
              text-white
              tracking-wider
              bg-secondary-dark
              dark:bg-primary-dark
              hover:bg-blue-950
              dark:hover:bg-blue-950
              focus:ring-1 focus:ring-indigo-900
              rounded-lg
              duration-500
            " type="submit" aria-label="Send Message" />
                </div>
            </form>
        </div>
    </div>

    <!-- Success Modal -->
    <div v-if="showSuccessModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
            <p class="text-center text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Thank You!
            </p>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-6">
                Your message has been sent successfully. I appreciate your interest, looking forward to connecting with you!
            </p>
            <div class="text-center">
                <Button title="Close" @click="closeModal" class="px-4 py-2 dark:bg-ternary-dark bg-secondary-dark text-white rounded-lg" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>
