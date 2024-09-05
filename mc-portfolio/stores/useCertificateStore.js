// stores/useCertificateStore.js
import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useCertificateStore = defineStore('certificateStore', {
    state: () => ({
        certificatesHeading: 'Certifications',
        certificates: [
            {
                id: "bc042838-f2a6-47db-b252-488a32887279",
                title: "Network Security",
                category: "International Certification",
                img: "certificate/cert1.png",
                date: "July 13, 2023",
                tag: "Information Technology Specialist",
                skillTitle: "Skills",
                detailsTitle: "About Project",
                certificateImages: [
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/its.png",
                    },
                ],
                skills: [
                    "Network Security Fundamentals",
                    "Network Protocols and Security",
                    "User Authentication and Access Control",
                    "Incident Response and Mitigation"
                ],
                certificateDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "The Information Technology Specialist in Network Security certification provides essential skills for protecting network environments. It covers security fundamentals, firewall and intrusion detection management, encryption, user authentication, and incident response, ensuring a solid understanding of key network security measures.",
                    },
                ],
            },
        ],
    }),
    getters:
    {
        getCertificates: (state) => state.certificateDetails,
    },
});
