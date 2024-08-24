import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/utils/db";
import User from "@/models/UserModel";
import { verifyPassword } from "@/utils/verifyPassword";


const options = {
    pages: {
        signIn: "/auth/signin"
        
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {label: "Email", type: "email"},
                password: {label: "Password", type: "password"}
            },

            async authorize(credentials) {
                await connectDB();

                const user = await User.findOne({email: credentials?.email});

                if(!user) {
                throw new Error("No user found")
            }
            const isValid = await verifyPassword(credentials?.password, user.password);
            if(!isValid) {
                throw new Error("Invalid password")
            }

            return {id: user._id, email: user.email, role: user.role}
        }
        })
    ],
    callbacks: {
        async jwt({token , user} : any) {
            if(user) {
                token.id = user.id;
                token.email = user.email;
                token.role = user.role;
            }
            return token;
        },
        async session({token, session} : any) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.role = token.role;
            return session;
        },
        async redirect({url, baseUrl} : any) {
            return url.startsWith(baseUrl) ? url : baseUrl
        }
      
    },
    secret: process.env.NEXTAUTH_SECRET,



}

export default options;