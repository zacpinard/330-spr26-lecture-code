import express from 'express';

const server = express();

server.use(express.json());
server.get('/', (req, res) => {
    res.send('Hello World!');
});

export default server;
