const express = require('express');
const router = express.Router();
const profile = require("../controllers/profile")

router.get('/:account_id', (req, res) => {
    profile.getProfile(req, res);
});

router.post('/create/:account_id', (req, res) => {
    profile.createProfile(req, res);
});

module.exports = router;