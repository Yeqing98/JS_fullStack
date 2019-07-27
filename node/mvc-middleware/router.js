const router = require('express').Router();
const user = require('./controllers/user.controller');
// mvc  路有声明
router.post('/api/login', user.login);

module.exports = router;