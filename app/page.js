"use client"
import Image from "next/image";
import Link from 'next/link'
import React, { useContext, useEffect, useState } from 'react'
import {CartContext} from "@/app/components/CartContextProvider"
import { signIn, useSession } from "next-auth/react";
import {blog} from "@/app/components/Blog"
export default function Home() {
  const [statuss, setStatuss] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    setStatuss(
      "The form UI is ready. Connect an API to send your message."
    );
  }
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "General Feedback",
    message: "",
  });
  
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
              href="/Pc-builder"
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
    
<section className="relative z-10 overflow-hidden border-t border-white/5 bg-[#05080B] py-20 sm:py-24">

  <div className="pointer-events-none absolute -right-32 top-10 h-72 w-72 rounded-full bg-[#3ABAE9]/[0.07] blur-[100px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">

    {/* Section Heading */}
    <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

      <div className="max-w-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
          Knowledge Center
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
          Insights for Your{" "}
          <span className="text-[#3ABAE9]">Next Build.</span>
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
          Explore PC building guides, hardware comparisons, and expert
          insights to make smarter decisions for your setup.
        </p>

      </div>

      <a
        href="/blog"
        className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#3ABAE9]/40 px-5 py-3 text-sm font-semibold text-[#3ABAE9] transition duration-300 hover:bg-[#3ABAE9] hover:text-[#05080B]"
      >
        View All Articles
        <span>↗</span>
      </a>

    </div>

    {/* Blog Cards */}
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

      {[
        {
          category: "PC BUILDING",
          title: "How to Build Your First Gaming PC",
          description:
            "Learn about essential PC components, compatibility, and how to plan a build that suits your needs.",
          image:
            "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=900&q=85",
          time: "8 min read",
          link: "/blog/how-to-build-your-first-gaming-pc",
        },
        {
          category: "BUYING GUIDE",
          title: "Choosing the Right Graphics Card",
          description:
            "Understand GPU performance, memory, and the key factors to consider before your next upgrade.",
          image:
            "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=85",
          time: "6 min read",
          link: "/blog/graphics-card-buying-guide",
        },
        {
          category: "HARDWARE KNOWLEDGE",
          title: "CPU vs GPU: Understanding the Difference",
          description:
            "Discover how processors and graphics cards work together to power gaming and creative workloads.",
          image:
            "https://images.unsplash.com/photo-1555617981-dac3880eac6e?auto=format&fit=crop&w=900&q=85",
          time: "5 min read",
          link: "/blog/cpu-vs-gpu",
        },
      ].map((blog) => (

        <article
          key={blog.title}
          className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0A1117] transition duration-300 hover:-translate-y-1 hover:border-[#3ABAE9]/40 hover:shadow-[0_15px_45px_rgba(58,186,233,0.07)]"
        >

          {/* Image */}
          <a
            href={blog.link}
            aria-label={`Read ${blog.title}`}
            className="relative block h-52 overflow-hidden bg-[#101820] sm:h-56"
          >

            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#05080B]/80 via-transparent to-transparent" />

            <span className="absolute bottom-4 left-4 rounded-md border border-[#3ABAE9]/30 bg-[#05080B]/80 px-3 py-1.5 text-[10px] font-bold tracking-widest text-[#3ABAE9] backdrop-blur-md">
              {blog.category}
            </span>

          </a>

          {/* Content */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">

            <p className="text-xs text-gray-500">
              CYBERFLIX EDITORIAL
              <span className="mx-2 text-[#3ABAE9]">•</span>
              {blog.time}
            </p>

            <h3 className="mt-4 text-xl font-bold leading-snug text-white transition group-hover:text-[#3ABAE9]">
              {blog.title}
            </h3>

            <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
              {blog.description}
            </p>

            <a
              href={blog.link}
              className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-5 text-sm font-semibold text-white transition hover:text-[#3ABAE9]"
            >
              Read Article

              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#3ABAE9]/30 text-[#3ABAE9] transition group-hover:bg-[#3ABAE9] group-hover:text-[#05080B]">
                ↗
              </span>
            </a>

          </div>

        </article>

      ))}

    </div>

    {/* Bottom CTA */}
    <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#3ABAE9]/20 bg-gradient-to-r from-[#0A1117] to-[#0C1920] p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

      <div>
        <h3 className="text-lg font-bold text-white sm:text-xl">
          Ready to upgrade your knowledge?
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-400">
          Find useful guides for your next PC build or hardware upgrade.
        </p>
      </div>

      <a
        href="/blog"
        className="inline-flex w-fit shrink-0 items-center gap-2 rounded-lg bg-[#3ABAE9] px-5 py-3 text-sm font-bold text-[#05080B] transition hover:bg-white"
      >
        Explore Tech Guides
        <span>→</span>
      </a>

    </div>

  </div>

</section>

<section
  id="about"
  className="relative z-10 overflow-hidden border-t border-white/5 bg-[#05080B] py-20 sm:py-24"
>
  <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#3ABAE9]/[0.07] blur-[110px]" />

  <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
    <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

      {/* Left: Image */}
      <div className="relative">
        <div className="absolute -inset-3 rounded-3xl border border-[#3ABAE9]/10" />

        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0A1117]">
          <img
            src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=85"
            alt="Custom PC hardware and computer building setup"
            loading="lazy"
            className="h-[320px] w-full object-cover sm:h-[420px]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#05080B]/90 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
              CYBERFLIX Systems LLP
            </p>

            <h3 className="mt-2 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
              Technology built around your needs.
            </h3>
          </div>
        </div>

        {/* Decorative badge */}
        <div className="absolute -right-2 top-5 rounded-xl border border-[#3ABAE9]/30 bg-[#0A1117]/95 px-4 py-3 shadow-xl sm:-right-5 sm:top-8">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#3ABAE9]" />
            <span className="text-xs font-semibold text-white">
              PC Hardware & Custom Builds
            </span>
          </div>
        </div>
      </div>

      {/* Right: About Content */}
      <div>
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
          About Cyberflix
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          More Than Just
          <span className="block text-[#3ABAE9]">
            PC Components.
          </span>
        </h2>

        <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
          At CYBERFLIX Systems LLP, we focus on PC hardware, component
          discovery, and custom PC configurations. Our goal is to help
          users explore their options and make informed decisions for
          their computing needs.
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
          Whether you are planning a gaming setup, upgrading your
          existing system, or exploring hardware for creative work,
          discover components and build possibilities in one place.
        </p>

        {/* Features */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2">

          {[
            {
              icon: "◈",
              title: "Component Discovery",
              description:
                "Explore PC hardware and compare your options.",
            },
            {
              icon: "⌘",
              title: "Custom Configurations",
              description:
                "Plan a setup around your requirements.",
            },
            {
              icon: "↗",
              title: "Performance Focus",
              description:
                "Understand components for different workloads.",
            },
            {
              icon: "◎",
              title: "Built Around You",
              description:
                "Make informed choices for your next PC build.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="group flex gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 transition duration-300 hover:border-[#3ABAE9]/40 hover:bg-[#3ABAE9]/[0.04]"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 text-xl text-[#3ABAE9] transition group-hover:bg-[#3ABAE9] group-hover:text-[#05080B]">
                {item.icon}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="/about"
            className="inline-flex items-center gap-2 rounded-lg bg-[#3ABAE9] px-6 py-3 text-sm font-bold text-[#05080B] transition hover:bg-white"
          >
            Discover Our Story
            <span>→</span>
          </a>

          <a
            href="/Products"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#3ABAE9]/50 hover:text-[#3ABAE9]"
          >
            Explore Components
            <span>↗</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
<section
      id="contact"
      className="relative z-10 overflow-hidden border-t border-white/5 bg-[#05080B] py-16 sm:py-20"
    >
      <div className="pointer-events-none absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#3ABAE9]/[0.07] blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">

          {/* Left: Contact intro */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#3ABAE9]">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
              Your Thoughts.
              <span className="block text-[#3ABAE9]">
                Our Next Step.
              </span>
            </h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
              Have a suggestion, question, or idea for CYBERFLIX?
              We would love to hear what you think. Share your feedback
              and help us make your PC building experience better.
            </p>

            <div className="mt-7 flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#3ABAE9]/20 bg-[#3ABAE9]/10 text-xl text-[#3ABAE9]">
                ✉
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Questions or suggestions?
                </h3>
                <p className="mt-1 text-sm leading-6 text-gray-500">
                  Send us a message using the form. We welcome your
                  feedback and ideas.
                </p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["Feedback", "Suggestions", "PC Building", "Support"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-xs text-gray-400"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Right: Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#0A1117] p-5 shadow-2xl sm:p-7"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white">
                Send Us a Message
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Tell us what is on your mind.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-[#05080B] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#3ABAE9]/60 focus:ring-2 focus:ring-[#3ABAE9]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  maxLength={254}
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-lg border border-white/10 bg-[#05080B] px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-[#3ABAE9]/60 focus:ring-2 focus:ring-[#3ABAE9]/10"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                What would you like to discuss?
              </label>
              <select
                id="contact-subject"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                className="w-full rounded-lg border border-white/10 bg-[#05080B] px-4 py-3 text-sm text-white outline-none transition focus:border-[#3ABAE9]/60"
              >
                <option>General Feedback</option>
                <option>Suggestion or Idea</option>
                <option>PC Building Help</option>
                <option>Product Enquiry</option>
                <option>Technical Support</option>
                <option>Business Enquiry</option>
              </select>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Your Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                placeholder="Share your thoughts, feedback, or questions..."
                required
                minLength={5}
                maxLength={3000}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="w-full resize-y rounded-lg border border-white/10 bg-[#05080B] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-gray-600 focus:border-[#3ABAE9]/60 focus:ring-2 focus:ring-[#3ABAE9]/10"
              />
              <p className="mt-2 text-right text-xs text-gray-600">
                {form.message.length}/3000 characters
              </p>
            </div>

            <button
              type="submit"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#3ABAE9] px-5 py-3.5 text-sm font-bold text-[#05080B] transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#3ABAE9] focus:ring-offset-2 focus:ring-offset-[#0A1117]"
            >
              Send Message
              <span>↗</span>
            </button>

            {status && (
              <p
                role="status"
                className="mt-4 rounded-lg border border-[#3ABAE9]/20 bg-[#3ABAE9]/5 p-3 text-sm leading-6 text-[#3ABAE9]"
              >
                {status}
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-gray-600">
              Your information should be handled responsibly and used
              to respond to your enquiry.
            </p>
          </form>

        </div>
      </div>
    </section>
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


  
  

</div>)
}
