const express = require('express');
const router = express.Router();
const profile = require("../controllers/profile")
const { verifyToken } = require('../controllers/login_register/middleware');

router.get('/currentuser',verifyToken, (req, res) => {
    profile.getProfile(req, res);
});

router.post('/create/currentuser',verifyToken, (req, res) => {
    profile.createProfile(req, res);
});

module.exports = router;