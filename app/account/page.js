"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CartContext } from "@/app/components/CartContextProvider";
import { signOut, useSession } from "next-auth/react";

const page = () => {

  const { cart, setCart } = useContext(CartContext);
  const { data: session, status } = useSession();
  const router = useRouter();


  // ================= LOADING =================

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-[#3ABAE9]" />

          <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gray-500">
            Loading Account
          </p>

        </div>

      </div>
    );
  }


  // ================= NOT LOGGED IN =================

  if (!session) {
    return (
      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-5 text-white">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#3ABAE9]/10 blur-[130px]" />

        <div className="relative z-10 w-full max-w-md border border-white/10 bg-[#070707] p-8 text-center shadow-[0_25px_80px_rgba(0,0,0,0.5)]">

          <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[#3ABAE9]/30 bg-[#3ABAE9]/10 shadow-[0_0_35px_rgba(58,186,233,0.1)]">

            <span className="text-2xl font-black text-[#3ABAE9]">
              C
            </span>

          </div>


          <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#3ABAE9]">
            Account Access
          </p>

          <h1 className="mt-3 text-2xl font-black">
            Please login first
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-600">
            Login to access your Cyberflix account, orders and PC builds.
          </p>


          <Link
            href="/Login"
            className="
              mt-7
              inline-flex
              w-full
              items-center
              justify-center
              border border-[#3ABAE9]
              bg-[#3ABAE9]
              px-5 py-3.5
              text-sm font-black
              text-black
              transition
              hover:border-white
              hover:bg-white
            "
          >
            Login / Signup →
          </Link>


          <Link
            href="/"
            className="mt-5 block text-xs text-gray-600 transition hover:text-[#3ABAE9]"
          >
            ← Back to Home
          </Link>

        </div>

      </div>
    );
  }


  // ================= USER DATA =================

  const name = session.user?.name || "User";
  const email = session.user?.email || "No email";


  return (
    <div className="min-h-screen w-full overflow-hidden bg-black text-white">


      {/* ================================================= */}
      {/* BACKGROUND */}
      {/* ================================================= */}

      <div className="pointer-events-none fixed inset-0">

        <div className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-[#3ABAE9]/5 blur-[130px]" />

        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#3ABAE9]/5 blur-[130px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(#3ABAE9 1px, transparent 1px), linear-gradient(90deg, #3ABAE9 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />

      </div>


      {/* ================================================= */}
      {/* MAIN */}
      {/* ================================================= */}

      <main className="relative z-10 min-h-screen px-5 pb-16 pt-28 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl">


          {/* ================================================= */}
          {/* PAGE HEADER */}
          {/* ================================================= */}

          <div className="mb-8">

            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3ABAE9]">
              CYBERFLIX SYSTEMS
            </p>

            <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

              <div>

                <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
                  My Account
                </h1>

                <p className="mt-3 text-sm text-gray-500">
                  Manage your profile and account details.
                </p>

              </div>


              {/* Cart shortcut */}

              <Link
                href="/Cart"
                className="
                  inline-flex
                  w-fit
                  items-center
                  gap-2
                  border border-white/10
                  bg-white/[0.03]
                  px-4 py-2.5
                  text-xs font-semibold
                  text-gray-400
                  transition
                  hover:border-[#3ABAE9]/40
                  hover:bg-[#3ABAE9]/5
                  hover:text-[#3ABAE9]
                "
              >
                🛒
                Cart
                {cart?.length > 0 && (
                  <span className="text-[#3ABAE9]">
                    ({cart.length})
                  </span>
                )}
              </Link>

            </div>

          </div>


          {/* ================================================= */}
          {/* PROFILE CARD */}
          {/* ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              border border-white/10
              bg-[#070707]/95
              shadow-[0_25px_80px_rgba(0,0,0,0.4)]
              backdrop-blur-xl
            "
          >

            {/* Top blue line */}

            <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3ABAE9] to-transparent" />


            {/* ================================================= */}
            {/* PROFILE */}
            {/* ================================================= */}

            <div className="p-6 sm:p-8">

              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">


                {/* Avatar */}

                <div
                  className="
                    flex
                    h-24 w-24
                    shrink-0
                    items-center
                    justify-center
                    border border-[#3ABAE9]/40
                    bg-[#3ABAE9]/10
                    text-3xl font-black
                    uppercase
                    text-[#3ABAE9]
                    shadow-[0_0_40px_rgba(58,186,233,0.1)]
                  "
                >
                  {name.charAt(0)}
                </div>


                {/* User Info */}

                <div className="min-w-0">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-600">
                    Account Profile
                  </p>

                  <h2 className="mt-2 truncate text-2xl font-black sm:text-3xl">
                    {name}
                  </h2>

                  <p className="mt-1 break-all text-sm text-gray-500">
                    {email}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-2 border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 px-3 py-1.5">

                    <span className="h-1.5 w-1.5 rounded-full bg-[#3ABAE9] shadow-[0_0_8px_#3ABAE9]" />

                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#3ABAE9]">
                      Google Account
                    </span>

                  </div>

                </div>

              </div>


              {/* Divider */}

              <div className="my-8 h-px bg-white/10" />


              {/* ================================================= */}
              {/* ACCOUNT INFORMATION */}
              {/* ================================================= */}

              <div>

                <div className="mb-4">

                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
                    Profile Information
                  </p>

                  <h3 className="mt-1 text-lg font-bold">
                    Account Details
                  </h3>

                </div>


                <div className="grid gap-4 sm:grid-cols-2">


                  {/* NAME */}

                  <div
                    className="
                      border border-white/10
                      bg-white/[0.02]
                      p-5
                      transition
                      hover:border-[#3ABAE9]/30
                    "
                  >

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Full Name
                    </p>

                    <p className="mt-3 truncate text-sm font-semibold text-white">
                      {name}
                    </p>

                  </div>


                  {/* EMAIL */}

                  <div
                    className="
                      border border-white/10
                      bg-white/[0.02]
                      p-5
                      transition
                      hover:border-[#3ABAE9]/30
                    "
                  >

                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-600">
                      Email Address
                    </p>

                    <p className="mt-3 break-all text-sm font-semibold text-white">
                      {email}
                    </p>

                  </div>

                </div>

              </div>


              {/* ================================================= */}
              {/* ACTIONS */}
              {/* ================================================= */}

              <div className="mt-8 grid gap-3 sm:grid-cols-2">


                {/* ORDERS */}

                <button
                  onClick={() => router.push("/orders")}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    gap-3
                    border border-[#3ABAE9]/30
                    bg-[#3ABAE9]/5
                    px-5 py-3.5
                    text-sm font-bold
                    text-[#3ABAE9]
                    transition-all
                    hover:border-[#3ABAE9]
                    hover:bg-[#3ABAE9]
                    hover:text-black
                  "
                >

                  <span className="text-base transition-transform group-hover:scale-110">
                    📦
                  </span>

                  Order History

                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>

                </button>


                {/* LOGOUT */}

                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    justify-center
                    gap-3
                    border border-red-500/20
                    bg-red-500/5
                    px-5 py-3.5
                    text-sm font-bold
                    text-red-400
                    transition
                    hover:border-red-400/40
                    hover:bg-red-500/10
                  "
                >

                  <span className="transition-transform group-hover:translate-x-1">
                    ↪
                  </span>

                  Logout

                </button>

              </div>

            </div>

          </div>


          {/* ================================================= */}
          {/* BOTTOM INFO */}
          {/* ================================================= */}

          <div className="mt-5 grid gap-3 sm:grid-cols-3">

            <div className="border border-white/10 bg-white/[0.02] p-4">

              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-600">
                Authentication
              </p>

              <p className="mt-2 text-xs font-semibold text-gray-300">
                Google OAuth
              </p>

            </div>


            <div className="border border-white/10 bg-white/[0.02] p-4">

              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-600">
                Orders
              </p>

              <p className="mt-2 text-xs font-semibold text-gray-300">
                View Order History
              </p>

            </div>


            <div className="border border-white/10 bg-white/[0.02] p-4">

              <p className="text-[9px] font-bold uppercase tracking-wider text-gray-600">
                Security
              </p>

              <p className="mt-2 text-xs font-semibold text-[#3ABAE9]">
                Account Protected
              </p>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
};

export default page;