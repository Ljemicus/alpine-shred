"use client";

import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { getProduct } from "@/lib/products";
import { useCart } from "@/providers/cart-context";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const product = getProduct(params.id as string);
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white mb-4">
          Product not found
        </h1>
        <Link href="/products" className="text-orange-400 hover:text-orange-300">
          &larr; Back to products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link href="/" className="hover:text-orange-400 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-orange-400 transition-colors">
          Snowboards
        </Link>
        <span>/</span>
        <span className="text-slate-200">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Image */}
        <div
          className={`aspect-[3/4] bg-gradient-to-br ${product.gradient} rounded-2xl relative overflow-hidden`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-72 bg-white/20 rounded-xl rotate-6 backdrop-blur-sm border border-white/30 shadow-2xl" />
          </div>
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white text-sm font-medium px-3 py-1.5 rounded-full">
            {product.brand}
          </div>
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-sm px-3 py-1.5 rounded-full">
            {product.category}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-orange-400 font-medium text-sm uppercase tracking-wider">
            {product.brand}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mt-1">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-orange-400 mt-4">
            &euro;{product.price}
          </p>
          <p className="text-slate-300 mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* Specs */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {[
              { label: "Length", value: product.specs.length },
              { label: "Width", value: product.specs.width },
              { label: "Flex", value: product.specs.flex },
            ].map((spec) => (
              <div
                key={spec.label}
                className="bg-slate-800 rounded-xl p-4 border border-slate-700"
              >
                <p className="text-slate-400 text-xs uppercase tracking-wider">
                  {spec.label}
                </p>
                <p className="text-white font-semibold mt-1">{spec.value}</p>
              </div>
            ))}
          </div>

          {/* Size Selector */}
          <div className="mt-8">
            <p className="text-white font-medium mb-3">
              Size (cm){" "}
              {!selectedSize && (
                <span className="text-orange-400 text-sm">
                  — Select a size
                </span>
              )}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-orange-500 border-orange-500 text-white"
                      : "bg-slate-800 border-slate-600 text-slate-300 hover:border-orange-500/50"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            disabled={!selectedSize}
            className={`w-full mt-8 py-4 rounded-xl text-white font-semibold text-lg transition-all duration-200 ${
              added
                ? "bg-green-600"
                : selectedSize
                  ? "bg-orange-500 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/25"
                  : "bg-slate-700 cursor-not-allowed text-slate-400"
            }`}
          >
            {added ? "Added to Cart!" : "Add to Cart"}
          </button>

          {/* Quick Links */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={() => {
                if (!selectedSize) return;
                addToCart(product, selectedSize);
                router.push("/cart");
              }}
              disabled={!selectedSize}
              className="flex-1 py-3 rounded-xl text-orange-400 font-medium border border-orange-500/50 hover:bg-orange-500/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
            <Link
              href="/products"
              className="flex-1 py-3 rounded-xl text-slate-400 font-medium border border-slate-600 hover:bg-slate-800 transition-colors text-center"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
