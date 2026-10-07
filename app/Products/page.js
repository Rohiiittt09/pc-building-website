"use client"
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from "@/app/components/CartContextProvider"
const page = () => {
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
    const funaddtocart=(i,e)=>{
        addToCart(e)
        console.log("add to cart")
        
    }
    const fetchdata= async()=>{
        const res = await fetch("/data/allproduct.json")
        const data = await res.json()
        
        setproduct(data)
    }
    useEffect(() => {
      fetchdata()
    }, [])
    
  return (
    <div className="min-h-screen w-full bg-black text-white">

  {/* ================= PAGE HEADER ================= */}
  <section className="relative overflow-hidden border-b border-white/10">

    {/* Background glow */}
    <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#3ABAE9]/10 blur-[120px]" />
    <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-[#3ABAE9]/10 blur-[120px]" />

    <div className="relative mx-auto max-w-7xl px-5 pb-10 pt-28 lg:px-8">

      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

        <div>
          <div className="mb-4 inline-flex items-center gap-2 border border-[#3ABAE9]/30 bg-[#3ABAE9]/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#3ABAE9] shadow-[0_0_10px_#3ABAE9]" />

            <span className="text-[10px] font-bold tracking-[0.2em] text-[#3ABAE9]">
              CYBERFLIX COMPONENT STORE
            </span>
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Build Your
            <span className="text-[#3ABAE9]"> System.</span>
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
            Premium components engineered for gaming, productivity,
            creators and high-performance systems.
          </p>
        </div>


        {/* Product count */}
        <div className="flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur">
          <div className="flex h-9 w-9 items-center justify-center bg-[#3ABAE9]/10 text-[#3ABAE9]">
            ▦
          </div>

          <div>
            <p className="text-lg font-bold">
              {product?.length || 0}
            </p>

            <p className="text-[10px] uppercase tracking-wider text-gray-500">
              Components
            </p>
          </div>
        </div>

      </div>

    </div>

  </section>


  {/* ================= PRODUCTS ================= */}
  <section className="relative">

    <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">

      {/* Top bar */}
      <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
            Hardware
          </p>

          <h2 className="mt-1 text-2xl font-bold">
            All Components
          </h2>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500">
          <span className="h-1.5 w-1.5 rounded-full bg-[#3ABAE9]" />
          Premium PC Hardware
        </div>

      </div>


      {/* ================= PRODUCT GRID ================= */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

        {product?.map((e) => {

          return (

            <div
              key={e.id}
              className="
                group relative overflow-hidden
                border border-white/10
                bg-[#070707]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#3ABAE9]/50
                hover:shadow-[0_20px_50px_rgba(58,186,233,0.08)]
              "
            >

              {/* Blue hover glow */}
              <div className="
                pointer-events-none
                absolute -right-20 -top-20
                h-40 w-40
                rounded-full
                bg-[#3ABAE9]/10
                blur-[60px]
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              " />


              {/* ================= IMAGE ================= */}
              <div className="
                relative
                flex h-64
                items-center justify-center
                overflow-hidden
                border-b border-white/10
                bg-gradient-to-br from-[#0c0c0c] to-[#030303]
              ">

                {/* Grid background */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.035]
                  "
                  style={{
                    backgroundImage:
                      "linear-gradient(#3ABAE9 1px, transparent 1px), linear-gradient(90deg, #3ABAE9 1px, transparent 1px)",
                    backgroundSize: "30px 30px"
                  }}
                />

                {/* Product image */}
                <img
                  src={e.img}
                  alt={e.category}
                  className="
                    relative z-10
                    max-h-[85%]
                    max-w-[85%]
                    object-contain
                    transition-transform
                    duration-500
                    group-hover:scale-110
                  "
                />

              </div>


              {/* ================= PRODUCT INFO ================= */}
              <div className="p-5">

                {/* Category */}
                <div className="flex items-center justify-between gap-3">

                  <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#3ABAE9]">
                    {e.category}
                  </p>

                  <span className="text-[10px] text-gray-600">
                    {e.brand}
                  </span>

                </div>


                {/* Name */}
                <h3 className="
                  mt-2
                  line-clamp-2
                  min-h-[48px]
                  text-sm
                  font-semibold
                  leading-6
                  text-white
                  transition
                  group-hover:text-[#3ABAE9]
                ">
                  {e.name}
                </h3>


                {/* Divider */}
                <div className="my-4 h-px bg-white/5" />


                {/* Price + cart */}
                <div className="flex items-center justify-between gap-3">

                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-600">
                      Price
                    </p>

                    <p className="mt-0.5 text-lg font-black text-white">
                      ₹{e.price}
                    </p>
                  </div>


                  {/* ================= CART STATE ================= */}
                  {cart?.some((x) => x.id == e.id) ? (

                    <div className="
                      flex shrink-0
                      items-center
                      overflow-hidden
                      border border-[#3ABAE9]/30
                      bg-[#3ABAE9]/5
                    ">

                      {/* Minus */}
                      <button
                        onClick={() => {
                          decqty(
                            e.id,
                            cart.find((x) => x.id == e.id).qty
                          )
                        }}
                        className="
                          flex h-9 w-9
                          items-center justify-center
                          text-gray-400
                          transition
                          hover:bg-[#3ABAE9]
                          hover:text-black
                        "
                      >
                        −
                      </button>


                      {/* Quantity */}
                      <span className="
                        flex h-9 w-9
                        items-center justify-center
                        border-x border-[#3ABAE9]/20
                        text-sm font-bold
                        text-[#3ABAE9]
                      ">
                        {cart.find((x) => x.id == e.id).qty}
                      </span>


                      {/* Plus */}
                      <button
                        onClick={() => {
                          incqty(
                            e.id,
                            cart.find((x) => x.id == e.id).qty
                          )
                        }}
                        className="
                          flex h-9 w-9
                          items-center justify-center
                          text-gray-400
                          transition
                          hover:bg-[#3ABAE9]
                          hover:text-black
                        "
                      >
                        +
                      </button>

                    </div>

                  ) : (

                    /* ================= ADD BUTTON ================= */
                    <button
                      onClick={() => {
                        addToCart(e)
                      }}
                      className="
                        group/btn
                        flex items-center gap-2
                        border border-[#3ABAE9]
                        bg-[#3ABAE9]
                        px-4 py-2.5
                        text-xs font-black
                        text-black
                        transition-all
                        hover:bg-white
                        hover:border-white
                      "
                    >
                      Add

                      <span className="transition-transform group-hover/btn:translate-x-1">
                        →
                      </span>
                    </button>

                  )}

                </div>

              </div>

            </div>

          )

        })}

      </div>


      {/* ================= BOTTOM INFO ================= */}
      <div className="
        mt-12
        grid gap-3
        border-t border-white/10
        pt-8
        sm:grid-cols-3
      ">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 text-[#3ABAE9]">
            ✓
          </div>

          <div>
            <p className="text-xs font-semibold">
              Compatibility Checked
            </p>

            <p className="mt-1 text-[10px] text-gray-600">
              Build with confidence
            </p>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 text-[#3ABAE9]">
            ⚡
          </div>

          <div>
            <p className="text-xs font-semibold">
              Performance Focused
            </p>

            <p className="mt-1 text-[10px] text-gray-600">
              Quality hardware
            </p>
          </div>
        </div>


        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 text-[#3ABAE9]">
            🔒
          </div>

          <div>
            <p className="text-xs font-semibold">
              Secure Shopping
            </p>

            <p className="mt-1 text-[10px] text-gray-600">
              Safe & reliable
            </p>
          </div>
        </div>

      </div>

    </div>

  </section>

</div>
  )
}

export default page
