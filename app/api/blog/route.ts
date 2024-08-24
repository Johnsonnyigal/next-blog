import { NextRequest, NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import BlogModel from "@/models/BlogModel";
import connectDB from "@/utils/db";
import GetAllBlogs from "@/utils/getAllBlogs";



export async function GET(request: any) {
    await connectDB();

    const blogId = request.nextUrl.searchParams.get("id")
    if (blogId) {
        try {
            const blog = await BlogModel.findById(blogId);
            if (blog) {
                return NextResponse.json(blog);
            } else {
                return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
            }
        } catch (error) {
            return NextResponse.json({ error: 'Invalid ID format' }, { status: 400 });
        }
    } else {
        await connectDB();

        const blogs = await GetAllBlogs();
        return NextResponse.json(blogs);
    }
}

export async function POST(request: Request) {

    try {
        await connectDB();
        const formData = await request.formData();
        const timestamp = Date.now();

        const image = formData.get("image") as File | null;
        if (!image) {
            return NextResponse.json({ error: "No image provided" }, { status: 400 });
        }

        const imageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(imageByteData);
        
        const filePath = path.join(process.cwd(), "public", `${timestamp}_${image.name}`);
        await writeFile(filePath, buffer);
        const imgUrl = `/${timestamp}_${image.name}`;

        const blogData = {
            heading: `${formData.get("heading")}`,
            content: `${formData.get("content")}`,
            category: `${formData.get("category")}`,
            author: `${formData.get("author")}`,
            image: `${imgUrl}`,
            authorImg: `${formData.get("authorImg")}`
        }

        await BlogModel.create(blogData);
        console.log("Blog Saved");
       
        return NextResponse.json({success: true, msg: "Blog Added"});
    } catch (error) {
        console.error("Error in POST:", error);
        return NextResponse.json({ error: "Failed to process image upload" }, { status: 500 });
    }
}
