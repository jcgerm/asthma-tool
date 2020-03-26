const express = require('express');
const users = require('../controllers/user.controller');

const router = express.Router();

router.post('/register', users.create);

module.exports = router;
