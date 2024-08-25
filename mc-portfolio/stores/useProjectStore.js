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
                img: "images/web-project-2.jpg",
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
                        img: "../images/ui-project-1.jpg",
                    },
                    {
                        id: uuidv4(),
                        title: "Uber Project Management UI",
                        img: "../images/web-project-1.jpg",
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
                title: "Phoenix Digital Agency",
                category: "Mobile Application",
                img: "images/mobile-project-2.jpg",
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
                        img: "../images/mobile-project-1.jpg",
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
