import { Router } from 'express';
import ClipsController from '../controllers/clipsController';

const router = Router();
const clipsController = new ClipsController();

router.get('/', clipsController.getAllClips.bind(clipsController));
router.post('/', clipsController.createClip.bind(clipsController));
router.get('/:id', clipsController.getClipById.bind(clipsController));
router.delete('/:id', clipsController.deleteClip.bind(clipsController));

export default router;