const express = require('express');
const router = express.Router();
const postsController = require("../controllers/posts")

//Post Routes
router.post("/createPost", postsController.createPost)

module.exports = router