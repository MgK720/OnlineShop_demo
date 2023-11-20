const express = require('express');
const router = express.Router();
const categories = require("../controllers/categories")

router.get('/', (req, res) => {
    categories.getAllCategories(req, res); 
});

module.exports = router;