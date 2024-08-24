import BlogModel from "@/models/BlogModel";
import connectDB from "./db"

const GetAllBlogs = async () => {
   
    return await BlogModel.find({});
}



export default GetAllBlogs;