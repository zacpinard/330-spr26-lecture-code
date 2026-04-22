import express from 'express';
import authRoutes from './routes/auth';
import mongoose from 'mongoose';

const server = express();

// server.use((req, res, next) => {
//     console.log(`${req.method} ${req.path}`);
//     next();
// })
server.use(express.json());
server.use(authRoutes);
server.get('/', (req, res) => {
    res.send('Hello World!');
});

export default server;
