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
   <div className="bg-[#08060d] text-white">



  <main>
      <section className="w-screen h-screen ">
        
          <div className="w-screen h-screen fixed  top-0 left-0 " >
            <img className="w-full h-full object-cover" src="img/bg.png" alt="" />
          </div>
          <div className="w-screen h-screen fixed bg-black/30 z-1 top-0 left-0 " >
            
          </div>
          <div className="relative z-20 mx-auto grid min-h-[650px] max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:px-8">

        <div className="">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-purple-400"></span>

            <span className="text-xs font-medium text-purple-300">
              PREMIUM PC COMPONENTS
            </span>
          </div>

          <h2 className="max-w-3xl flex-col flex text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-5xl xl:text-7xl">
            Build Your
            <span><span className="text-purple-500  pr-5">Perfect</span>Machine.</span>
            
          </h2>

          <p className="sm:mt-6 mt-2 text-[14px] text-base leading-7 text-gray-400 sm:text-lg">
            Discover premium PC components, build a compatible system,
            and create a setup designed around your performance needs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link href="/"
              className="rounded-xl bg-purple-600 px-7 py-3.5 text-center text-sm font-bold transition hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/20">
              Build Your PC →
            </Link>

            <Link href="/Products"
              className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-center text-sm font-semibold text-gray-200 transition hover:border-purple-500/40 hover:bg-purple-500/10">
              Explore Components
            </Link>

          </div>

          <div className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-7">

            <div>
              <p className="text-xl font-bold">500+</p>
              <p className="mt-1 text-xs text-gray-500">Components</p>
            </div>

            <div>
              <p className="text-xl font-bold">100%</p>
              <p className="mt-1 text-xs text-gray-500">Compatibility Check</p>
            </div>

            <div>
              <p className="text-xl font-bold">Secure</p>
              <p className="mt-1 text-xs text-gray-500">Checkout</p>
            </div>

          </div>

        </div>


       <div className="relative flex min-h-[430px] items-center justify-center">

          <div className="absolute h-72 w-72 rounded-full bg-purple-700/20 blur-[100px]">
          </div>

          <div className="relative w-full max-w-md">

            <div className="rounded-3xl border border-purple-500/20 bg-white/[0.03] p-5 shadow-2xl shadow-purple-950/30 backdrop-blur">

              <div className="flex items-center justify-between border-b border-white/10 pb-4">

                <div>
                  <p className="text-xs text-gray-500">FEATURED BUILD</p>
                  <h3 className="mt-1 font-semibold">Performance Series</h3>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-[10px] text-green-400">
                  READY
                </span>

              </div>

              <div className="my-8 flex h-64 items-center justify-center">

                <div className="relative h-56 w-40 rounded-2xl border border-purple-400/30 bg-gradient-to-br from-purple-950 to-black shadow-2xl shadow-purple-700/30">

                  <div className="absolute left-4 right-4 top-5 h-24 rounded-xl border border-purple-500/20 bg-purple-500/10">
                  </div>

                  <div className="absolute bottom-8 left-6 h-4 w-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/80">
                  </div>

                  <div className="absolute bottom-8 right-6 h-4 w-4 rounded-full bg-purple-300 shadow-lg shadow-purple-300/70">
                  </div>

                  <div className="absolute bottom-20 left-1/2 h-20 w-1 -translate-x-1/2 bg-purple-500/30">
                  </div>

                </div>

              </div>

              <div className="grid grid-cols-3 gap-2">

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[10px] text-gray-500">CPU</p>
                  <p className="mt-1 text-xs font-semibold">Ryzen 7</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[10px] text-gray-500">GPU</p>
                  <p className="mt-1 text-xs font-semibold">RTX Series</p>
                </div>

                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-[10px] text-gray-500">RAM</p>
                  <p className="mt-1 text-xs font-semibold">32GB</p>
                </div>

              </div>

            </div>

          </div>

        </div>
        

      </div>
        
      </section>

    

    
    <section id="components" className="border-t relative z-10 border-white/5 py-20">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              Shop Hardware
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Find Your Components
            </h2>
          </div>

          <Link href="/Products" className="text-sm font-semibold text-purple-400 hover:text-purple-300">
            View all components →
          </Link>

        </div>


        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">

          
          <a href="#" className="group rounded-2xl border border-white/10 bg-[#0d0a14]  p-5 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
              ⚡
            </div>
            <h3 className="mt-5 font-semibold">CPU</h3>
            <p className="mt-1 text-xs text-gray-500">Processors</p>
          </a>

          <a href="#" className="group rounded-2xl border border-white/10 bg-[#0d0a14]  p-5 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
              ◈
            </div>
            <h3 className="mt-5 font-semibold">GPU</h3>
            <p className="mt-1 text-xs text-gray-500">Graphics Cards</p>
          </a>

          <a href="#" className="group rounded-2xl border border-white/10 bg-[#0d0a14]  p-5 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
              ▦
            </div>
            <h3 className="mt-5 font-semibold">RAM</h3>
            <p className="mt-1 text-xs text-gray-500">Memory</p>
          </a>

          <a href="#" className="group rounded-2xl border border-white/10 bg-[#0d0a14]  p-5 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
              ▰
            </div>
            <h3 className="mt-5 font-semibold">Storage</h3>
            <p className="mt-1 text-xs text-gray-500">SSD / HDD</p>
          </a>

          <a href="#" className="group rounded-2xl border border-white/10 bg-[#0d0a14]  p-5 transition hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-500/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10 text-xl">
              ◉
            </div>
            <h3 className="mt-5 font-semibold">Monitors</h3>
            <p className="mt-1 text-xs text-gray-500">Displays</p>
          </a>

        </div>

      </div>
    </section>


    
    <section className="py-20">

      <div className="mx-auto relative z-10 max-w-7xl px-5 lg:px-8">

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            Featured
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Popular Components
          </h2>
        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {product?.filter((e, index) => [1, 7, 12, 16].includes(index)).map((e)=>{
                return(
                    <div key={e.id} className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0d0a14] transition hover:-translate-y-1 hover:border-purple-500/40">

            <div className="flex overflow-hidden h-52 items-center justify-center bg-white/[0.025] text-4xl">
              <img src={e.img} alt={e.category} />
            </div>

            <div className="p-5">

              <p className="text-xs text-purple-400">{e.category} <span className=' text-white/60'>{e.brand}</span></p>
              


              <h3 className="mt-2 font-semibold">
                {e.name}
              </h3>

              <div className="mt-5 flex items-center justify-between">

                <p className="text-lg font-bold">
                  ₹{e.price}
                </p>
                {cart?.some((x) => x.id == e.id) ? (
  <div className="flex items-center shrink-0 rounded-lg border border-gray-700 bg-[#181818] overflow-hidden">

    <button onClick={(i)=>{decqty(e.id,cart.find((x)=>x.id==e.id).qty)}} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition">
      −
    </button>

    <span className="w-8 h-8 flex items-center justify-center text-sm font-medium text-white border-x border-gray-700">
      {cart.find((x) => x.id == e.id).qty}
    </span>

    <button onClick={(i)=>{incqty(e.id,cart.find((x)=>x.id==e.id).qty)}} className="w-8 h-8 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition">
      +
    </button>

  </div>
) : (
  <button
    onClick={()=>{addToCart(e)}}
    className="rounded-lg cursor-pointer bg-purple-600 px-3 py-2 text-xs font-semibold transition hover:bg-purple-500"
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


    {/* <!-- ================= PC BUILDER CTA ================= --> */}
    <section id="builder" className="px-5 relative z-10 py-20 lg:px-8">

      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-purple-500/20 bg-gradient-to-br from-purple-950/40 to-[#0d0a14]">

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-600/20 blur-[100px]">
        </div>

        <div className="relative grid items-center gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:p-16">

          <div>

            <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
              PC Builder
            </p>

            <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              Don't know which parts
              <span className="text-purple-500">work together?</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-400">
              Build your PC step by step. Choose your components,
              check compatibility, stay within your budget and create
              a system that fits your needs.
            </p>

            <a href="#"
              className="mt-8 inline-flex rounded-xl bg-purple-600 px-7 py-3.5 text-sm font-bold transition hover:bg-purple-500">
              Start Building →
            </a>

          </div>


          <div className="rounded-2xl border border-white/10 bg-black/20 p-5 backdrop-blur">

            <div className="flex items-center justify-between border-b border-white/10 pb-4">

              <div>
                <p className="text-xs text-gray-500">YOUR BUILD</p>
                <p className="mt-1 font-semibold">Gaming PC</p>
              </div>

              <p className="font-bold text-purple-400">₹78,499</p>

            </div>

            <div className="space-y-3 py-5">

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <span className="text-sm text-gray-300">CPU</span>
                <span className="text-xs text-gray-500">Selected ✓</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <span className="text-sm text-gray-300">GPU</span>
                <span className="text-xs text-gray-500">Selected ✓</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <span className="text-sm text-gray-300">RAM</span>
                <span className="text-xs text-gray-500">32GB DDR5</span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-white/5 p-3">
                <span className="text-sm text-gray-300">Storage</span>
                <span className="text-xs text-gray-500">1TB NVMe</span>
              </div>

            </div>

            <div className="rounded-xl border border-green-500/20 bg-green-500/5 p-4">

              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span className="text-sm font-semibold text-green-400">
                  All selected parts are compatible
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>


    {/* <!-- ================= WHY CYBERFLIX ================= --> */}
    <section className="border-t relative z-10 border-white/5 py-20">

      <div className="mx-auto max-w-7xl px-5 lg:px-8">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
            Why Cyberflix
          </p>

          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Built for people who care about their setup.
          </h2>

        </div>


        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="text-2xl">✓</div>
            <h3 className="mt-5 font-semibold">Compatibility First</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Build with confidence using compatibility checks.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="text-2xl">⚡</div>
            <h3 className="mt-5 font-semibold">Performance Focused</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Components selected for real-world performance.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="text-2xl">🔒</div>
            <h3 className="mt-5 font-semibold">Secure Shopping</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Simple and secure shopping experience.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="text-2xl">🛠</div>
            <h3 className="mt-5 font-semibold">Build Your Way</h3>
            <p className="mt-2 text-sm leading-6 text-gray-500">
              Create a configuration around your requirements.
            </p>
          </div>

        </div>

      </div>
    </section>

  </main>


  {/* <!-- ================= FOOTER ================= --> */}
  <footer className="border-t relative z-10 border-white/10 bg-[#050409]">

    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>
          <h2 className="text-lg font-bold">CYBERFLIX</h2>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Premium PC components and custom PC building
            for creators, gamers and professionals.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Shop</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-white">CPU</a>
            <a href="#" className="block hover:text-white">GPU</a>
            <a href="#" className="block hover:text-white">RAM</a>
            <a href="#" className="block hover:text-white">Storage</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-white">PC Builder</a>
            <a href="#" className="block hover:text-white">Custom PCs</a>
            <a href="#" className="block hover:text-white">About Us</a>
            <a href="#" className="block hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Support</h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">
            <a href="#" className="block hover:text-white">Shipping</a>
            <a href="#" className="block hover:text-white">Returns</a>
            <a href="#" className="block hover:text-white">Privacy</a>
            <a href="#" className="block hover:text-white">Terms</a>
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
