"use client"
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import {CartContext} from "@/app/components/CartContextProvider"

const page = () => {
    const {cart,setCart} = useContext(CartContext)
 const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  const delivery = subtotal > 0 ? 99 : 0;

  const total = subtotal + delivery;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Order Details:", {
      customer: form,
      products: cart,
      subtotal,
      delivery,
      total,
    });
  };
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

    if(cart.length==0){
        return(
            <div className='w-screen min-h-screen bg-[#0d0a14]  '>
               
       <section className=' w-full h-full text-center text-5xl pt-20'>
        <div>
            <h2>🛒 Cart is empty</h2>
        </div>
       </section>
            </div>
        )
    }
  return (
    <div className='w-screen min-h-screen bg-[#0d0a14] '>
    
       <section className="pt-6 sm:pt-10 px-3 sm:px-6">
  <div className="flex flex-col gap-4 sm:gap-5 max-w-4xl mx-auto">

    {cart?.map((e) => {
      return (
        <div
          key={e.id}
          className="w-full flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 rounded-xl border border-gray-800 bg-[#111] p-3 sm:p-4 hover:border-purple-500/40 transition"
        >

          {/* Product Image + Details */}
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">

            <div className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded-lg bg-gray-900 flex items-center justify-center overflow-hidden">
              <img
                src={e.img}
                alt={e.name}
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0">

              <h2 className="text-sm sm:text-base font-semibold text-white truncate">
                {e.name}
              </h2>

              <p className="text-xs text-gray-400 mt-1">
                Brand:{" "}
                <span className="text-gray-300">
                  {e.brand}
                </span>
              </p>

              <p className="text-xs text-gray-400">
                Processor:{" "}
                <span className="text-gray-300">
                  {e.processor}
                </span>
              </p>

              <p className="text-sm font-semibold text-purple-400 mt-1">
                ₹{(e.price * e.qty).toLocaleString("en-IN")}
              </p>

            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between sm:justify-end gap-3">

            <span className="text-xs text-gray-500 sm:hidden">
              Quantity
            </span>

            <div className="flex items-center shrink-0 rounded-lg border border-gray-700 bg-[#181818] overflow-hidden">

              <button
                onClick={() => decqty(e.id, e.qty)}
                className="w-9 h-9 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition"
              >
                −
              </button>

              <span className="w-9 h-9 flex items-center justify-center text-sm font-medium text-white border-x border-gray-700">
                {e.qty}
              </span>

              <button
                onClick={() => incqty(e.id, e.qty)}
                className="w-9 h-9 flex items-center justify-center text-gray-300 hover:bg-purple-600 hover:text-white transition"
              >
                +
              </button>

            </div>
          </div>

        </div>
      );
    })}

  </div>
</section>
<section className="pt-10 sm:pt-16 lg:pt-20 px-3 sm:px-6 pb-10">

  <div className="w-full max-w-md mx-auto space-y-5">

    {/* ORDER SUMMARY */}
    <div className="rounded-2xl border border-gray-800 bg-[#111] p-4 sm:p-5">

      <h2 className="text-lg font-bold text-white">
        Order Summary
      </h2>

      <p className="text-xs text-gray-500 mt-1">
        Review your order details
      </p>

      <div className="mt-5 space-y-4">

        <div className="flex justify-between items-center gap-3 text-sm">
          <span className="text-gray-400">
            Subtotal
          </span>

          <span className="text-white font-medium">
            ₹{subtotal.toLocaleString("en-IN")}
          </span>
        </div>

        <div className="flex justify-between items-center gap-3 text-sm">
          <span className="text-gray-400">
            Delivery Charges
          </span>

          <span className="text-white font-medium">
            {delivery === 0 ? "₹0" : `₹${delivery}`}
          </span>
        </div>

        <div className="flex justify-between items-center gap-3 text-sm">
          <span className="text-gray-400">
            Discount
          </span>

          <span className="text-green-400 font-medium">
            ₹0
          </span>
        </div>

        <div className="border-t border-gray-800 pt-4 flex justify-between items-center gap-3">

          <span className="text-white font-semibold text-sm sm:text-base">
            Total Amount
          </span>

          <span className="text-lg sm:text-xl font-bold text-purple-400">
            ₹{total.toLocaleString("en-IN")}
          </span>

        </div>

      </div>
    </div>

    {/* PLACE ORDER FORM */}
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-gray-800 bg-[#111] p-4 sm:p-5 space-y-4"
    >

      <div>
        <h2 className="text-lg font-bold text-white">
          Delivery Details
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          Enter your details to place your order
        </p>
      </div>

      {/* NAME */}
      <div>
        <label className="text-sm text-gray-300">
          Full Name
        </label>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
          className="mt-2 w-full min-w-0 rounded-lg border border-gray-800 bg-[#0a0a0a] px-3 sm:px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
        />
      </div>

      {/* EMAIL */}
      <div>
        <label className="text-sm text-gray-300">
          Email Address
        </label>

        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
          className="mt-2 w-full min-w-0 rounded-lg border border-gray-800 bg-[#0a0a0a] px-3 sm:px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
        />
      </div>

      {/* PHONE */}
      <div>
        <label className="text-sm text-gray-300">
          Phone Number
        </label>

        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          pattern="[0-9]{10}"
          maxLength={10}
          required
          className="mt-2 w-full min-w-0 rounded-lg border border-gray-800 bg-[#0a0a0a] px-3 sm:px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
        />
      </div>

      {/* LOCATION */}
      <div>
        <label className="text-sm text-gray-300">
          Delivery Address
        </label>

        <textarea
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="House no., street, city, state, pincode"
          rows={3}
          required
          className="mt-2 w-full min-w-0 resize-none rounded-lg border border-gray-800 bg-[#0a0a0a] px-3 sm:px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
        />
      </div>

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={cart.length === 0}
        className="w-full rounded-xl bg-purple-600 px-3 py-3.5 text-sm font-bold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
      >
        Place Order • ₹{total.toLocaleString("en-IN")}
      </button>

      <p className="text-center text-xs text-gray-500">
        Secure checkout · Your details stay protected
      </p>

    </form>

  </div>
</section>
    </div>
  )
}

export default page
