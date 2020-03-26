const Post = require('../models/post-model');

// Create a Post
exports.addPost = (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
    videoLink: req.body.videoLink,
  });
  console.log("Post data>>", post);
  post.save().then(createdPost => {
    console.log(createdPost);
    res.status(201).json({
      message: "Post Created successfully",
      post: {
        ...createdPost,
        id: createdPost._id
      }
    });
  }).catch(error => {
    res.status(500).json({
      message: "Creating Post failed!"
    })
  });
}

// Get Post 
exports.getPost = (req, res, next) => {
  Post.find().then(documents => {
    // console.log(documents);
    res.status(200).json({
      message: 'Posts fetched!!!',
      posts: documents
    });
  }).catch(error => {
    res.status(500).json({
      message: "Getting Posts failed!"
    })
  });
}

// // Delete Post
exports.deletePost = (req, res, next) => {
  Post.deleteOne({ _id: req.body.id }).then(
    result => {
      if (result.n > 0) {
        res.status(200).json({ message: "Deletion successful!" });
      } else {
        res.status(401).json({ message: "Not deleted!" });
      }
    }
  ).catch(error => {
    res.status(500).json({
      message: "Deleting Post failed!"
    })
  });
}
