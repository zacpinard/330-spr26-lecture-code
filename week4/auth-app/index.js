import 'dotenv/config'
import mongoose from 'mongoose';
import server from './server';

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/auth-app').then(() => {
  // eslint-disable-next-line no-console
  console.log('MongoDB connected');

  server.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is listening on http://localhost:${port}`);
  });
});
