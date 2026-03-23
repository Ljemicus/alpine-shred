"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/providers/cart-context";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
    country: "",
  });

  const shipping = subtotal >= 500 ? 0 : 29;
  const total = subtotal + shipping;

  const updateField = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    clearCart();
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto px-4 py-20 text-center animate-slide-up">
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-10">
          <div className="text-5xl mb-4">🎉</div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Order Placed!
          </h1>
          <p className="text-slate-400 mb-2">
            Thanks for your order, {form.name}!
          </p>
          <p className="text-slate-500 text-sm mb-6">
            A confirmation has been sent to {form.email}
          </p>
          <p className="text-orange-400 font-bold text-xl mb-8">
            Total: &euro;{total}
          </p>
          <Link
            href="/"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Nothing to checkout
        </h1>
        <Link
          href="/products"
          className="text-orange-400 hover:text-orange-300"
        >
          Shop Snowboards &rarr;
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="lg:col-span-2 bg-slate-800 rounded-xl border border-slate-700 p-6 sm:p-8"
        >
          <h2 className="text-lg font-bold text-white mb-6">
            Shipping Details
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: "name", label: "Full Name", type: "text", full: true },
              { key: "email", label: "Email", type: "email", full: true },
              { key: "address", label: "Address", type: "text", full: true },
              { key: "city", label: "City", type: "text", full: false },
              { key: "zip", label: "Zip / Postal Code", type: "text", full: false },
              { key: "country", label: "Country", type: "text", full: true },
            ].map((f) => (
              <div
                key={f.key}
                className={f.full ? "sm:col-span-2" : ""}
              >
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  required
                  value={form[f.key as keyof typeof form]}
                  onChange={(e) => updateField(f.key, e.target.value)}
                  className="w-full bg-slate-900 text-white rounded-lg px-4 py-3 border border-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-slate-500"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 rounded-xl transition-all duration-200 text-lg hover:shadow-lg hover:shadow-orange-500/25"
          >
            Place Order — &euro;{total}
          </button>
        </form>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 sticky top-24">
            <h2 className="text-lg font-bold text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.selectedSize}`}
                  className="flex items-center gap-3"
                >
                  <div
                    className={`w-12 h-16 bg-gradient-to-br ${item.product.gradient} rounded-md shrink-0 relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3 h-8 bg-white/20 rounded rotate-6" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-sm font-medium truncate">
                      {item.product.name}
                    </p>
                    <p className="text-slate-400 text-xs">
                      Size: {item.selectedSize} cm &times; {item.quantity}
                    </p>
                  </div>
                  <p className="text-slate-300 text-sm font-medium shrink-0">
                    &euro;{item.product.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-700 mt-4 pt-4 space-y-2 text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Subtotal</span>
                <span>&euro;{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? (
                    <span className="text-green-400">Free</span>
                  ) : (
                    `€${shipping}`
                  )}
                </span>
              </div>
              <div className="border-t border-slate-700 pt-2 flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>&euro;{total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
