import express from 'express';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
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
      const token = jwt.sign({ email: user.email }, 'secret');
      return res.status(200).json({ token });
    }
    return res.status(401).send('unauthorized');
})

router.post('/verify', async (req, res) => {
  try {
    const payload = jwt.verify(token, 'secret', /*{expiresIn: '15m'}*/);
    return res.json({ payload, valid: true})
  } catch (error) {
    return res.status(401).send('unauthorized')
  }
})

export default router;