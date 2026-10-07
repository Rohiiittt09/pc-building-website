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

    if (cart.length === 0) {
  return (
    <div className="min-h-screen w-full bg-black text-white">

      {/* Empty Cart */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden px-5 pt-20">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3ABAE9]/10 blur-[120px]" />

        <div className="relative z-10 w-full max-w-lg text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 shadow-[0_0_50px_rgba(58,186,233,0.08)]">
            <span className="text-4xl">🛒</span>
          </div>

          <p className="mt-8 text-xs font-bold uppercase tracking-[0.25em] text-[#3ABAE9]">
            Shopping Cart
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Your cart is empty
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-500">
            Looks like you haven't added any components yet.
            Explore our premium PC hardware and start building your system.
          </p>

          <Link
            href="/Products"
            className="
              mt-8 inline-flex items-center gap-2
              border border-[#3ABAE9]
              bg-[#3ABAE9]
              px-7 py-3.5
              text-sm font-black
              text-black
              transition
              hover:border-white
              hover:bg-white
            "
          >
            Explore Components
            <span>→</span>
          </Link>

        </div>

      </section>
    </div>
  );
}


return (
  <div className="min-h-screen w-full bg-black text-white">

    {/* ================================================= */}
    {/* PAGE HEADER */}
    {/* ================================================= */}

    <section className="relative overflow-hidden border-b border-white/10 pt-20">

      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#3ABAE9]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#3ABAE9]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 py-12 lg:px-8">

        <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#3ABAE9]">
          CYBERFLIX STORE
        </p>

        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

          <div>
            <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
              Your Cart
            </h1>

            <p className="mt-3 text-sm text-gray-500">
              Review your components and complete your build.
            </p>
          </div>

          <div className="flex items-center gap-2 border border-white/10 bg-white/[0.03] px-4 py-2.5">
            <span className="h-2 w-2 rounded-full bg-[#3ABAE9] shadow-[0_0_10px_#3ABAE9]" />

            <span className="text-xs text-gray-400">
              {cart.length} {cart.length === 1 ? "item" : "items"}
            </span>
          </div>

        </div>

      </div>

    </section>


    {/* ================================================= */}
    {/* MAIN CONTENT */}
    {/* ================================================= */}

    <section className="relative mx-auto max-w-7xl px-5 py-10 lg:px-8">

      <div className="grid items-start gap-8 lg:grid-cols-[1fr_390px]">


        {/* ================================================= */}
        {/* LEFT — CART ITEMS */}
        {/* ================================================= */}

        <div>

          <div className="mb-5 flex items-center justify-between">

            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
                Components
              </p>

              <h2 className="mt-1 text-xl font-bold">
                Selected Hardware
              </h2>
            </div>

          </div>


          <div className="space-y-4">

            {cart?.map((e) => {

              return (

                <div
                  key={e.id}
                  className="
                    group relative overflow-hidden
                    border border-white/10
                    bg-[#070707]
                    p-4
                    transition-all duration-300
                    hover:border-[#3ABAE9]/40
                    hover:shadow-[0_15px_40px_rgba(58,186,233,0.05)]
                    sm:p-5
                  "
                >

                  {/* Blue glow */}
                  <div className="
                    pointer-events-none
                    absolute -right-16 -top-16
                    h-32 w-32
                    rounded-full
                    bg-[#3ABAE9]/10
                    blur-[60px]
                    opacity-0
                    transition
                    group-hover:opacity-100
                  " />


                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">


                    {/* PRODUCT IMAGE */}

                    <div className="
                      flex h-28 w-full
                      shrink-0
                      items-center justify-center
                      overflow-hidden
                      border border-white/10
                      bg-gradient-to-br from-[#0c0c0c] to-black
                      sm:h-28 sm:w-28
                    ">

                      <img
                        src={e.img}
                        alt={e.name}
                        className="
                          h-full w-full
                          object-contain
                          p-2
                          transition duration-500
                          group-hover:scale-110
                        "
                      />

                    </div>


                    {/* PRODUCT DETAILS */}

                    <div className="min-w-0 flex-1">

                      <div className="flex flex-wrap items-center gap-2">

                        <span className="border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-[#3ABAE9]">
                          {e.category}
                        </span>

                        <span className="text-[10px] text-gray-600">
                          {e.brand}
                        </span>

                      </div>


                      <h2 className="
                        mt-2
                        line-clamp-2
                        text-sm font-bold
                        leading-6
                        text-white
                        sm:text-base
                      ">
                        {e.name}
                      </h2>


                      {e.processor && (
                        <p className="mt-1 text-xs text-gray-500">
                          Processor:
                          <span className="ml-1 text-gray-300">
                            {e.processor}
                          </span>
                        </p>
                      )}


                      <p className="mt-3 text-lg font-black text-[#3ABAE9]">
                        ₹{(e.price * e.qty).toLocaleString("en-IN")}
                      </p>

                    </div>


                    {/* QUANTITY */}

                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">

                      <span className="text-[10px] uppercase tracking-wider text-gray-600 sm:hidden">
                        Quantity
                      </span>


                      <div className="
                        flex
                        overflow-hidden
                        border border-[#3ABAE9]/25
                        bg-[#3ABAE9]/5
                      ">

                        <button
                          onClick={() => decqty(e.id, e.qty)}
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


                        <span className="
                          flex h-9 w-10
                          items-center justify-center
                          border-x border-[#3ABAE9]/20
                          text-sm font-bold
                          text-[#3ABAE9]
                        ">
                          {e.qty}
                        </span>


                        <button
                          onClick={() => incqty(e.id, e.qty)}
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

                    </div>

                  </div>

                </div>

              );

            })}

          </div>

        </div>


        {/* ================================================= */}
        {/* RIGHT — ORDER SUMMARY */}
        {/* ================================================= */}

        <div className="lg:sticky lg:top-28">

          <div className="space-y-5">


            {/* ORDER SUMMARY */}

            <div className="
              border border-white/10
              bg-[#070707]
              p-5
              sm:p-6
            ">

              <div className="border-b border-white/10 pb-5">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
                  Checkout
                </p>

                <h2 className="mt-2 text-xl font-black">
                  Order Summary
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Review your order details
                </p>

              </div>


              <div className="space-y-4 py-5">

                {/* SUBTOTAL */}

                <div className="flex items-center justify-between gap-4 text-sm">

                  <span className="text-gray-500">
                    Subtotal
                  </span>

                  <span className="font-medium text-white">
                    ₹{subtotal.toLocaleString("en-IN")}
                  </span>

                </div>


                {/* DELIVERY */}

                <div className="flex items-center justify-between gap-4 text-sm">

                  <span className="text-gray-500">
                    Delivery Charges
                  </span>

                  <span className="font-medium text-white">
                    {delivery === 0 ? "₹0" : `₹${delivery}`}
                  </span>

                </div>


                {/* DISCOUNT */}

                <div className="flex items-center justify-between gap-4 text-sm">

                  <span className="text-gray-500">
                    Discount
                  </span>

                  <span className="font-medium text-[#3ABAE9]">
                    ₹0
                  </span>

                </div>

              </div>


              {/* TOTAL */}

              <div className="
                border-t border-white/10
                pt-5
              ">

                <div className="flex items-end justify-between gap-4">

                  <div>

                    <p className="text-xs text-gray-500">
                      Total Amount
                    </p>

                    <p className="mt-1 text-2xl font-black text-white">
                      ₹{total.toLocaleString("en-IN")}
                    </p>

                  </div>

                  <span className="mb-1 text-[9px] font-bold uppercase tracking-wider text-[#3ABAE9]">
                    INR
                  </span>

                </div>

              </div>

            </div>


            {/* ================================================= */}
            {/* DELIVERY FORM */}
            {/* ================================================= */}

            <form
              onSubmit={handleSubmit}
              className="
                border border-white/10
                bg-[#070707]
                p-5
                sm:p-6
              "
            >

              <div className="border-b border-white/10 pb-5">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
                  Delivery
                </p>

                <h2 className="mt-2 text-xl font-black">
                  Delivery Details
                </h2>

                <p className="mt-1 text-xs text-gray-600">
                  Enter your details to place your order
                </p>

              </div>


              <div className="space-y-4 pt-5">


                {/* NAME */}

                <div>

                  <label className="text-xs font-medium text-gray-400">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="
                      mt-2 w-full
                      border border-white/10
                      bg-black
                      px-4 py-3
                      text-sm text-white
                      outline-none
                      placeholder:text-gray-700
                      transition
                      focus:border-[#3ABAE9]/60
                      focus:bg-[#3ABAE9]/[0.02]
                    "
                  />

                </div>


                {/* EMAIL */}

                <div>

                  <label className="text-xs font-medium text-gray-400">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    className="
                      mt-2 w-full
                      border border-white/10
                      bg-black
                      px-4 py-3
                      text-sm text-white
                      outline-none
                      placeholder:text-gray-700
                      transition
                      focus:border-[#3ABAE9]/60
                      focus:bg-[#3ABAE9]/[0.02]
                    "
                  />

                </div>


                {/* PHONE */}

                <div>

                  <label className="text-xs font-medium text-gray-400">
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
                    className="
                      mt-2 w-full
                      border border-white/10
                      bg-black
                      px-4 py-3
                      text-sm text-white
                      outline-none
                      placeholder:text-gray-700
                      transition
                      focus:border-[#3ABAE9]/60
                      focus:bg-[#3ABAE9]/[0.02]
                    "
                  />

                </div>


                {/* ADDRESS */}

                <div>

                  <label className="text-xs font-medium text-gray-400">
                    Delivery Address
                  </label>

                  <textarea
                    name="location"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="House no., street, city, state, pincode"
                    rows={3}
                    required
                    className="
                      mt-2 w-full
                      resize-none
                      border border-white/10
                      bg-black
                      px-4 py-3
                      text-sm text-white
                      outline-none
                      placeholder:text-gray-700
                      transition
                      focus:border-[#3ABAE9]/60
                      focus:bg-[#3ABAE9]/[0.02]
                    "
                  />

                </div>


                {/* SUBMIT */}

                <button
                  type="submit"
                  disabled={cart.length === 0}
                  className="
                    group
                    flex w-full
                    items-center justify-center gap-2
                    border border-[#3ABAE9]
                    bg-[#3ABAE9]
                    px-4 py-3.5
                    text-sm font-black
                    text-black
                    transition-all
                    hover:border-white
                    hover:bg-white
                    disabled:cursor-not-allowed
                    disabled:opacity-40
                  "
                >

                  <span>
                    Place Order
                  </span>

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>

                  <span className="ml-1 border-l border-black/20 pl-2">
                    ₹{total.toLocaleString("en-IN")}
                  </span>

                </button>


                {/* SECURITY */}

                <div className="flex items-center justify-center gap-2 pt-1">

                  <span className="text-[#3ABAE9]">
                    🔒
                  </span>

                  <p className="text-center text-[10px] text-gray-600">
                    Secure checkout · Your details stay protected
                  </p>

                </div>

              </div>

            </form>

          </div>

        </div>

      </div>

    </section>

  </div>

  )
}

export default page
