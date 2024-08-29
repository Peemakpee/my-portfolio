import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useTechToolsStore = defineStore('techTools', {
    state: () => ({
        toolsHeading: 'Technologies and tools I have used',
        tools: [
            {
                id: uuidv4(),
                title: 'Vue.js',
                img: '/tech-tools/vuejs.png', // Replace with actual path
                url: 'https://vuejs.org/',
            },
            {
                id: uuidv4(),
                title: 'Laravel',
                img: '/tech-tools/laravel.png', // Replace with actual path
                url: 'https://laravel.com/',
            },
            {
                id: uuidv4(),
                title: 'NPM',
                img: '/tech-tools/npm.png', // Replace with actual path
                url: 'https://www.npmjs.com/',
            },
            {
                id: uuidv4(),
                title: 'Nuxt.js',
                img: '/tech-tools/nuxtjs.png', // Replace with actual path
                url: 'https://nuxtjs.org/',
            },
            {
                id: uuidv4(),
                title: 'Quasar',
                img: '/tech-tools/quasar.png', // Replace with actual path
                url: 'https://quasar.dev/',
            },
            {
                id: uuidv4(),
                title: 'Python',
                img: '/tech-tools/python.png', // Replace with actual path
                url: 'https://www.python.org/',
            },
            {
                id: uuidv4(),
                title: 'PHP',
                img: '/tech-tools/php.png', // Replace with actual path
                url: 'https://www.php.net/',
            },
            {
                id: uuidv4(),
                title: 'Django',
                img: '/tech-tools/django.png', // Replace with actual path
                url: 'https://www.djangoproject.com/',
            },
            {
                id: uuidv4(),
                title: 'Firebase',
                img: '/tech-tools/firebase.png', // Replace with actual path
                url: 'https://firebase.google.com/',
            },
            {
                id: uuidv4(),
                title: 'Supabase',
                img: '/tech-tools/supabase.png', // Replace with actual path
                url: 'https://supabase.com/',
            },
            {
                id: uuidv4(),
                title: 'MySQL',
                img: '/tech-tools/mysql.png', // Replace with actual path
                url: 'https://www.mysql.com/',
            },
            {
                id: uuidv4(),
                title: 'MongoDB',
                img: '/tech-tools/mongodb.png', // Replace with actual path
                url: 'https://www.mongodb.com/',
            },
            {
                id: uuidv4(),
                title: 'PostgreSQL',
                img: '/tech-tools/postgres.png', // Replace with actual path
                url: 'https://www.postgresql.org/',
            },
            {
                id: uuidv4(),
                title: 'Tailwind CSS',
                img: '/tech-tools/tailwindcss.png', // Replace with actual path
                url: 'https://tailwindcss.com/',
            },
            {
                id: uuidv4(),
                title: 'Node.js',
                img: '/tech-tools/nodejs.png', // Replace with actual path
                url: 'https://nodejs.org/',
            },
            {
                id: uuidv4(),
                title: 'Bootsrap',
                img: '/tech-tools/bootstrap.png', // Replace with actual path
                url: 'https://getbootstrap.com/',
            },
            {
                id: uuidv4(),
                title: 'CSS',
                img: '/tech-tools/css.png', // Replace with actual path
                url: 'https://www.w3.org/Style/CSS/',
            },
            {
                id: uuidv4(),
                title: 'HTML',
                img: '/tech-tools/html.png', // Replace with actual path
                url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
            },
            {
                id: uuidv4(),
                title: 'JavaScript',
                img: '/tech-tools/javascript.png', // Replace with actual path
                url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            },
            {
                id: uuidv4(),
                title: 'Java',
                img: '/tech-tools/java.png', // Replace with actual path
                url: 'https://www.oracle.com/java/',
            },
            {
                id: uuidv4(),
                title: 'Flutter',
                img: '/tech-tools/flutter.png', // Replace with actual path
                url: 'https://flutter.dev/',
            },
            {
                id: uuidv4(),
                title: 'VB.NET',
                img: '/tech-tools/vbnet.png', // Replace with actual path
                url: 'https://docs.microsoft.com/en-us/dotnet/visual-basic/',
            },
            {
                id: uuidv4(),
                title: 'GitHub',
                img: '/tech-tools/github.png', // Replace with actual path
                url: 'https://docs.github.com/',
            },
            {
                id: uuidv4(),
                title: 'Docker',
                img: '/tech-tools/docker.png', // Replace with actual path
                url: 'https://docs.docker.com/',
            },
        ],
    }),
    getters: {
        // Example getter to get the number of tools
        toolsCount: (state) => state.tools.length,
        // Example getter to get all tool titles
        toolTitles: (state) => state.tools.map(tool => tool.title),
    },
});
