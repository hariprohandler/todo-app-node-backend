const Post = require("../model/posts");

const onSaveBlog = (req, res) => {
  const post = new Post(req.body);
  Post.countDocuments({ title: req.body.title }, (err, count) => {
    if (err || count > 0){
      res.status(400).json({ status: false });
    } 
    else {
      post
        .save()
        .then((resp) => {
          console.log(resp);
          res.status(200).json({ status: true });
          res.end();
        })
        .catch((err) => {
          console.log(err);
          res.status(400).json({ status: false });
          res.end();
        });
    }
  });
};

const getTodoList = (req, res) => {
  Post.find({})
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json({ status: true, posts: result }).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ status: false, posts: [] }).end();
    });
};

/*
const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then(result => {
        res.json({ redirect: '/blogs' });
      })
      .catch(err => {
        console.log(err);
      });
  }
  */

module.exports = {
  onSaveBlog,
  getTodoList,
};
