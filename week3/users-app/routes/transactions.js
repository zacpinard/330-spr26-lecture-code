import { Router } from 'express';
import * as transactionDao from '../daos/transaction';

const router = Router({ mergeParams: true });

router.post('/', async (req, res) => {
  const transaction = {
    ...req.body,
    userId: req.params.userId,
  };

  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send('transaction is required');
    return;
  }

  try {
    const savedTransaction = await transactionDao.create(transaction);
    res.json(savedTransaction);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/stats', async (req, res) => {
  const stats = {};
  res.json(stats);
});

router.get('/:id', async (req, res) => {
  const transaction = await transactionDao.getById(
    req.params.userId,
    req.params.id,
  );

  if (transaction) {
    res.json(transaction);
    return;
  }

  res.sendStatus(404);
});

router.get('/', async (req, res) => {
  let { page, perPage } = req.query;

  page = page ? Number(page) : 0;
  perPage = perPage ? Number(perPage) : 10;

  const transactions = await transactionDao.getAll(
    req.params.userId,
    page,
    perPage,
  );
  res.json(transactions);
});

router.put('/:id', async (req, res) => {
  const transaction = {
    ...req.body,
    userId: req.params.userId,
  };

  if (!req.body || Object.keys(req.body).length === 0) {
    res.status(400).send('transaction is required');
    return;
  }

  const updatedTransaction = await transactionDao.updateById(
    req.params.userId,
    req.params.id,
    transaction,
  );

  res.json(updatedTransaction);
});

router.delete('/:id', async (req, res) => {
  try {
    await transactionDao.deleteById(req.params.userId, req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
