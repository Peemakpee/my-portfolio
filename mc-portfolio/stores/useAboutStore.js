// stores/aboutStore.js
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useAboutStore = defineStore('aboutStore', {
    state: () => ({
        aboutMe: [
            // Personal bio with UUIDs
            { id: uuidv4(), bio: 'Hello there! I’m a web developer with a background in market research and teaching. Although I’ve explored various aspects of software development, my current focus is on web development. I’m eager to connect with fellow tech enthusiasts and contribute to exciting projects. If you’re seeking someone dedicated to innovation and problem-solving, I’d be delighted to explore opportunities to work together.' },
            { id: uuidv4(), bio: 'I specialize in Laravel, Vue.js, and Django, with additional experience in Flutter and VB.NET. My goal is to apply these skills effectively while continuously learning and adapting in this ever-evolving field. Staying current with new technologies and refining my abilities is a key motivation for me.' },
        ],
    }),
});
