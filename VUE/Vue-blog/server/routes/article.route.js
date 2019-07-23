const router = require('express').Router();
const article = require('../../controllers/article.controler');

router.get('/articles', article.getArticle);

module.exports = router;