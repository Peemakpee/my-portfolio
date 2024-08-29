// stores/useProjectStore.js

import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projectsHeading: 'Your Projects Heading',
        projectsDescription: 'Description of your projects',
        projects: [
            {
                id: uuidv4(),
                title: "Google Health Platform",
                category: "Web Application",
                img: "projects/vbnet/med_care3.png",
                publishDate: "Nov 04, 2021",
                tag: "UI / Frontend",
                clientTitle: "About Client",
                objectivesTitle: "Objective",
                objectivesDetails:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
                techTitle: "Tools & Technologies",
                detailsTitle: "Challenge",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Uber Project Management UI",
                        img: "/projects/vbnet/med_care1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Uber Project Management UI",
                        img: "/projects/vbnet/med_care2.png",
                    },
                ],
                companyInfos: [
                    {
                        id: uuidv4(),
                        title: "Name",
                        details: "Company Ltd",
                    },
                    {
                        id: uuidv4(),
                        title: "Services",
                        details: "UI Design & Frontend Development",
                    },
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Nuxt.js",
                    "TailwindCSS",
                    "AdobeXD",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
                    },
                ],
            },
            {
                id: uuidv4(),
                title: "Diwang App",
                category: "Mobile Application",
                img: "projects/supabase/btr3.png",
                publishDate: "Nov 04, 2021",
                tag: "UI / Frontend",
                clientTitle: "About Client",
                objectivesTitle: "Objective",
                objectivesDetails:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
                techTitle: "Tools & Technologies",
                detailsTitle: "Challenge",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Phoenix Digital Agency",
                        img: "projects/laravel/bible-bliss2.png",
                    },
                ],
                companyInfos: [
                    {
                        id: uuidv4(),
                        title: "Name",
                        details: "Company Ltd",
                    },
                    {
                        id: uuidv4(),
                        title: "Services",
                        details: "UI Design & Frontend Development",
                    },
                ],
                technologies: [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Nuxt.js",
                    "TailwindCSS",
                    "AdobeXD",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
                    },
                ],
            },
        ],
    }),

    getters: {
        getProjectDetails: (state) => state.projectDetails,
    },
});
