const express = require('express');
const router = express.Router();
const register = require('../controllers/login_register/register');
const passport = require('passport');
require('../controllers/login_register/login')(passport);

// TODO goHome middleware if logged in
router.post('/register', (req, res) => {
    try {
        register.register(req, res); 
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post("/login", function(req,res,next){passport.authenticate("local-login", function(err,user,info){
    if(err){ next(err); }
    if(!user){ return res.json({error: true, msg: "Invalid username or password"}); }
    req.logIn(user,function(err){
      if(err){ return next(err) }
      req.session.passport = { user: user };
      return res.json({error: false, msg: "signed in", user: user});
    });
  })(req,res,next)
});

router.get("/isloggedin", (req,res) => {
    if (req.user) {
        res.json({status: true, user: req.user})
    }else {
        res.json({status: false})
    }
})


module.exports = router;