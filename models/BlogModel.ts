import mongoose from "mongoose";

 

 const blogSchema = new mongoose.Schema({
    heading: {type: String, required: true},
    content: {type: String, required: true},
    image: {type: String , required: true},
    author: {type: String, required: true},
    authorImg: {type: String, required: true},
    date: {
      type: Date,
      default: Date.now()
    }
 })


 const BlogModel = mongoose.models.Blog || mongoose.model("Blog", blogSchema);

 export default BlogModel;