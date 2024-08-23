const express = require("express");
const router = express.Router();
const blogController = require("./dashBoardController");
const {
  createPostValidation,
  updatePostValidation,
} = require("./dashBoardValidation");
const validate = require("../../middleware/validate");

router.post(
  "/posts",

  validate(createPostValidation),
  blogController.createPost
);
router.get("/posts", blogController.getPosts);
router.get("/posts/:id", blogController.getPost);
router.put(
  "/posts/:id",

  validate(updatePostValidation),
  blogController.updatePost
);
router.delete("/posts/:id", blogController.deletePost);

module.exports = router;
