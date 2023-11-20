const express = require('express');
const router = express.Router();
const items = require("../controllers/items")

router.get('/:category', (req, res) => {
    items.getItemsByCategory(req, res);
});

module.exports = router;