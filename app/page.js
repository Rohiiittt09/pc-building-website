"use client"
import Image from "next/image";
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from "@/app/components/CartContextProvider"
import { signIn, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession()
  const [product, setproduct] = useState()
   const {addToCart,cart,setCart}=useContext(CartContext)
     const decqty=(id,qty)=>{
       if(qty==1){
        setCart((prev)=>{
            let arr = [...prev]
            return arr.filter((x)=>{
                return x.id!=id
            })
        })
       }else{
        setCart((prev)=>{
        let arr = [...prev]
        for(let i of arr){
            if(i.id==id){
                i.qty=qty-1
                return arr
            }
        }
       })
       }
    }
    const incqty=(id,qty)=>{
       setCart((prev)=>{
        let arr = [...prev]
        for(let i of arr){
            if(i.id==id){
                i.qty=qty+1
                return arr
            }
        }
       })
    }
     const fetchdata= async()=>{
            const res = await fetch("/data/allproduct.json")
            const data = await res.json()
            
            setproduct(data)
        }
        useEffect(() => {
          fetchdata()
          if(session){
            console.log(session)
          }
        }, [])
  return (
   <div className="min-h-screen bg-black text-white selection:bg-[#3ABAE9] selection:text-black">

  {/* ================= NAVBAR ================= */}
  


  <main>

    {/* ================= HERO ================= */}
    <section className="relative min-h-screen overflow-hidden pt-20">

      {/* Background */}
      <div className="fixed inset-0 z-10 blur-[5px] h-screen w-screen">
        <img
          className="h-full w-full object-cover opacity-70"
          src="img/bg.png"
          alt=""
        />
      </div>

      <div className="fixed inset-0 -z-10 bg-black/75" />

      {/* Blue ambient glow */}
      <div className="pointer-events-none absolute left-[-150px] top-1/3 h-96 w-96 rounded-full bg-[#3ABAE9]/10 blur-[130px]" />
      <div className="pointer-events-none absolute right-[-150px] top-1/4 h-96 w-96 rounded-full bg-[#3ABAE9]/10 blur-[130px]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

        {/* LEFT */}
        <div>

          <div className="mb-6 inline-flex items-center gap-3 border border-[#3ABAE9]/30 bg-[#3ABAE9]/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#3ABAE9] shadow-[0_0_12px_#3ABAE9]" />

            <span className="text-xs font-bold tracking-[0.2em] text-[#3ABAE9]">
              PREMIUM PC COMPONENTS
            </span>
          </div>

          <h2 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-6xl xl:text-8xl">
            Build Your
            <span className="block">
              <span className="text-[#3ABAE9]">
                Perfect
              </span>{" "}
              Machine.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-gray-400 sm:text-lg">
            Discover premium PC components, build a compatible system,
            and create a setup designed around your performance needs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/"
              className="group relative overflow-hidden border border-[#3ABAE9] bg-[#3ABAE9] px-7 py-3.5 text-center text-sm font-black text-black transition hover:shadow-[0_0_30px_rgba(58,186,233,0.3)]"
            >
              <span className="relative z-10">
                Build Your PC →
              </span>
            </Link>

            <Link
              href="/Products"
              className="border border-white/15 bg-white/[0.03] px-7 py-3.5 text-center text-sm font-semibold text-gray-200 transition hover:border-[#3ABAE9]/60 hover:bg-[#3ABAE9]/10 hover:text-[#3ABAE9]"
            >
              Explore Components
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

            <div>
              <p className="text-xl font-bold text-white">
                500+
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Components
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                100%
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Compatibility Check
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-white">
                Secure
              </p>
              <p className="mt-1 text-xs text-gray-500">
                Checkout
              </p>
            </div>

          </div>

        </div>


        {/* RIGHT FEATURED BUILD */}
        <div className="relative flex min-h-[430px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-[#3ABAE9]/15 blur-[100px]" />

          <div className="relative w-full max-w-md">

            <div className="border border-[#3ABAE9]/25 bg-black/60 p-5 shadow-[0_0_60px_rgba(58,186,233,0.08)] backdrop-blur-xl">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
                    FEATURED BUILD
                  </p>

                  <h3 className="mt-1 font-semibold">
                    Performance Series
                  </h3>
                </div>

                <span className="border border-[#3ABAE9]/30 bg-[#3ABAE9]/10 px-3 py-1 text-[10px] font-bold tracking-wider text-[#3ABAE9]">
                  READY
                </span>

              </div>


              <div className="my-8 flex h-64 items-center justify-center">

                <div className="relative h-56 w-40 border border-[#3ABAE9]/40 bg-gradient-to-br from-[#092331] via-black to-black shadow-[0_0_50px_rgba(58,186,233,0.18)]">

                  <div className="absolute left-4 right-4 top-5 h-24 border border-[#3ABAE9]/20 bg-[#3ABAE9]/5" />

                  <div className="absolute bottom-8 left-6 h-4 w-4 rounded-full bg-[#3ABAE9] shadow-[0_0_18px_#3ABAE9]" />

                  <div className="absolute bottom-8 right-6 h-4 w-4 rounded-full bg-white shadow-[0_0_18px_white]" />

                  <div className="absolute bottom-20 left-1/2 h-20 w-px -translate-x-1/2 bg-[#3ABAE9]/40" />

                </div>

              </div>


              <div className="grid grid-cols-3 gap-2">

                <div className="border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] text-gray-500">
                    CPU
                  </p>
                  <p className="mt-1 text-xs font-semibold">
                    Ryzen 7
                  </p>
                </div>

                <div className="border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] text-gray-500">
                    GPU
                  </p>
                  <p className="mt-1 text-xs font-semibold">
                    RTX Series
                  </p>
                </div>

                <div className="border border-white/10 bg-white/[0.03] p-3">
                  <p className="text-[10px] text-gray-500">
                    RAM
                  </p>
                  <p className="mt-1 text-xs font-semibold">
                    32GB
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    {/* ================= COMPONENTS ================= */}
    <section
      id="components"
      className="relative z-10 border-t border-white/10 py-20"
    >

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
              Shop Hardware
            </p>

            <h2 className="mt-2 text-3xl font-black sm:text-4xl">
              Find Your Components
            </h2>
          </div>

          <Link
            href="/Products"
            className="text-sm font-semibold text-[#3ABAE9] transition hover:text-white"
          >
            View all components →
          </Link>

        </div>


        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

          {[
            ["⚡", "CPU", "Processors"],
            ["◈", "GPU", "Graphics Cards"],
            ["▦", "RAM", "Memory"],
            ["▰", "Storage", "SSD / HDD"],
            ["◉", "Monitors", "Displays"],
          ].map(([icon, title, subtitle]) => (

            <a
              href="#"
              key={title}
              className="group border border-white/10 bg-[#050505] p-5 transition hover:-translate-y-1 hover:border-[#3ABAE9]/60 hover:bg-[#3ABAE9]/5"
            >

              <div className="flex h-12 w-12 items-center justify-center border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 text-xl text-[#3ABAE9] transition group-hover:border-[#3ABAE9]/60 group-hover:bg-[#3ABAE9]/10">
                {icon}
              </div>

              <h3 className="mt-5 font-semibold">
                {title}
              </h3>

              <p className="mt-1 text-xs text-gray-500">
                {subtitle}
              </p>

            </a>

          ))}

        </div>

      </div>

    </section>


    {/* ================= POPULAR COMPONENTS ================= */}
    <section className="relative z-10 border-t border-white/5 py-20">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Popular Components
          </h2>
        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {product?.filter((e, index) => [1, 7, 12, 16].includes(index)).map((e) => {
            return (
              <div
                key={e.id}
                className="group overflow-hidden border border-white/10 bg-[#050505] transition hover:-translate-y-1 hover:border-[#3ABAE9]/50 hover:shadow-[0_15px_40px_rgba(58,186,233,0.08)]"
              >

                {/* IMAGE — UNCHANGED */}
                <div className="flex h-52 items-center justify-center overflow-hidden bg-white/[0.025] text-4xl">
                  <img
                    src={e.img}
                    alt={e.category}
                    className="max-h-full max-w-full object-contain transition duration-500 group-hover:scale-105"
                  />
                </div>


                <div className="p-5">

                  <p className="text-xs text-[#3ABAE9]">
                    {e.category}
                    <span className="text-white/40">
                      {" "}
                      {e.brand}
                    </span>
                  </p>

                  <h3 className="mt-2 font-semibold">
                    {e.name}
                  </h3>


                  <div className="mt-5 flex items-center justify-between">

                    <p className="text-lg font-bold">
                      ₹{e.price}
                    </p>


                    {/* CART LOGIC — UNCHANGED */}
                    {cart?.some((x) => x.id == e.id) ? (

                      <div className="flex shrink-0 items-center overflow-hidden border border-white/10 bg-white/[0.03]">

                        <button
                          onClick={(i) => {
                            decqty(
                              e.id,
                              cart.find((x) => x.id == e.id).qty
                            )
                          }}
                          className="flex h-8 w-8 items-center justify-center text-gray-300 transition hover:bg-[#3ABAE9] hover:text-black"
                        >
                          −
                        </button>

                        <span className="flex h-8 w-8 items-center justify-center border-x border-white/10 text-sm font-medium text-white">
                          {cart.find((x) => x.id == e.id).qty}
                        </span>

                        <button
                          onClick={(i) => {
                            incqty(
                              e.id,
                              cart.find((x) => x.id == e.id).qty
                            )
                          }}
                          className="flex h-8 w-8 items-center justify-center text-gray-300 transition hover:bg-[#3ABAE9] hover:text-black"
                        >
                          +
                        </button>

                      </div>

                    ) : (

                      <button
                        onClick={() => {
                          addToCart(e)
                        }}
                        className="cursor-pointer border border-[#3ABAE9] bg-[#3ABAE9] px-3 py-2 text-xs font-bold text-black transition hover:bg-white hover:border-white"
                      >
                        Add
                      </button>

                    )}

                  </div>

                </div>

              </div>
            )
          })}

        </div>

      </div>

    </section>


    {/* ================= PC BUILDER ================= */}
    <section
      id="builder"
      className="relative z-10 px-5 py-20 lg:px-8"
    >

      <div className="relative mx-auto max-w-7xl overflow-hidden border border-[#3ABAE9]/25 bg-gradient-to-br from-[#06151d] to-black">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#3ABAE9]/10 blur-[100px]" />

        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">

          <div>

            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
              PC Builder
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Don't know which parts{" "}
              <span className="text-[#3ABAE9]">
                work together?
              </span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Build your PC step by step. Choose your components,
              check compatibility, stay within your budget and create
              a system that fits your needs.
            </p>

            <a
              href="#"
              className="mt-8 inline-flex border border-[#3ABAE9] bg-[#3ABAE9] px-7 py-3.5 text-sm font-black text-black transition hover:bg-white hover:border-white"
            >
              Start Building →
            </a>

          </div>


          {/* BUILD CARD */}
          <div className="border border-white/10 bg-black/60 p-5 backdrop-blur">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">

              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] text-gray-500">
                  YOUR BUILD
                </p>

                <p className="mt-1 font-semibold">
                  Gaming PC
                </p>
              </div>

              <p className="font-bold text-[#3ABAE9]">
                ₹78,499
              </p>

            </div>


            <div className="space-y-3 py-5">

              {[
                ["CPU", "Selected ✓"],
                ["GPU", "Selected ✓"],
                ["RAM", "32GB DDR5"],
                ["Storage", "1TB NVMe"],
              ].map(([name, value]) => (

                <div
                  key={name}
                  className="flex items-center justify-between border border-white/5 bg-white/[0.03] p-3"
                >
                  <span className="text-sm text-gray-300">
                    {name}
                  </span>

                  <span className="text-xs text-gray-500">
                    {value}
                  </span>
                </div>

              ))}

            </div>


            <div className="border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 p-4">

              <div className="flex items-center gap-2">

                <span className="text-[#3ABAE9]">
                  ✓
                </span>

                <span className="text-sm font-semibold text-[#3ABAE9]">
                  All selected parts are compatible
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    {/* ================= WHY CYBERFLIX ================= */}
    <section className="relative z-10 border-t border-white/5 py-20">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
            Why Cyberflix
          </p>

          <h2 className="mt-2 text-3xl font-black sm:text-4xl">
            Built for people who care about their setup.
          </h2>

        </div>


        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {[
            ["✓", "Compatibility First", "Build with confidence using compatibility checks."],
            ["⚡", "Performance Focused", "Components selected for real-world performance."],
            ["🔒", "Secure Shopping", "Simple and secure shopping experience."],
            ["🛠", "Build Your Way", "Create a configuration around your requirements."],
          ].map(([icon, title, description]) => (

            <div
              key={title}
              className="group border border-white/10 bg-white/[0.02] p-6 transition hover:border-[#3ABAE9]/40 hover:bg-[#3ABAE9]/5"
            >

              <div className="text-2xl text-[#3ABAE9]">
                {icon}
              </div>

              <h3 className="mt-5 font-semibold">
                {title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  </main>


  {/* ================= FOOTER ================= */}
  <footer className="relative z-10 border-t border-white/10 bg-black">

    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        {/* LOGO */}
        <div>

          <div className="flex h-12 w-56 items-center">
            <img
              src="/img/logo.png"
              alt="Cyberflix Systems LLP"
              className="max-h-full max-w-full object-contain object-left"
            />
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Premium PC components and custom PC building
            for creators, gamers and professionals.
          </p>

        </div>


        <div>

          <h3 className="font-semibold">
            Shop
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">

            {["CPU", "GPU", "RAM", "Storage"].map((item) => (
              <a
                href="#"
                key={item}
                className="block transition hover:text-[#3ABAE9]"
              >
                {item}
              </a>
            ))}

          </div>

        </div>


        <div>

          <h3 className="font-semibold">
            Explore
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">

            {["PC Builder", "Custom PCs", "About Us", "Contact"].map((item) => (
              <a
                href="#"
                key={item}
                className="block transition hover:text-[#3ABAE9]"
              >
                {item}
              </a>
            ))}

          </div>

        </div>


        <div>

          <h3 className="font-semibold">
            Support
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">

            {["Shipping", "Returns", "Privacy", "Terms"].map((item) => (
              <a
                href="#"
                key={item}
                className="block transition hover:text-[#3ABAE9]"
              >
                {item}
              </a>
            ))}

          </div>

        </div>

      </div>


      <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-gray-600">
        © 2026 Cyberflix Systems LLP. All rights reserved.
      </div>

    </div>

  </footer>

</div>)
}
