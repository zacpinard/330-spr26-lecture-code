import mongoose from 'mongoose';
import server from './server';

const PORT = process.env.PORT || 3000;

mongoose
  .connect('mongodb://localhost/330-sample-data')
  .then(() => {
    // eslint-disable-next-line no-console
    console.log('MongoDB connected');

    server.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Server is listening on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error('Failed to connect to MongoDB', error);
    process.exit(1);
  });
