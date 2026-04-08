import { Router } from 'express';
import widgetRoutes from './widgetRoutes';

const router = Router();

router.use('/widgets', widgetRoutes);

export default router;
