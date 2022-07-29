import User from "../models/user_model.js";
import Post from "../models/post_model.js";

//Create
export const createPost = async (req, res) => {
  try {
    const newPost = await Post.create(req.body);
    return res.status(200).json(newPost);
  } catch (err) {
    res.status(500).json(err);
  }
};

//Update
export const updatePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if(!post) return res.status(401).json('Post Id not Found')
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//Delete
export const deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get post
export const getPost = async (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(401).json("Wrong Credentials");
  try {
    const post = await Post.findById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json(error);
  }
};


//Get all post
export const getAllPost = async (req, res) => {
    const username = req.query.user
    const catName = req.query.cat
    try {
        let posts
        if (username) {
            posts = await Post.find({username})
        }else if(catName){
            posts = await Post.find({categoris:{
                $in:[catName]
            }})
        }else{
            posts = await Post.find()
        }
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json(error);
    }
};
