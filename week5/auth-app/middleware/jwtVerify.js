import jwt from 'jsonwebtoken';

const jwtVerify = (req, res, next) => {
    const [, token] = req.headers.authorization.split(' ');

    try {
        const payload = jwt.verify(token, 'secret');
        req.user = payload;
        return next();
    } catch (error) {
        return res.status(401).send('unauthorized');
    }
};

export default jwtVerify;