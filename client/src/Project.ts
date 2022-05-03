export type ImageURLObject = {
    original: string;
    thumbnail: string;
}

export interface Project{
    id: number;
    project: string;
    background: string;
    title: string;
    tech: string;
    description: string;
    siteURL: string;
    enableLink: boolean;
    images: ImageURLObject[];
}