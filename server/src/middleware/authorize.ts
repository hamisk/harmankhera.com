import jwt from 'jsonwebtoken';
import { env } from 'process';

module.exports = (req, res, next) => {
  // Must have headers: Authorization: `Bearer ${token}`
  if (!req.headers.authorization) {
    console.log('Unauthorized attempt');
    return res.sendStatus(400);
  }
  // get token from header
  const token = req.headers.authorization.split(' ')[1];

  // use jwt.verify with our secret key to validate the token
  jwt.verify(token, env.JWT_SECRET_KEY!, (err, decoded) => {
    // if invalid token, send 403
    if (err) {
      return res.status(403).json({
        message: 'Invalid token provided',
      });
    }

    req.decoded = decoded;
    next();
  });
};
