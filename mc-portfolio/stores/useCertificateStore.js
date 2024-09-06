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
            {
                id: "80f6ce10-2256-404c-b289-4c56c71dd658",
                title: "Computer System Servicing",
                category: "Local Certification",
                img: "certificate/tesda.png",
                date: "September 06, 2022",
                tag: "TESDA National Certification",
                skillTitle: "Skills",
                detailsTitle: "About Project",
                certificateImages: [
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/tesda1.png",
                    },
                ],
                skills: [
                    "Computer Hardware Servicing",
                    "Network Installation and Configuration",
                    "Software Installation and Maintenance",
                    "System Troubleshooting",
                    "Basic Networking"
                ],
                certificateDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "The TESDA NC2 in Computer System Servicing certification provides comprehensive skills in computer hardware, software installation, network setup, and basic troubleshooting. It qualifies the holder to install and maintain computer systems and networks, ensuring they can provide essential IT support and maintenance services.",
                    },
                ],
            },
            {
                id: "5940c5d7-cdc8-46e0-ab5e-951d503e0d34",
                title: "Coursera E-Learning",
                category: "Online Certification",
                img: "certificate/coursera.png",
                date: "April 22, 2024",
                tag: "Online Learning Achievements",
                skillTitle: "Skills",
                detailsTitle: "About Project",
                certificateImages: [
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/google1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/google2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/meta1.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/meta2.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/meta3.png",
                    },
                    {
                        id: uuidv4(),
                        title: "Certification",
                        img: "/certificate/meta4.png",
                    },
                ],
                skills: [
                    "Data Analysis",
                    "Technical Support",
                    "Version Control (Git/GitHub)",
                    "JavaScript Programming",
                    "HTML and CSS",
                    "Front-End Development"
                ],
                certificateDetails: [
                    {
                        id: uuidv4(),
                        details:
                            "The following online certifications were completed through Coursera. Courses authorized by Google include 'Foundations: Data, Data, Everywhere' and 'Technical Support Fundamentals'. Certifications from Meta cover 'Version Control', 'Programming with JavaScript', 'HTML and CSS in depth', and 'Introduction to Front-End Development'. These courses provide essential skills for both data management and web development.",
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
