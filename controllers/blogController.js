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

// create new post
exports.createNewPost = (req, res) => {
    res.send("create new post");
}

// update post at id
exports.updatePostByPostId = (req, res) => {
    const postId = req.params.id; // <-- get the id from the URL
    res.send(`update post at id: ${postId}`);

}

// delete post at id
exports.deletePostByPostId = (req, res) => {
    const postId = req.params.id; // <-- get the id from the URL
    res.send(`delete post at id: ${postId}`);
}
exports.deletePostByPostIdPermanently = (req, res) => {
    const postId = req.params.id; // <-- get the id from the URL
    res.send(`delete post at id: ${postId} permanently`);
}

// get all post
exports.getAllPost = (req, res) => {
    res.send('get all post')
}

//get post at id
exports.getPostById = (req, res) => {
    const postId = req.params.id;
    res.send(`get post at id ${postId}`);
}


