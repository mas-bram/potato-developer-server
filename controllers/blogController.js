// // Get
// exports.getRoot = (req, res) => res.send("Get Hello World");
// exports.getSub = (req, res) => res.send("Get sub route")
// // Post
// exports.postRoot = (req, res) => res.send("Post Hello World");
// exports.postSub = (req, res) => res.send("Post sub route")
// // Put
// exports.putRoot = (req, res) => res.send("Put Hello World");
// exports.putSub = (req, res) => res.send("Put sub route")
// // Delete
// exports.deleteRoot = (req, res) => res.send("Delete Hello World");
// exports.deleteSub = (req, res) => res.send("Delete sub route")

const postModel = require('../models/blogModel');

// create new post
exports.createNewPost = async  (req, res) => {
    res.send("create new post");
    try {
        const { content, category, tag } = req.body;
        const newPost = await postModel.createNewPost(content, category, tag);
        res.status(201).json(newPost);
        
    } catch (err){
        res.send("error");
        
    }

}

// update post at id
exports.updatePostByPostId = async  (req, res) => {
    const postId = req.params.id; // <-- get the id from the URL
    try {
        const { content, category, tag } = req.body;
        const updatedPost = await postModel.updatePostByPostId(postId, content, category, tag);
        if (!updatedPost) {
            return res.status(404).json({ message: `Post with id ${postId} not found` });
        }
        return res.status(200).json(updatedPost);
        
       
        
    } catch (error) {
                console.error(error);
        return res.status(500).json({ message: "Error updating post", error: error.message });

    }
    // res.send(`update post at id: ${postId}`);

}

// delete post at id
exports.deletePostByPostId = (req, res) => {
    const postId = req.params.id; // <-- get the id from the
    // URL
    try {
        const deletedPost = await postModel.deletePostByPostId(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: `Post with id ${postId} not found` });
        }
        return res.status(200).json(deletedPost);
        
    } catch (error) {
     console.error(error);
        return res.status(500).json({ message: "Error deleting post", error: error.message });
   
    }
    res.send(`delete post at id: ${postId}`);
}

exports.deletePostByPostIdPermanently = async (req, res) => {
    const postId = req.params.id; // <-- get the id from the URL
    try {
        const deletedPost = await postModel.deletePostByPostId(postId);
        if (!deletedPost) {
            return res.status(404).json({ message: `Post with id ${postId} not found` });
        }
        return res.status(200).json(deletedPost);
        
    } catch (error) {
     console.error(error);
        return res.status(500).json({ message: "Error deleting post", error: error.message });
   
    }
    res.send(`delete post at id: ${postId} permanently`);
}

// get all post
exports.getAllPost = async (req, res) => {
    res.send('get all post');
    try {
        const allPost = await postModel.getAllPost();
        res.status(200).json(allPost);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error getting all posts", error: error.message });
    }
}

//get post at id
exports.getPostById = async (req, res) => {
    const postId = req.params.id;
    try {
        const id = req.params.id;
        const post = await postModel.getPostById(id);
        if (!post) {
            return res.status(404).json({ message: `Post with id ${id} not found` });
        }
        return res.status(200).json(post);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Error getting post", error: error.message });
    }
    res.send(`get post at id ${postId}`);
}


