const router = require("express").Router();
const {
  posts,
  newPost,
  updatePost,
  deletePost,
} = require("../controllers/postMessage.controller");

router
  .get("/posts", posts)
  .post("/post", newPost)
  .put("/update/:id", updatePost)
  .delete("/delete/:id", deletePost);

module.exports = router;
