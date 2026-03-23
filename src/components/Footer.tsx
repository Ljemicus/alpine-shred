"use client";

import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-700 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Alpine Shred 🏔️
            </h3>
            <p className="text-slate-400 text-sm">
              Premium snowboards from the world&apos;s best brands. Gear up for
              the mountain.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Shop
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  All Snowboards
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Burton" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  Burton
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Jones" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  Jones
                </Link>
              </li>
              <li>
                <Link href="/products?brand=Capita" className="text-slate-400 hover:text-orange-400 text-sm transition-colors">
                  Capita
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Info
            </h4>
            <ul className="space-y-2">
              <li>
                <span className="text-slate-400 text-sm">Shipping & Returns</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Size Guide</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Contact Us</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">FAQ</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
              Newsletter
            </h4>
            {subscribed ? (
              <p className="text-green-400 text-sm">
                Thanks for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-slate-800 text-white text-sm rounded-lg px-3 py-2 border border-slate-600 focus:border-orange-500 focus:outline-none placeholder-slate-400"
                />
                <button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              {["Instagram", "YouTube", "Twitter"].map((s) => (
                <span
                  key={s}
                  className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors cursor-pointer text-xs font-bold"
                  title={s}
                >
                  {s[0]}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            &copy; 2026 Alpine Shred. All rights reserved. Demo webshop.
          </p>
        </div>
      </div>
    </footer>
  );
}
