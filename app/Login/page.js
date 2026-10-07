"use client"
import Link from "next/link"
import React, { useEffect, useState } from 'react'
import { useSession,signIn,signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'

const page = () => {
    const { data: session, status } = useSession()
  const router = useRouter()
  useEffect(() => {
    if(status=="authenticated"){
      router.push("/account")
    }
  }, [status])
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">

  {/* ================= BACKGROUND ================= */}

  <div className="pointer-events-none absolute inset-0">

    {/* Blue ambient glow */}
    <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#3ABAE9]/10 blur-[130px]" />

    <div className="absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#3ABAE9]/5 blur-[100px]" />

    <div className="absolute -right-40 top-20 h-80 w-80 rounded-full bg-[#3ABAE9]/5 blur-[100px]" />

    {/* Grid */}
    <div
      className="absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(#3ABAE9 1px, transparent 1px), linear-gradient(90deg, #3ABAE9 1px, transparent 1px)",
        backgroundSize: "50px 50px",
      }}
    />

  </div>


  {/* ================= LOGIN CONTENT ================= */}

  <div className="relative z-10 flex min-h-screen items-center justify-center px-5 py-28">

    <div className="w-full max-w-md">

      {/* Logo / Brand */}

      <div className="mb-8 flex flex-col items-center">

        <Link href="/" className="group flex flex-col items-center">

          <div
            className="
              flex h-16 w-16
              items-center justify-center
              border border-[#3ABAE9]/40
              bg-[#3ABAE9]/10
              shadow-[0_0_40px_rgba(58,186,233,0.12)]
              transition
              group-hover:border-[#3ABAE9]
              group-hover:shadow-[0_0_50px_rgba(58,186,233,0.2)]
            "
          >
            <span className="text-2xl font-black text-[#3ABAE9]">
              C
            </span>
          </div>

          <h1 className="mt-4 text-xl font-black tracking-[0.12em]">
            CYBERFLIX
          </h1>

          <p className="mt-1 text-[9px] uppercase tracking-[0.35em] text-[#3ABAE9]">
            Systems LLP
          </p>

        </Link>

      </div>


      {/* ================= CARD ================= */}

      <div
        className="
          relative
          overflow-hidden
          border border-white/10
          bg-[#070707]/90
          p-6
          shadow-[0_25px_80px_rgba(0,0,0,0.5)]
          backdrop-blur-xl
          sm:p-8
        "
      >

        {/* Top blue line */}

        <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-[#3ABAE9] to-transparent" />


        {/* Heading */}

        <div className="text-center">

          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#3ABAE9]">
            Welcome Back
          </p>

          <h2 className="mt-3 text-2xl font-black sm:text-3xl">
            Login / Signup
          </h2>

          <p className="mx-auto mt-3 max-w-xs text-xs leading-5 text-gray-500">
            Sign in to manage your account, orders and PC builds.
          </p>

        </div>


        {/* ================= GOOGLE BUTTON ================= */}

        <div className="mt-8">

          <button
            onClick={() => signIn("google")}
            className="
              group
              flex w-full
              cursor-pointer
              items-center
              justify-center
              gap-3
              border border-white/10
              bg-white
              px-5 py-3.5
              text-sm font-semibold
              text-gray-800
              transition-all
              duration-300
              hover:border-[#3ABAE9]
              hover:bg-gray-50
              hover:shadow-[0_0_30px_rgba(58,186,233,0.12)]
            "
          >

            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
            />

            <span>
              Continue with Google
            </span>

          </button>

        </div>


        {/* Divider */}

        <div className="my-7 flex items-center gap-4">

          <div className="h-px flex-1 bg-white/10" />

          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
            Secure Access
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>


        {/* Security info */}

        <div className="border border-[#3ABAE9]/10 bg-[#3ABAE9]/[0.03] p-4">

          <div className="flex items-start gap-3">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 text-sm text-[#3ABAE9]">
              🔒
            </div>

            <div>

              <p className="text-xs font-semibold text-gray-300">
                Secure authentication
              </p>

              <p className="mt-1 text-[10px] leading-5 text-gray-600">
                Your account is securely authenticated through Google.
              </p>

            </div>

          </div>

        </div>


        {/* Back to home */}

        <Link
          href="/"
          className="
            mt-6
            flex
            items-center
            justify-center
            gap-2
            text-xs
            text-gray-600
            transition
            hover:text-[#3ABAE9]
          "
        >
          <span>←</span>
          Back to Cyberflix
        </Link>

      </div>


      {/* Footer */}

      <p className="mt-6 text-center text-[10px] text-gray-700">
        © 2026 Cyberflix Systems LLP
      </p>

    </div>

  </div>

</div>
  )
}

export default page
