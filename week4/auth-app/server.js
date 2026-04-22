import express from 'express';
import authRoutes from './routes/auth';
import mongoose from 'mongoose';

const server = express();

server.use(express.json());
server.use(authRoutes);
server.get('/', (req, res) => {
    res.send('Hello World!');
});

export default server;
