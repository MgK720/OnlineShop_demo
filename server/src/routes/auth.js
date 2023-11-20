const express = require('express');
const router = express.Router();
const register = require('../controllers/login_register/register');
const login = require('../controllers/login_register/login');
const { verifyToken } = require('../controllers/login_register/middleware');

router.post('/register', (req, res) => {
    register.register(req, res); 
});

router.post('/login', async (req, res, next) => {
    login.login(req,res);
});


//test
router.get("/isloggedin", verifyToken, (req,res) => {
    //req.user.isOwner tak moge sprawdzić backendowo czy to jest właściciel czy nie
    if (req.user) {
        console.log({status: true, user: req.user, msg: 'User logged in'})
        res.json({status: true, user: req.user, msg: 'User logged in'})
    }else {
        res.status(401).json({status: false, error: 'User not logged in'})
    }
})


module.exports = router;