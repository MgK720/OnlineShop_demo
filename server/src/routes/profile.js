const express = require('express');
const router = express.Router();
const profile = require("../controllers/profile")

router.get('/:account_id', (req, res) => {
    try {
        profile.getProfile(req, res);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

router.post('/create/:account_id', (req, res) => {
    try {
        profile.createProfile(req, res);
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;