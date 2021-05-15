const express = require('express');
const router = express.Router();
const postController = require('../controller/postController');

router.get('', postController.getTodoList);
router.post('/saveTodo', postController.onSaveBlog);

module.exports = router;