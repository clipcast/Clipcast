export interface Clip {
    id: string;
    title: string;
    description: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ClipList {
    clips: Clip[];
    total: number;
}