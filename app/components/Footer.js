import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="relative z-10 border-t border-white/10 bg-black">

    <div className="mx-auto max-w-7xl px-5 py-12 lg:px-8">

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

        <div>

          <div className="flex h-12 w-56 items-center">
            <img
              src="/img/logo.jpeg"
              alt="Cyberflix Systems LLP"
              className="max-h-full max-w-full object-contain object-left"
            />
          </div>

          <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
            Premium PC components and custom PC building
            for creators, gamers and professionals.
          </p>

        </div>


        <div>

          <h3 className="font-semibold">
            Shop
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">

            {["CPU", "GPU", "RAM", "Storage"].map((item) => (
              <a
                href="#"
                key={item}
                className="block transition hover:text-[#3ABAE9]"
              >
                {item}
              </a>
            ))}

          </div>

        </div>


        <div>

          <h3 className="font-semibold">
            Explore
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">

            {["PC Builder", "Custom PCs", "About Us", "Contact"].map((item) => (
              <a
                href="#"
                key={item}
                className="block transition hover:text-[#3ABAE9]"
              >
                {item}
              </a>
            ))}

          </div>

        </div>


        <div>

          <h3 className="font-semibold">
            Support
          </h3>

          <div className="mt-4 space-y-3 text-sm text-gray-500">

            {["Shipping", "Returns", "Privacy", "Terms"].map((item) => (
              <a
                href="#"
                key={item}
                className="block transition hover:text-[#3ABAE9]"
              >
                {item}
              </a>
            ))}

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

export default Footer
