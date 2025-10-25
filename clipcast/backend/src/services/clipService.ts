export class ClipService {
    private clips: any[] = []; // This will hold the clips data

    constructor() {
        // Initialize with some default clips if needed
    }

    public getAllClips(): any[] {
        return this.clips;
    }

    public getClipById(id: string): any | undefined {
        return this.clips.find(clip => clip.id === id);
    }

    public addClip(clip: any): void {
        this.clips.push(clip);
    }

    public updateClip(id: string, updatedClip: any): boolean {
        const index = this.clips.findIndex(clip => clip.id === id);
        if (index !== -1) {
            this.clips[index] = { ...this.clips[index], ...updatedClip };
            return true;
        }
        return false;
    }

    public deleteClip(id: string): boolean {
        const index = this.clips.findIndex(clip => clip.id === id);
        if (index !== -1) {
            this.clips.splice(index, 1);
            return true;
        }
        return false;
    }
}