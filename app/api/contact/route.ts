import Contact from "@/models/ContactModel";
import connectDB from "@/utils/db";
import { NextRequest, NextResponse } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
    try {
        await connectDB();
        const formData = await request.formData();
        const name = formData.get("name")
        const email = formData.get("email")
        const project = formData.get("project")
        const budget = formData.get("budget")
        const message = formData.get("message");


        const contactData = {
            name,
            email,
            project,
            budget,
            message
        }
        
       await Contact.create(contactData)

        return NextResponse.json({message: "Email sent successfully"}, {status: 200})
    } catch (error) {
        return NextResponse.json("Failed to send email")
    }
}