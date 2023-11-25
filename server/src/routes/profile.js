const express = require('express');
const router = express.Router();
const profile = require("../controllers/profile")
const { verifyToken, isAccountHaveProfile } = require('../controllers/login_register/middleware');

router.get('/currentuser',verifyToken, (req, res) => {
    profile.getProfile(req, res);
});

router.post('/create/currentuser',verifyToken, isAccountHaveProfile, (req, res) => {
    profile.createProfile(req, res);
});

router.put('/update/currentuser',verifyToken, isAccountHaveProfile, (req, res) => {
    profile.updateProfile(req, res);
});

module.exports = router;