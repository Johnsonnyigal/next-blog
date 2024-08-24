"use client"
import Footer from "@/components/Footer";
import BlogsPage from "./blogs/page";
import { useSession } from "next-auth/react";



export default function Home() {
  const {data: session} = useSession();
  
//Initialize variables to store session data
let email: string | undefined = "";
let role: string | undefined = "";

 if(session) {
   email = session.user?.email!;
   role = session.user?.role!;
 }

 
  return (

    <main>
      
      
       <div className="ml-8 mt-10 ">
        <h1 className="text-lg font-medium">Latest product news and features in technology, solutions and updates.</h1>
      </div>
  
      <div className="ml-8 mt-12">
        <h1 className="text-2xl font-bold">Blogwizard</h1>
      </div>

      <BlogsPage />
      <Footer />
    </main>
  )
  
}

