const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:String,
    message:String
});

const Post = mongoose.model("posts", postSchema);
module.exports = Post;
