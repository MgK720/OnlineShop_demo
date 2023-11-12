const jwt = require('jsonwebtoken');
const { jwtOptions } = require('../../config/jwtOptions');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.json({ status: false, msg: 'Unauthorized: Token is missing' });
  }

  jwt.verify(token.replace('Bearer ', ''), jwtOptions.secretOrKey, (err, decoded) => {
    if (err) {
      return res.json({ status: false, msg: 'Unauthorized: Invalid token' });
    }

    req.user = decoded; 
    next();
  });
};

module.exports = { verifyToken };