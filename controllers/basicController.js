
// Get
exports.getRoot = (req, res) => res.send("Get Hello World");
exports.getSub = (req, res) => res.send("Get sub route")
// Post
exports.postRoot = (req, res) => res.send("Post Hello World");
exports.postSub = (req, res) => res.send("Post sub route")
// Put
exports.putRoot = (req, res) => res.send("Put Hello World");
exports.putSub = (req, res) => res.send("Put sub route")
// Delete
exports.deleteRoot = (req, res) => res.send("Delete Hello World");
exports.deleteSub = (req, res) => res.send("Delete sub route")