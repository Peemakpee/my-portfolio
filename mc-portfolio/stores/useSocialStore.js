import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useSocialStore = defineStore('socialStore', {
    state: () => ({
        socialProfiles: [
            { id: uuidv4(), name: 'GitHub', icon: 'github', url: 'https://github.com/Peemakpee' },
            { id: uuidv4(), name: 'Facebook', icon: 'facebook', url: 'https://www.facebook.com/mcphycabanes/' },
            { id: uuidv4(), name: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/mc-phy-cabanes-6b35b31b7/' },
            { id: uuidv4(), name: 'Google Devs', icon: 'code', url: 'https://g.dev/peemak' },
        ],
        copyrightDate: new Date().getFullYear(),
    }),

    getters: {
        getSocialProfiles: (state) => state.socialProfiles,
    },
});
