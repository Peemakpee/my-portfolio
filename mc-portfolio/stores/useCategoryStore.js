import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useCategoryStore = defineStore('categoryStore', {
    state: () => ({
        categories: [
            { id: uuidv4(), value: 'web', name: 'Web Application' },
            { id: uuidv4(), value: 'mobile', name: 'Mobile Application' },
            { id: uuidv4(), value: 'desktop', name: 'Desktop Application' },
        ],
    }),

    getters: {
        getCategories: (state) => state.categories,
    },
});
