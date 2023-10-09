
const express = require("express");
const router = express.Router();


const { getNews } = require("../controllers/newsControllers");

router.route('/news').get(getNews);

module.exports = router;
