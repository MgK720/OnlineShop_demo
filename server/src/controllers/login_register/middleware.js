const passport = require('./passportJWT'); // Adjust the path accordingly

const verifyToken = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err || !user) {
      //return res.json({ status: false, msg: 'Unauthorized: Invalid token' });
      next();
    }
    req.user = user;
    next();
  })(req, res, next);
};

module.exports = { verifyToken };



// another option
// const jwt = require('jsonwebtoken');
// const { jwtOptions } = require('../../config/jwtOptions');

// const verifyToken = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (!token) {
//     return res.json({ status: false, msg: 'Unauthorized: Token is missing' });
//   }

//   jwt.verify(token.replace('Bearer ', ''), jwtOptions.secretOrKey, (err, decoded) => {
//     if (err) {
//       return res.json({ status: false, msg: 'Unauthorized: Invalid token' });
//     }

//     req.user = decoded; 
//     next();
//   });
// };

// module.exports = { verifyToken };
