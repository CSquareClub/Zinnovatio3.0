export interface IEvent {
    id: number;
    title: string;
    year: string;
    description: string;
    imageCount: number;
    featured: boolean;
    gradient: string;
    highlight: string;
}

export interface IGalleryImage {
    id: number;
    event: string;
    src: string;
    alt: string;
    size: string;
    featured: boolean;
}

