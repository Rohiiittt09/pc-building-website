"use client"
import React, { useContext } from 'react'
import Link from "next/link"
import {CartContext} from "@/app/components/CartContextProvider"
import { signOut, useSession } from 'next-auth/react'


const page = () => {
     const {cart,setCart} = useContext(CartContext)
     const {data:session,status} = useSession()
     if (status === "loading") {
    return (
      <div className="min-h-screen bg-[#08050d] flex items-center justify-center text-white">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="min-h-screen bg-[#08050d] flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white">
            Please login first
          </h1>

          <Link
           href={"/"}
            className="mt-5 rounded-lg bg-purple-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-purple-500 transition"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const name = session.user?.name || "User";
  const email = session.user?.email || "No email";

  return (
    <div>
      
      <main className="min-h-screen bg-[#08050d] px-4 py-10 text-white sm:px-6 lg:px-8">
      
      <div className="mx-auto max-w-3xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-medium text-purple-400">
            MY ACCOUNT
          </p>

          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Account
          </h1>

          <p className="mt-2 text-sm text-gray-400">
            Manage your profile and account details.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-[#0d0a14] p-6 shadow-xl shadow-purple-950/10 sm:p-8">

          <div className="flex flex-col items-center gap-6 sm:flex-row">

            {/* Profile Photo */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-fuchsia-600 text-3xl font-bold uppercase shadow-lg shadow-purple-900/30 ring-4 ring-purple-500/10">
              {name.charAt(0)}
            </div>

            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-semibold">
                {name}
              </h2>

              <p className="mt-1 text-sm text-gray-400">
                {email}
              </p>

              <p className="mt-3 inline-block rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-300">
                Google Account
              </p>
            </div>

          </div>

          <div className="my-7 h-px bg-white/10" />

          <div className="grid gap-5 sm:grid-cols-2">

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Name
              </p>

              <p className="mt-2 font-medium text-white">
                {name}
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
              <p className="text-xs uppercase tracking-wider text-gray-500">
                Email
              </p>

              <p className="mt-2 break-all font-medium text-white">
                {email}
              </p>
            </div>

          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">

            <button
              onClick={() => router.push("/orders")}
              className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-purple-500/30 bg-purple-500/10 px-5 py-3 text-sm font-semibold text-purple-300 transition hover:border-purple-500/50 hover:bg-purple-500/20 hover:text-white"
            >
              <span>📦</span>
              Order History
            </button>

            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20 hover:text-red-300"
            >
              <span>↪</span>
              Logout
            </button>

          </div>

        </div>

      </div>

    </main>
    </div>
  )
}

export default page
