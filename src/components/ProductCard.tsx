"use client";

import Link from "next/link";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-orange-500/10"
    >
      {/* Product Image */}
      <div
        className={`aspect-[3/4] bg-gradient-to-br ${product.gradient} relative overflow-hidden`}
      >
        <img
          src={product.image}
          alt={`${product.brand} ${product.name}`}
          className="absolute inset-0 w-full h-full object-contain p-4 drop-shadow-2xl"
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = 'none';
            (e.target as HTMLImageElement).nextElementSibling?.classList.remove('hidden');
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center hidden">
          <div className="w-16 h-48 bg-white/20 rounded-lg rotate-6 backdrop-blur-sm border border-white/30" />
        </div>
        <div className="absolute top-3 left-3 bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-2 py-1 rounded-full">
          {product.brand}
        </div>
        <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full">
          {product.category}
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="text-white font-semibold group-hover:text-orange-400 transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm mt-1">{product.brand}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-orange-400 font-bold text-lg">
            &euro;{product.price}
          </span>
          <span className="text-slate-500 text-xs">
            {product.specs.length}
          </span>
        </div>
      </div>
    </Link>
  );
}
