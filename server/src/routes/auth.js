const express = require('express');
const router = express.Router();
const register = require('../controllers/login_register/register');

router.post('/register', (req, res) => {
    try {
        register.register(req, res); 
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;