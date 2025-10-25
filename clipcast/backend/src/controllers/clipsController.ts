export class ClipsController {
    constructor(private clipService: ClipService) {}

    async createClip(req, res) {
        try {
            const clipData = req.body;
            const newClip = await this.clipService.createClip(clipData);
            res.status(201).json(newClip);
        } catch (error) {
            res.status(500).json({ message: 'Error creating clip', error });
        }
    }

    async getClips(req, res) {
        try {
            const clips = await this.clipService.getClips();
            res.status(200).json(clips);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving clips', error });
        }
    }

    async deleteClip(req, res) {
        try {
            const clipId = req.params.id;
            await this.clipService.deleteClip(clipId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting clip', error });
        }
    }
}