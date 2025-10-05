import type { IEvent, IGalleryImage } from "../types/IGallery";


export const events: IEvent[] = [
    {
        id: 1,
        title: "Zinnovatio 1.0",
        year: "2023",
        description: "The Inaugural Edition",
        imageCount: 24,
        featured: true,
        gradient: "from-gray-600 to-gray-800",
        highlight: "bg-gradient-to-r from-gray-500 to-gray-700"
    },
    {
        id: 2,
        title: "Zinnovatio 2.0",
        year: "2024",
        description: "Innovation Unleashed",
        imageCount: 36,
        featured: true,
        gradient: "from-gray-500 to-gray-700",
        highlight: "bg-gradient-to-r from-gray-400 to-gray-600"
    },
    {
        id: 3,
        title: "Zinnovatio 3.0",
        year: "2025",
        description: "Future of Tech",
        imageCount: 48,
        featured: false,
        gradient: "from-gray-700 to-black",
        highlight: "bg-gradient-to-r from-gray-600 to-gray-800"
    }
];

export const galleryImages: IGalleryImage[] = [
    { id: 1, event: "Zinnovatio 1.0", src: "/gallery/zinnovatio1-1.jpg", alt: "Opening Ceremony 1.0", size: "large", featured: true },
    { id: 2, event: "Zinnovatio 2.0", src: "/gallery/zinnovatio2-1.jpg", alt: "Registration 2.0", size: "large", featured: true },
    { id: 3, event: "Zinnovatio 1.0", src: "/gallery/zinnovatio1-2.jpg", alt: "Hackathon Teams 1.0", size: "medium", featured: false },
    { id: 4, event: "Zinnovatio 2.0", src: "/gallery/zinnovatio2-2.jpg", alt: "Coding Marathon 2.0", size: "medium", featured: false },
    { id: 5, event: "Zinnovatio 1.0", src: "/gallery/zinnovatio1-3.jpg", alt: "Prize Distribution 1.0", size: "small", featured: false },
    { id: 6, event: "Zinnovatio 2.0", src: "/gallery/zinnovatio2-3.jpg", alt: "Innovation Showcase 2.0", size: "small", featured: false },
    { id: 7, event: "Zinnovatio 1.0", src: "/gallery/zinnovatio1-4.jpg", alt: "Tech Talks 1.0", size: "medium", featured: false },
    { id: 8, event: "Zinnovatio 2.0", src: "/gallery/zinnovatio2-4.jpg", alt: "Awards Ceremony 2.0", size: "large", featured: true },
    { id: 9, event: "Zinnovatio 3.0", src: "/gallery/zinnovatio3-1.jpg", alt: "Coming Soon 3.0", size: "small", featured: false },
];