"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/app/components/CartContextProvider";

const Checkout = () => {
  const { cart } = useContext(CartContext);

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

  return (
    <div className="w-full max-w-md mx-auto space-y-5">

      {/* ORDER SUMMARY */}

      <div className="rounded-2xl border border-gray-800 bg-[#111] p-5">

        <h2 className="text-lg font-bold text-white">
          Order Summary
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          Review your order details
        </p>

        <div className="mt-5 space-y-4">

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">
              Subtotal
            </span>

            <span className="text-white font-medium">
              ₹{subtotal.toLocaleString("en-IN")}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">
              Delivery Charges
            </span>

            <span className="text-white font-medium">
              {delivery === 0
                ? "₹0"
                : `₹${delivery}`}
            </span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-400">
              Discount
            </span>

            <span className="text-green-400 font-medium">
              ₹0
            </span>
          </div>

          <div className="border-t border-gray-800 pt-4 flex justify-between items-center">

            <span className="text-white font-semibold">
              Total Amount
            </span>

            <span className="text-xl font-bold text-purple-400">
              ₹{total.toLocaleString("en-IN")}
            </span>

          </div>

        </div>

      </div>

      {/* PLACE ORDER FORM */}

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-gray-800 bg-[#111] p-5 space-y-4"
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
            className="mt-2 w-full rounded-lg border border-gray-800 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
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
            className="mt-2 w-full rounded-lg border border-gray-800 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
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
            className="mt-2 w-full rounded-lg border border-gray-800 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
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
            className="mt-2 w-full resize-none rounded-lg border border-gray-800 bg-[#0a0a0a] px-4 py-3 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500"
          />
        </div>

        {/* SUBMIT */}

        <button
          type="submit"
          disabled={cart.length === 0}
          className="w-full rounded-xl bg-purple-600 py-3.5 text-sm font-bold text-white transition hover:bg-purple-500 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Place Order • ₹{total.toLocaleString("en-IN")}
        </button>

        <p className="text-center text-xs text-gray-500">
          Secure checkout · Your details stay protected
        </p>

      </form>

    </div>
  );
};

export default Checkout;