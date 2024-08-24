import mongoose from "mongoose";


const commentSchema = new mongoose.Schema({
    content: String,
    authorId: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
    blogId: {type: mongoose.Schema.Types.ObjectId, ref: "Blog"},
    createdAt: {type: Date, default: Date.now}
})


const Comment = mongoose.models.Comment || mongoose.model("Comment", commentSchema);


export default Comment;