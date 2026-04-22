import express from 'express';
import User from './models/user';


const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password })
  if (user) {
    res.status(201).send('created');
  }

  res.status(500).send('server error');


});


export default router;