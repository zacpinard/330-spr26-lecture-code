import { Router } from 'express';
import transactionRoutes from './transactions';
import userRoutes from './users';

const router = Router();

router.use('/users', userRoutes);
router.use('/users/:userId/transactions', transactionRoutes);

export default router;
