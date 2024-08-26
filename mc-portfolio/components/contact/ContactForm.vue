<script setup>
import Button from "@/components/reusable/Button.vue"; // Adjust the path as needed
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
            <form @submit.prevent class="font-general-regular space-y-7">
                <div class="">
                    <label class="block text-lg text-secondary-dark dark:text-primary-light mb-2" for="name">Full
                        Name</label>
                    <input class="
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
                    <input class="
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
                    <input class="
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
                    <textarea class="
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
</template>

<style lang="scss" scoped></style>
