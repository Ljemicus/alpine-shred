"use client";

import Link from "next/link";
import { useCart } from "@/providers/cart-context";

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, subtotal } = useCart();

  const shipping = subtotal >= 500 ? 0 : 29;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center animate-fade-in">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Your cart is empty
        </h1>
        <p className="text-slate-400 mb-6">
          Time to find your next board!
        </p>
        <Link
          href="/products"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
        >
          Shop Snowboards
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      <h1 className="text-3xl font-bold text-white mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedSize}`}
              className="bg-slate-800 rounded-xl border border-slate-700 p-4 sm:p-6 flex gap-4 sm:gap-6"
            >
              {/* Mini Image */}
              <Link
                href={`/products/${item.product.id}`}
                className={`shrink-0 w-20 h-28 sm:w-24 sm:h-32 bg-gradient-to-br ${item.product.gradient} rounded-lg relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-6 h-16 bg-white/20 rounded rotate-6" />
                </div>
              </Link>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link
                      href={`/products/${item.product.id}`}
                      className="text-white font-semibold hover:text-orange-400 transition-colors"
                    >
                      {item.product.brand} {item.product.name}
                    </Link>
                    <p className="text-slate-400 text-sm mt-1">
                      Size: {item.selectedSize} cm
                    </p>
                  </div>
                  <button
                    onClick={() =>
                      removeFromCart(item.product.id, item.selectedSize)
                    }
                    className="text-slate-500 hover:text-red-400 transition-colors p-1 shrink-0"
                    aria-label="Remove item"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex items-center justify-between mt-4">
                  {/* Quantity */}
                  <div className="flex items-center border border-slate-600 rounded-lg">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.quantity - 1
                        )
                      }
                      className="px-3 py-1 text-slate-400 hover:text-white transition-colors"
                    >
                      −
                    </button>
                    <span className="px-3 py-1 text-white font-medium min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.product.id,
                          item.selectedSize,
                          item.quantity + 1
                        )
                      }
                      className="px-3 py-1 text-slate-400 hover:text-white transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-orange-400 font-bold">
                    &euro;{item.product.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 sticky top-24">
            <h2 className="text-lg font-bold text-white mb-4">
              Order Summary
            </h2>
            <div className="space-y-3 text-sm">
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
              {shipping > 0 && (
                <p className="text-xs text-slate-500">
                  Free shipping on orders over &euro;500
                </p>
              )}
              <div className="border-t border-slate-700 pt-3 flex justify-between text-white font-bold text-lg">
                <span>Total</span>
                <span>&euro;{total}</span>
              </div>
            </div>
            <Link
              href="/checkout"
              className="block w-full mt-6 bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 rounded-xl text-center transition-colors hover:shadow-lg hover:shadow-orange-500/25"
            >
              Checkout
            </Link>
            <Link
              href="/products"
              className="block w-full mt-3 text-slate-400 hover:text-orange-400 text-sm text-center py-2 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
