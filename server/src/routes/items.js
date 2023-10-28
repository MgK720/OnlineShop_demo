const express = require('express');
const router = express.Router();
const items = require("../controllers/items")

router.get('/:category', (req, res) => {
    try {
        items.getItemsByCategory(req, res); // Pass req and res objects
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;