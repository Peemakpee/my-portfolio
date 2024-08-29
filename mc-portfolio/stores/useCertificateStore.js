// stores/useCertificateStore.js
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useCertificateStore = defineStore('certificateStore', {
    state: () => ({
        certificates: [
            {
                id: uuidv4(),
                title: 'Certificate 1',
                category: 'Web Development',
                img: 'path/to/image1.jpg',
                issueDate: 'June 2023',
            },
            // Add more certificates here
        ],
        certificatesHeading: 'My Certificates',
        certificatesDescription: 'A list of certifications I have earned over the years.',
    }),
    getters: {
        getCertificateById: (state) => (id) => {
            return state.certificates.find(certificate => certificate.id === id);
        },
    },
});
