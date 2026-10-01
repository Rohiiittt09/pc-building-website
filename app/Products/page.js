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
    <div className='w-screen bg-[#0d0a14] '>
     
       <section>
        <div className='w-screen min-h-screen p-10 gird xl:gri   grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5'>
            {product?.map((e)=>{
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
       </section>

    </div>
  )
}

export default page
