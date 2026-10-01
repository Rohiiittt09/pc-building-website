"use client"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useSession,signIn,signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const page = () => {
    const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if(status=="authenticated"){
      router.push("/account")
    }
  }, [status])
  return (
    <div className=' w-screen min-h-screen bg-[#0d0a14] '>
         <header className="sticky top-0 z-50  border-b border-white/10 bg-[#08060d]/85 backdrop-blur-xl">
         <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
     
           <Link href="/" className="flex items-center gap-3">
             <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-600 shadow-lg shadow-purple-600/30">
               <span className="text-lg font-black">C</span>
             </div>
     
             <div>
               <h1 className="text-lg font-bold tracking-wide">CYBERFLIX</h1>
               <p className="text-[9px] uppercase tracking-[0.3em] text-purple-400">
                 Systems LLP
               </p>
             </div>
           </Link>
     
           <div className="hidden items-center gap-8 md:flex">
             <Link href="/" className="text-sm text-gray-300 transition hover:text-white">
               Home
             </Link>
     
             <Link href="/Products" className="text-sm text-gray-300 transition hover:text-white">
               Components
             </Link>
     
             <Link href="/custom-pcs" className="text-sm text-gray-300 transition hover:text-white">
               Custom PCs
             </Link>
     
             <Link href="/pc-builder" className="text-sm text-gray-300 transition hover:text-white">
               PC Builder
             </Link>
              <Link href="/contactus" className="text-sm text-gray-300 transition hover:text-white">
              Contact Us
             </Link>
           </div>
     
           <div className="flex items-center gap-3">
     
             <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-purple-500/50 hover:bg-purple-500/10 sm:flex">
               🔍
             </button>
     
             <Link href="/Cart" className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-purple-500/50 hover:bg-purple-500/10">
          🛒
          
        </Link>
     
             <button className="hidden rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-purple-500 sm:block">
               Login
             </button>
     
             <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden">
               ☰
             </button>
     
           </div>
         </nav>
       </header>
       <div className=' w-screen text-white mt-20  '>
        <div className='  text-center mt-10'><h1 className=' text-white font-bold  text-center text-[14px] sm:text-2xl mx-auto'>Login/Signup</h1></div>

        <div className=' flex justify-center  items-center flex-col gap-5 mt-10'> <button onClick={() => signIn("google")} className="flex w-70 cursor-pointer justify-center items-center gap-3 bg-white border px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md">
          
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
            className="w-5 h-5"
          />

          <span className="text-gray-700 font-medium">
            Sign up with Google
          </span>

        </button>
        


</div>
    </div>
    </div>
  )
}

export default page
