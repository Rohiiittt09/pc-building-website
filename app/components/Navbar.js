"use client"
import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from "@/app/components/CartContextProvider"
import { signIn, useSession } from "next-auth/react";
import Link from 'next/link'

const Navbar = () => {
    const { data: session, status } = useSession()
   const {addToCart,cart,setCart}=useContext(CartContext)
  const [hid, sethid] = useState(false)
  const shownav=()=>{
    sethid(true)
  }
  const hidden=async()=>{
    sethid(false)
  }
  return (
    <div className=''>
     <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">
    <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">

      {/* LOGO SPACE */}
      <Link href="/" className="flex h-14 w-64 items-center">
        <img
          src="/img/logo.jpeg"
          alt="Cyberflix Systems LLP"
          className="max-h-full max-w-full object-contain object-left"
        />
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <Link
          href="/"
          className="text-sm font-medium text-white transition hover:text-[#3ABAE9]"
        >
          Home
        </Link>

        <Link
          href="/Products"
          className="text-sm font-medium text-gray-300 transition hover:text-[#3ABAE9]"
        >
          Components
        </Link>

        <a
          href="#builder"
          className="text-sm font-medium text-gray-300 transition hover:text-[#3ABAE9]"
        >
          PC Builder
        </a>

        <a
          href="#components"
          className="text-sm font-medium text-gray-300 transition hover:text-[#3ABAE9]"
        >
          Shop
        </a>
      </nav>

      
      <div className="flex items-center gap-3">
      
              <Link
        href="/Products"
        className="hidden rounded-lg border border-[#3ABAE9]/50 bg-[#3ABAE9]/10 px-5 py-2.5 text-sm font-bold text-[#3ABAE9] transition hover:bg-[#3ABAE9] hover:text-black sm:block"
      >
        Explore
      </Link>
      
              <Link href="/Cart" className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-purple-500/50 hover:bg-purple-500/10">
                🛒
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#3ABAE9]/50 px-1 text-[9px] font-bold">
                  {cart.length}
                </span>
              </Link>
      
                {
                  session?<Link href={"/account"} className="hidden rounded-xl border-[#3ABAE9]/50 bg-[#3ABAE9]/10 px-5 py-2.5 text-sm font-semibold  text-sm font-bold text-[#3ABAE9] transition hover:bg-[#3ABAE9] hover:text-black  sm:block">
                Account
              </Link>:<Link href={"/Login"} className="hidden rounded-xl border-[#3ABAE9]/50 bg-[#3ABAE9]/10 px-5 py-2.5 text-sm font-semibold  text-sm font-bold text-[#3ABAE9] transition hover:bg-[#3ABAE9] hover:text-black  sm:block">
                Login
              </Link>
                }
      
              <button onClick={()=>{shownav()}} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden">
                ☰
              </button>
      
            </div>

    </div>
  </header>
  <div className={hid?"w-screen fixed z-60  top-0 transition-all duration-700 ease-in-out  h-[70vh] bg-slate-900":"w-screen fixed transition-all duration-700 ease-in-out z-60 -top-[75vh] h-[70vh] bg-slate-900"}>
      <div className=' w-full  flex justify-end px-4 py-2'>
        <div className='absolute  text-4xl text-white  font-semibold z-70' onClick={()=>{hidden()}}>X</div>
      </div>
      <div className=' flex h-[60vh] mt-10  px-3 py-2  flex-col justify-between '>
        <Link href={"/"} className="text-3xl  font-medium text-white hover:text-orange-600 transition">
                    Home
                  </Link>
        
                  <Link href={"/Products"} className="text-3xl font-medium text-white hover:text-orange-600 transition">
                    Components
                  </Link>
        
                  <Link href={"/"} className="text-3xl font-medium text-white hover:text-orange-600 transition">
                    Custom PCs
                  </Link>
        
                  <Link href={"/"}className="text-3xl font-medium text-white hover:text-orange-600 transition">
                    Buil PC
                  </Link>
        
                  <Link href={"/contactus"} className="text-3xl font-medium text-white hover:text-orange-600 transition">
                    Contact Us
                  </Link>
                  <Link href={"/Login"} className="text-3xl font-medium text-white hover:text-orange-600 transition">
                    Login/SignIN
                  </Link>
      </div>
    </div>
    </div>
  )
}

export default Navbar
