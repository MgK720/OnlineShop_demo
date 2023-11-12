const express = require('express');
const router = express.Router();
const register = require('../controllers/login_register/register');
const login = require('../controllers/login_register/login');
const { verifyToken } = require('../controllers/login_register/middleware');

router.post('/register', (req, res) => {
    try {
        register.register(req, res); 
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/login', async (req, res, next) => {
    try{
        login.login(req,res);
    }catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});


//test
router.get("/isloggedin", verifyToken, (req,res) => {
    if (req.user) {
        console.log({status: true, user: req.user, msg: 'User authorized'})
        res.json({status: true, user: req.user, msg: 'User authorized'})
    }else {
        res.json({status: false, msg: 'User not authorized'})
    }
})


module.exports = router;