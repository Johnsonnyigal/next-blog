"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { usePathname } from "next/navigation";





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenUser, setIsOpenUser] = useState(false);

  const {data: session} = useSession();

  //Initialize variables to store session data
  let email: string | undefined = "";
  let role: string | undefined = "";

  email = session?.user.email,
  role = session?.user.role

  const path = usePathname();


  const toggleSideBar = () => {
    setIsOpen(!isOpen)
  }
  const toggleUser = () => {
    setIsOpenUser(!isOpenUser)
  }

  
  return path.startsWith("/admin") ? null : ( 
    
    <main>      
    <div className="flex justify-between items-center mt-2 mx-4">       
        <div onClick={toggleSideBar} className="md:hidden">
        {/* svg nav icon*/}
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3H27" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M3 15H27" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        <path d="M3 27H27" stroke="black" strokeWidth="5" strokeLinecap="round"/>
        </svg>
        </div>
        {/* Logo div */}
        <div>
          <Image src={"/image.png"} height={100} width={160} alt=""/>
        </div>
        <div onClick={toggleUser} className="md:hidden">
        <Image src={"/profile-circle.png"} height={32} width={32} alt=""/>
        </div>      
        <div className="hidden md:block ">
          <nav>
            <ul className="flex gap-4 text-black font-semibold text-sm ">
              <Link href={"/"} className={`hover:cursor-pointer ${path === "/" ? "border-b-4 border-yellow-500" : ""}`}>Home</Link>
              <Link href={"/services"} className={`hover:cursor-pointer ${path === "/services" ? "border-b-4 border-yellow-500" : ""}`}>Services</Link>
              <Link href={"/blogs"} className={`hover:cursor-pointer ${path === "/blogs" ? "border-b-4 border-yellow-500" : ""}`} >Blogs</Link>
              <Link href={"/about"} className={`hover:cursor-pointer ${path === "/about" ? "border-b-4 border-yellow-500" : ""}`} >About</Link>
              <Link href={"/contact"} className={`hover:cursor-pointer ${path === "/contact" ? "border-b-4 border-yellow-500" : ""}`} >Contact</Link>
              {
                role === "admin" ? (
                  <Link href={"/admin"} className={`hover:cursor-pointer ${path === "/contact" ? "border-b-4 border-yellow-500" : ""}`} >Admin Dashboard</Link>

                ) : ""
              }
            </ul>
          </nav>
        </div>
        {
          !session ?
        
        (<div className="hidden md:block ">
          <section className="flex items-center gap-2 text-sm font-semibold ">
          <div className="hover:cursor-pointer">
            <Link href={"/auth/signin"}>Log in</Link>
          </div>
          <div className="bg-green-700 rounded-lg text-white font-semibold px-4 py-1 hover:cursor-pointer">
            <Link href={"/auth/signup"}>Sign up</Link>
          </div>
          </section>
        </div>) : (
          <div className="hidden md:block  items-center space-x-4">
          <h1 className="font-semibold text-gray-700">Welcome {email} </h1>
          <div className="bg-gray-950 text-white px-3 py-2 rounded-lg cursor-pointer" onClick={() => signOut()}>
            <ul>
              Log out
            </ul>
          </div>
            </div>
        )
}
    </div>

    {/*Sidebar */}
    {
      isOpen && (
        <div className="md:hidden fixed top-18 left-4 w-32 h-40 bg-gray-300 text-black shadow-lg font-semibold rounded-xl ">
          <section className="flex justify-between m-4">
          <div className="flex flex-col items-center m-2 ">
            <Link href={"/"} className={`hover:cursor-pointer ${path === "/" ? "border-b-4 border-yellow-500" : ""}`} >Home</Link>
            <Link href={"/services"} className={`hover:cursor-pointer ${path === "/services" ? "border-b-4 border-yellow-500" : ""}`} >Services</Link>
            <Link href={"/about"} className={`hover:cursor-pointer ${path === "/about" ? "border-b-4 border-yellow-500" : ""}`} >About</Link>
            <Link href={"/blogs"} className={`hover:cursor-pointer ${path === "/blogs" ? "border-b-4 border-yellow-500" : ""}`} >Blogs</Link>
            <Link href={"/contact"} className={`hover:cursor-pointer ${path === "/contact" ? "border-b-4 border-yellow-500" : ""}`} >Contact</Link>
            
          </div>
          <div onClick={toggleSideBar}>
            <Image src={"/x-icon.png"} height={24} width={24} alt="" />
          </div>
          </section>
        </div>
      )
    }

    {/* UserBar */}
    {
      isOpenUser && (
        <div className="md:hidden fixed top-14 right-4 w-32 h-20 bg-gray-300 rounded-lg shadow-md">
          <nav>
            
            <ul className="flex flex-col gap-1 ml-8 items-start m-4 text-black font-semibold">
              {
                !session ? (
                  <>
                  <Link href={"/auth/signin"} className="cursor-pointer hover:text-amber-700">Sign up</Link>
                  <Link href={"/auth/signup"} className="cursor-pointer hover:text-amber-700" >Log in</Link>
                  </>
                ) : (
                  <div className="flex-col font-semibold cursor-pointer hover:text-amber-700" onClick={() => signOut()}>Logout</div>
                )
              }
            </ul>
          </nav>
        </div>
      )
    }


    </main>
  )
}

export default Navbar