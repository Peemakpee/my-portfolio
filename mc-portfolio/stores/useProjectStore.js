// stores/useProjectStore.js

import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projectsHeading: 'Your Projects Heading',
        projectsDescription: 'Description of your projects',
        projects: [
            {
                id: "9c2f5137-548d-4023-afe4-0cd09b6d791f",
                title: "BTr Status Tagging System",
                category: "Web Application",
                img: "projects/supabase/btr3.png",
                publishDate: "April 24, 2021",
                tag: "Web/VueJS",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Status Tagging System",
                        img: "/projects/supabase/btr1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Status Tagging System",
                        img: "/projects/supabase/btr2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Status Tagging System",
                        img: "/projects/supabase/btr4.png",
                    },
                ],
                technologies: [
                    "VueJS",
                    "Supabase",
                    "JavaScript",
                    "ChartJS",
                    "TailwindCSS",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "The BTr Status Tagging System is a simple web-based application developed for the Bureau of the Treasury, RXI, as part of my internship. It features basic data visualization using ChartJS and is used to monitor and manage the status of incoming and outgoing documents.",
                    },
                ],
            },
            {
                id: "f6b966b7-45c2-48c5-ab26-91f99984d50e",
                title: "MedCare",
                category: "Desktop Application",
                img: "projects/vbnet/med_care3.png",
                publishDate: "June 5, 2024",
                tag: "Desktop/VB.NET",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/med_care1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/med_care2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/med_care4.png",
                    },
                ],
                technologies: [
                    "VB.NET",
                    "MYSQL",
                    "Visual Studio",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "MedCare is a desktop application designed for a medical facility to streamline the storage of patient data and appointments. It implements a stack data structure using the Last-In-First-Out (LIFO) method, ensuring that the latest appointment data is displayed on top of the table view, enabling efficient prioritization.",
                    },
                ],
            },
            {
                id: "0a3576bb-585c-4506-99d4-afebc6fd88b7",
                title: "Diwang App",
                category: "Mobile Application",
                img: "projects/flutter/diwang1.png",
                publishDate: "November 23, 2022",
                tag: "Mobile/Flutter",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/flutter/diwang2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/flutter/diwang3.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/flutter/diwang4.png",
                    },
                ],
                technologies: [
                    "Flutter",
                    "Firebase",
                    "Android Studio",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Diwang, meaning 'Celebration' in Filipino, is a mobile application developed in Flutter to connect event organizers with potential clients. With the surge in events post-pandemic, Diwang aims to simplify the process of finding and booking services like catering, decorations, drinks, and other essential event needs, making it easier for organizers and clients to collaborate.",
                    },
                ],
            },
            {
                id: "b9269f51-eb23-4e66-8b9b-c8ed760e1562",
                title: "Bible Bliss",
                category: "Web Application",
                img: "projects/laravel/bible-bliss1.png",
                publishDate: "October 5, 2023",
                tag: "Web/Laravel",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/laravel/bible-bliss1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/laravel/bible-bliss2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/laravel/bible-bliss1.png",
                    },
                ],
                technologies: [
                    "Laravel",
                    "CSS",
                    "Rapid API",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Bible Bliss is a Laravel-powered web application that serves as a Bible content tool with dynamic content delivery, focusing on retrieving and displaying Bible verses from an external API based on user searches and daily verse updates.",
                    },
                ],
            },
            {
                id: uuidv4(),
                title: "SkyNet",
                category: "Desktop Application",
                img: "projects/vbnet/skynet1.png",
                publishDate: "October 5, 2023",
                tag: "Desktop/VB.NET",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/skynet2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/skynet3.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/skynet4.png",
                    },
                ],
                technologies: [
                    "VB.NET",
                    "MYSQL",
                    "Visual Studio",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Bible Bliss is a Laravel-powered web application that serves as a Bible content tool with dynamic content delivery, focusing on retrieving and displaying Bible verses from an external API based on user searches and daily verse updates.",
                    },
                ],
            },
        ],
    }),

    getters: {
        getProjectDetails: (state) => state.projectDetails,
    },
});
