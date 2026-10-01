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
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08060d]/85 backdrop-blur-xl">
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
      
              
      
              <Link href="/Cart" className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition hover:border-purple-500/50 hover:bg-purple-500/10">
                🛒
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-purple-600 px-1 text-[9px] font-bold">
                  {cart.length}
                </span>
              </Link>
      
                {
                  session?<Link href={"/account"} className="hidden rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-purple-500 sm:block">
                Account
              </Link>:<Link href={"/Login"} className="hidden rounded-xl bg-purple-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-purple-500 sm:block">
                Login
              </Link>
                }
      
              <button onClick={()=>{shownav()}} className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 md:hidden">
                ☰
              </button>
      
            </div>
          </nav>
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
