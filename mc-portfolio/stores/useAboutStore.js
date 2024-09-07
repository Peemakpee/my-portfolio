// stores/aboutStore.js
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useAboutStore = defineStore('aboutStore', {
    state: () => ({
        aboutMe: [
            // Personal bio with UUIDs
            { id: uuidv4(), bio: 'Hello there! I’m a web developer with a diverse background that includes market research and practical experience in different areas of software development. My current focus is on web development, and I am excited to connect with fellow tech enthusiasts and contribute to innovative projects. If you’re looking for someone dedicated to problem-solving and innovation, I’d love to explore opportunities to collaborate.' },
            { id: uuidv4(), bio: 'I specialize in Laravel, Vue.js, and Django, and have additional experience with Flutter and VB.NET. My goal is to leverage these skills effectively while staying abreast of new technologies and continuously improving my expertise. I am driven by the challenge of adapting and evolving in this dynamic field.' },
        ],
    }),
});
