import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useProjectStore = defineStore('projectStore', {
    state: () => ({
        projectsHeading: 'Projects Portfolio',
        projects: [
            {
                id: "9c2f5137-548d-4023-afe4-0cd09b6d791f",
                title: "BTr Status Tagging System",
                category: "Web Application",
                img: "projects/supabase/btr5.png",
                publishDate: "May 29, 2024",
                tag: "Web/VueJS",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/btr-tagging-system",
                liveSite: "https://btr-tagging-system.vercel.app/",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Status Tagging System",
                        img: "/projects/supabase/btr6.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Status Tagging System",
                        img: "/projects/supabase/btr7.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Status Tagging System",
                        img: "/projects/supabase/btr8.png",
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
                id: "b9269f51-eb23-4e66-8b9b-c8ed760e1562",
                title: "Bible Bliss",
                category: "Web Application",
                img: "projects/laravel/bible-bliss1.png",
                publishDate: "May 23, 2022",
                tag: "Web/Laravel",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/bible-bliss",
                liveSite: "Not Deployed",
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
                id: "f6b966b7-45c2-48c5-ab26-91f99984d50e",
                title: "MedCare",
                category: "Desktop Application",
                img: "projects/vbnet/med_care3.png",
                publishDate: "May 5, 2024",
                tag: "Desktop/VB.NET",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/medcare",
                liveSite: "Not Deployed",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/med_care3.png",
                    },
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
                id: "2485dd99-262c-4c09-b383-4349aba317a2",
                title: "SkyNet",
                category: "Desktop Application",
                img: "projects/vbnet/skynet1.png",
                publishDate: "February 10, 2023",
                tag: "Desktop/VB.NET",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/Co-Working-Space-Attendance-System",
                liveSite: "Not Deployed",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/skynet2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/skynet1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vbnet/skynet3.png",
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
                            "SkyNet is a desktop application developed in VB.NET designed to assist freelancers and remote workers in finding and managing co-working spaces. Born out of the increased demand for flexible work environments during the pandemic, this simple application enables users to clock in and out, and calculates daily, weekly, and monthly payments based on their usage.",
                    },
                ],
            },
            {
                id: "a503f92e-b35a-4903-8a41-765c7f69c918",
                title: "Hip-Hop Pulse",
                category: "Web Application",
                img: "projects/nuxtjs/pulse1.png",
                publishDate: "April 5, 2024",
                tag: "Web/NuxtJS",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/hiphop-pulse",
                liveSite: "Not Deployed",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Web Application",
                        img: "/projects/nuxtjs/pulse1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/nuxtjs/pulse2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/nuxtjs/pulse3.png",
                    },
                ],
                technologies: [
                    "NuxtJS",
                    "VueJS",
                    "Supabase",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Hip-Hop Pulse is a passion project designed as a simple blog to celebrate and explore the world of hip-hop. Covering its rich history, the trailblazers who shaped the genre, legendary figures, and the evolution of hip-hop today, this blog aims to highlight hip-hop as more than just music—it's a cultural phenomenon. As a hip-hop fan, this project serves as a space to spread awareness and appreciation for the art form and its influence.",
                    },
                ],
            },
            {
                id: "bbb04e57-6165-46eb-96c9-2d6ae4336ae6",
                title: "CCEtracker",
                category: "Web Application",
                img: "projects/vuejs/cce1.png",
                publishDate: "October 27, 2023",
                tag: "Web/Laravel",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/ccetracker-system",
                liveSite: "Not Deployed",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vuejs/cce2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vuejs/cce3.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/vuejs/cce4.png",
                    },
                ],
                technologies: [
                    "VueJS",
                    "MYSQL",
                    "Laravel",
                    "AdminLTE",
                    "Firebase",
                    "ChartJS",
                    "TailwindCSS"
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "CCEtracker is a web-based document management system developed as a capstone project and a requirement for completing my degree. Designed for the Office of the Dean in the College of Computing Education, it enhances data visualization and streamlines document handling. The system allows users to track and manage deliverables efficiently, while administrators can set deadlines, approve documents, and manage templates. Developed using the Agile methodology, CCEtracker addresses challenges in manual tracking, significantly improving academic document management.",
                    },
                ],
            },
            {
                id: "1e8ebcde-feb8-467e-87ba-d2faa1dd639e",
                title: "POS System",
                category: "Web Application",
                img: "projects/laravel/pos1.png",
                publishDate: "October 11, 2022",
                tag: "Web/Laravel",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/POS_and_Inventory_System",
                liveSite: "Not Deployed",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Web Application",
                        img: "/projects/laravel/pos2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/laravel/pos1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/laravel/pos3.png",
                    },
                ],
                technologies: [
                    "Bootstrap",
                    "MYSQL",
                    "Laravel",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "POS and Inventory management system for Acaylar Lumber Trading using Laravel, Bootstrap, and MySQL. The system manages sales, inventory, and customer data with an efficient, user-friendly interface.",
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
                github: "https://github.com/Peemakpee/event_planner",
                liveSite: "Not Deployed",
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
                id: "6f6b0cf8-1a31-48a1-a563-a0525dad3b11",
                title: "ChatBot",
                category: "Web Application",
                img: "projects/django/chatbot1.png",
                publishDate: "May 25, 2024",
                tag: "Web/Django",
                techTitle: "Tools & Technologies",
                detailsTitle: "About Project",
                github: "https://github.com/Peemakpee/gptclone",
                liveSite: "Not Deployed",
                projectImages: [
                    {
                        id: uuidv4(),
                        title: "Web Application",
                        img: "/projects/django/chatbot1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/django/chatbot1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Desktop Application",
                        img: "/projects/django/chatbot1.png",
                    },
                ],
                technologies: [
                    "Django",
                    "Gemini-1.5-Flash API",
                ],
                projectDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "Developed a Django-based chatbot application called 'Chat with AI' using a free Gemini 1.5 Flash API. The project features a humorous background themed around Allen Iverson.",
                    },
                ],
            },
        ],
    }),

    getters: {
        getProjectDetails: (state) => state.projectDetails,
    },
});
