import express from 'express';
import User from './models/user';


const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.create({ email, password })
    if (user) {
      return res.status(201).send('created');
    }
    return res.status(500).send('server error');

  } catch (error) {
    return res.status(500).send('server error');

  }



});


export default router;