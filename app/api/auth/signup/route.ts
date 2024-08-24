import connectDB from "@/utils/db";
import User from "@/models/UserModel";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

async function handler(req: Request) {
    if (req.method !== "POST") {
        return NextResponse.json({message: "Method Not Allowed"}, {status: 405}) //Method not allowed
    }

    try {
        const { email, password } = await req.json();

        // Check if email and password are provided
        if (!email || !password) {
            return NextResponse.json({ message: "Email and password are required" }, {status: 400}); 
        }

        await connectDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "Email and password are required" }, { status: 400 }); // Bad Request
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({ email, password: hashedPassword });

         return NextResponse.json({ message: "User created!" }, {status: 201});
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ message: "Internal Server Error" }, {status: 500});
    }
}

export {handler as GET, handler as POST}
