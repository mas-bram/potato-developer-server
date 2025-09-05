// const express = require('express')
// const router = express.Router()
// const controller = require('../controllers/basicController')

// //Get routes
// router.get('/', controller.getRoot)
// router.get('/get', controller.getSub)

// //Post routes
// router.post('/', controller.postRoot)
// router.post('/post', controller.postSub)

// //Put routes
// router.put('/', controller.putRoot)
// router.put('/put', controller.putSub)

// //Delete routes
// router.delete('/', controller.deleteRoot)
// router.delete('/del', controller.deleteSub)

// module.exports = router;

const express = require("express");
const router = express.Router();
const controller = require("../controllers/blogController");
//get all post
router.get("/", controller.getAllPost); // list all post
router.get("/:id", controller.getPostById); // get post with id
router.post("/", controller.createNewPost); // create new post
router.put("/:id", controller.updatePostByPostId); // update a post at id
router.put("/:id", controller.deletePostByPostId); // soft delete a post
router.delete("/:id", controller.deletePostByPostIdPermanently); // delete a post permanently
module.exports = router;
