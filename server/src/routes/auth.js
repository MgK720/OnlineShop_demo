const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const register = require('../controllers/login_register/register');
const passport = require('../controllers/login_register/login');
const { verifyToken } = require('../controllers/login_register/middleware');
const { jwtOptions } = require('../config/jwtOptions')
const jwt = require('jsonwebtoken');
const client = require('../../databaseConnection');

router.post('/register', (req, res) => {
    try {
        register.register(req, res); 
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// router.post("/login", function(req,res,next){passport.authenticate("local-login", function(err,user,info){
//     if(err){ next(err); }
//     if(!user){ return res.json({error: true, msg: "Invalid username or password"}); }
//     req.logIn(user,function(err){
//       if(err){ return next(err) }
//       req.session.passport = { user: user };
//       return res.json({error: false, msg: "signed in", user: user});
//     });
//   })(req,res,next)
// });

//przenieść znaczną część tego do controllers
router.post('/login', async (req, res, next) => {
    try {
      const { login, password } = req.body;
  
      const result = await client.query('SELECT * FROM account WHERE login=$1', [login]);
      const user = result.rows[0];
  
      if (!user) {
        return res.json({error: true, msg: "User not found"});
      }
  
      const isPasswordValid = await bcrypt.compare(password, user.password);
  
      if (isPasswordValid) {
        const token = jwt.sign({ id: user.account_id, login: user.login }, jwtOptions.secretOrKey);
        res.json({ token: token, error: false, msg: "Signed in", user: { account_id: user.account_id, login: user.login } });
      } else {
        res.json({error: true, msg: "Incorrect password"});
      }
    } catch (err) {
      console.error('Login error:', err);
      res.json({error: true, msg: "Internal server error"});
    }
  });

router.get("/isloggedin", verifyToken, (req,res) => {
    if (req.user) {
        console.log({status: true, user: req.user, msg: 'User authorized'})
        res.json({status: true, user: req.user, msg: 'User authorized'})
    }else {
        res.json({status: false, msg: 'User not authorized'})
    }
})


module.exports = router;