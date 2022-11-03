const Post = require("../models/Post")

module.exports = {
    // getPost: async (rec, res) => {
    //     try {
    //         const post = await Post.findById(req.params.id);
    //         res.render("post.ejs", { post: post});
    //     } catch (err) {
    //         console.log(err);
    //     }
    // },
    createPost: async (req, res) => {
        try {
            await Post.create({
                title: req.body.title,
                body: req.body.body,
            });
            console.log("post has been added");
            // res.redirect()

        } catch (err) {
            console.log(err)
        }
    }
}