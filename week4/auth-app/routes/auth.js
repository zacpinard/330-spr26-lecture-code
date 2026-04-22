import express from 'express';
import bcrypt from 'bcrypt'
import User from '../models/user';


const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);


  try {
    const user = await User.create({ email, password: hashedPassword })
    if (user) {
      return res.status(201).send('created');
    }
    return res.status(500).send('server error');

  } catch (error) {
    return res.status(500).send('server error');

  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(404).send('Not found');
  }

  const hashedPassword = user.password;
  const isAuthenticated = await bcrypt.compare(password, hashedPassword);
    if (isAuthenticated) {
      return res.status(200).send('authenticated');
    }

    return res.status(401).send('unauthorized');
})


export default router;