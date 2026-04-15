import { Router } from 'express';
import * as userDao from '../daos/user';

const router = Router();

router.post('/', async (req, res) => {
  const user = req.body;

  if (!user || Object.keys(user).length === 0) {
    res.status(400).send('user is required');
    return;
  }

  try {
    const savedUser = await userDao.create(user);
    res.json(savedUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get('/', async (req, res) => {
  let { page, perPage } = req.query;

  page = page ? Number(page) : 0;
  perPage = perPage ? Number(perPage) : 10;

  const users = await userDao.getAll(page, perPage);
  res.json(users);
});

router.get('/:id', async (req, res) => {
  const user = await userDao.getById(req.params.id);

  if (user) {
    res.json(user);
    return;
  }

  res.sendStatus(404);
});

router.put('/:id', async (req, res) => {
  const user = req.body;

  if (!user || Object.keys(user).length === 0) {
    res.status(400).send('user is required');
    return;
  }

  const updatedUser = await userDao.updateById(req.params.id, user);
  res.json(updatedUser);
});

router.delete('/:id', async (req, res) => {
  try {
    await userDao.deleteById(req.params.id);
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

export default router;
