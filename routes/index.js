const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

console.log('router loaded');


router.get('/', TodoController.home);
//router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;