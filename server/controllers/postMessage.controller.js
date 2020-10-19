const ObjectID = require('mongoose').Types.ObjectId
const User = require("../models/postMessages.model");

exports.posts = async (req, res) => {
  return await User.find((err, posts) => {
    if (!err) res.send(posts);
    else
      console.log(
        `error while retriving records! :` + JSON.stringify(err, undefined, 2)
      );
  });
};

exports.newPost = async (req, res) => {
  var newRecord = new User({
    title: req.body.title,
    message: req.body.message,
  });

  await newRecord.save((err, doc) => {
    if (!err) res.send(doc);
    else
      console.log(
        "error while creating new record :" + JSON.stringify(err, undefined, 2)
      );
  });
};


exports.updatePost = async(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('no records with the given id :'+req.params.id)

    var updateRecord = {
        title:req.body.title,
        message:req.body.message
    }

    await User.findByIdAndUpdate(req.params.id,{$set:updateRecord},(err,doc)=>{
        if(!err) res.send(doc)
        else console.log('error while updating a record! :' +JSON.stringify(err,undefined,2))
    })
}


exports.deletePost = async(req,res)=>{
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('no records with the given id :'+req.params.id)

    await User.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err) res.send(doc)
        else console.log('error while deleting a record! :' +JSON.stringify(err,undefined,2))
    })
}