const express = require('express');
const router = express.Router();
const categories = require("../controllers/categories")

router.get('/', (req, res) => {
    try {
        categories.getAllCategories(req, res); 
    } catch (e) {
        console.log(e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;