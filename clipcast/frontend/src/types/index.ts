export interface Clip {
    id: string;
    title: string;
    description: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface ClipListProps {
    clips: Clip[];
}

export interface ClipItemProps {
    clip: Clip;
}