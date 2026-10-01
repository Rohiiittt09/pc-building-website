"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import {CartContext} from "@/app/components/CartContextProvider"


const page = () => {
 const {addToCart,cart,setCart}=useContext(CartContext)
    
  return (
    <div className=' w-screen min-h-screen bg-[#0d0a14] '>
      
       <section className="relative z-10 border-t border-white/5 bg-[#0d0a14] py-20">
  <div className="mx-auto max-w-7xl px-5 lg:px-8">

    {/* Heading */}
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
        Contact Us
      </p>

      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
        Let's Build Something
        <span className="text-purple-500"> Powerful.</span>
      </h2>

      <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base">
        Have a question about PC components, compatibility or your custom
        build? Our team is here to help.
      </p>
    </div>


    {/* Contact Content */}
    <div className="mt-12 grid gap-8 lg:grid-cols-2">

      {/* Left Side */}
      <div className="rounded-3xl border border-white/10 bg-[#0d0a14] p-6 sm:p-8">

        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          Get In Touch
        </p>

        <h3 className="mt-3 text-2xl font-bold">
          We're here to help.
        </h3>

        <p className="mt-4 max-w-lg text-sm leading-7 text-gray-500">
          Whether you're building a gaming PC, workstation or upgrading
          your existing system, feel free to contact us.
        </p>


        {/* Contact Details */}
        <div className="mt-8 space-y-5">

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg">
              ✉
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Email
              </p>

              <p className="mt-1 text-sm font-medium text-gray-200">
                support@cyberflix.com
              </p>
            </div>
          </div>


          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg">
              ☎
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Phone
              </p>

              <p className="mt-1 text-sm font-medium text-gray-200">
                +91 98765 43210
              </p>
            </div>
          </div>


          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-lg">
              📍
            </div>

            <div>
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Location
              </p>

              <p className="mt-1 text-sm font-medium text-gray-200">
                New Delhi, India
              </p>
            </div>
          </div>

        </div>


        {/* Bottom Box */}
        <div className="mt-8 rounded-2xl border border-purple-500/20 bg-purple-500/5 p-5">

          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></span>

            <p className="text-sm font-semibold text-green-400">
              We're online
            </p>
          </div>

          <p className="mt-2 text-xs leading-5 text-gray-500">
            Our support team is available to answer your questions about
            components and PC builds.
          </p>

        </div>

      </div>


      {/* Right Side - Form */}
      <div className="rounded-3xl border border-white/10 bg-[#0d0a14] p-6 sm:p-8">

        <h3 className="text-2xl font-bold">
          Send us a message
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          Fill out the form and we'll get back to you.
        </p>


        <form className="mt-7 space-y-5">

          {/* Name + Email */}
          <div className="grid gap-5 sm:grid-cols-2">

            <div>
              <label className="mb-2 block text-xs font-medium text-gray-400">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>


            <div>
              <label className="mb-2 block text-xs font-medium text-gray-400">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
              />
            </div>

          </div>


          {/* Subject */}
          <div>
            <label className="mb-2 block text-xs font-medium text-gray-400">
              Subject
            </label>

            <input
              type="text"
              placeholder="How can we help?"
              className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
            />
          </div>


          {/* Message */}
          <div>
            <label className="mb-2 block text-xs font-medium text-gray-400">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Tell us about your requirements..."
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500"
            ></textarea>
          </div>


          {/* Button */}
          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-purple-500 hover:shadow-lg hover:shadow-purple-600/20"
          >
            Send Message →
          </button>

        </form>

      </div>

    </div>

  </div>
</section>
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
    </div>
  )
}

export default page
