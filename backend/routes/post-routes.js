const express = require('express');
const router = express.Router();
const postController = require('../controllers/post-controller');

// Create a Post
router.post('/add', postController.addPost);

// Get Post 
router.post('/get', postController.getPost);

// Delete Post by Id
router.post("/:id", postController.deletePost)

module.exports = router;
