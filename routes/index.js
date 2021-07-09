//calling req lib
const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/TodoController');

console.log('router loaded');

//router to homes
router.get('/', TodoController.home);
//router.use('/users', require('./users'));

// for any further routes, access from here
// router.use('/routerName', require('./routerfile));

//router when submit , insert data in db collection
router.post("/ToDO_create",TodoController.create_todo)

//router to delete data
router.get('/delete-todo/', TodoController.deleteTODO);

module.exports = router;