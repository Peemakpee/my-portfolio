<script setup>
import { ref, computed, onMounted } from 'vue';
import { useProjectStore } from '@/stores/useProjectStore';
import ProjectsFilter from '../components/projects/ProjectsFilter.vue';
import feather from "feather-icons";

const store = useProjectStore();
const selectedProject = ref('');
const searchProject = ref('');

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
});

// Computed properties
const projectsHeading = computed(() => store.projectsHeading);
const projectsDescription = computed(() => store.projectsDescription);
const projects = computed(() => {
  if (props.limit) {
    return store.projects.slice(0, props.limit);
  }
  return store.projects;
});

const filteredProjects = computed(() => {
  if (selectedProject.value) {
    return filterProjectsByCategory();
  } else if (searchProject.value) {
    return filterProjectsBySearch();
  }
  return projects.value;
});



// Methods
function filterProjectsByCategory() {
  return projects.value.filter(item => {
    let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectedProject.value);
  });
}

function filterProjectsBySearch() {
  const project = new RegExp(searchProject.value, 'i');
  return projects.value.filter(el => el.title.match(project));
}

// Lifecycle hook
onMounted(() => {
  feather.replace();
});
</script>

<template>
  <div class="pt-10 sm:pt-20 md:pt-24">
    <!-- Projects grid header -->
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
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
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
        Search projects by title or filter by category
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
          <input v-model="searchProject" class="
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
            " id="name" name="name" type="search" placeholder="Search Projects" aria-label="Name" />
        </div>
        <ProjectsFilter @change="selectedProject = $event" />
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <div v-for="project in filteredProjects" :key="project.id" class="
        rounded-xl
        shadow-lg
        hover:shadow-xl
        dark:hover:shadow-secondary-dark
        cursor-pointer
        mb-10
        sm:mb-0
        bg-secondary-light
        dark:bg-ternary-dark
        overflow-hidden
      " aria-label="Single Project">
        <NuxtLink :to="`/projects/${project.id}`" class="block h-full">
          <div class="aspect-w-16 aspect-h-9 overflow-hidden">
            <img :src="project.img" :alt="project.title" class="w-full h-full object-cover" loading="lazy" />
          </div>
          <div class="text-center px-4 py-6">
            <p class="
              font-general-semibold
              text-xl text-ternary-dark
              dark:text-ternary-light
              font-semibold
              mb-2
            ">
              {{ project.title }}
            </p>
            <span class="
              font-general-medium
              text-lg text-ternary-dark
              dark:text-ternary-light
            ">{{ project.category }}</span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
  /* 16:9 Aspect Ratio */
}

.aspect-w-16>img {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
}
</style>
