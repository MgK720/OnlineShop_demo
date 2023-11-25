const passport = require('./passportJWT'); 
const client = require('../../../databaseConnection');

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

const isAccountHaveProfile = async (req, res, next) => {
  if(req.user){
    try{
      console.log(req.user.account_id);
      const isAccountHaveProfile = await client.query('Select * from profile where account_id=$1', [req.user.account_id])
      console.log(isAccountHaveProfile)
      if(isAccountHaveProfile.rowCount){
        console.log('This account have profile')
        req.isAccountHaveProfile = true;
      }else{
        console.log("This account dont have profile")
        req.isAccountHaveProfile = false;
      }
      next();
    }catch(e){
      console.error(e);
      res.status(500).json({status: false, error: 'Internal server Error'})
      return;
    }
  }else{
      res.status(401).json({status: false, error: 'User not logged in'})
      return;
  }
};

module.exports = { verifyToken, isAccountHaveProfile };



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
