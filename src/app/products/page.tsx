"use client";

import { useSearchParams } from "next/navigation";
import { useState, useMemo, Suspense } from "react";
import { products, brands, categories } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialBrand = searchParams.get("brand") || "";
  const initialCategory = searchParams.get("category") || "";
  const initialSearch = searchParams.get("search") || "";

  const [brand, setBrand] = useState(initialBrand);
  const [category, setCategory] = useState(initialCategory);
  const [priceRange, setPriceRange] = useState("");
  const [search, setSearch] = useState(initialSearch);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand && p.brand !== brand) return false;
      if (category && p.category !== category) return false;
      if (priceRange) {
        const [min, max] = priceRange.split("-").map(Number);
        if (p.price < min || (max && p.price > max)) return false;
      }
      if (search) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [brand, category, priceRange, search]);

  const clearFilters = () => {
    setBrand("");
    setCategory("");
    setPriceRange("");
    setSearch("");
  };

  const hasFilters = brand || category || priceRange || search;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">Snowboards</h1>
        <p className="text-slate-400 mt-1">
          {filtered.length} board{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-slate-800 text-white text-sm rounded-lg px-4 py-2 border border-slate-600 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 placeholder-slate-400 w-full sm:w-48"
        />
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="bg-slate-800 text-white text-sm rounded-lg px-4 py-2 border border-slate-600 focus:border-orange-500 focus:outline-none"
        >
          <option value="">All Brands</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-slate-800 text-white text-sm rounded-lg px-4 py-2 border border-slate-600 focus:border-orange-500 focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <select
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
          className="bg-slate-800 text-white text-sm rounded-lg px-4 py-2 border border-slate-600 focus:border-orange-500 focus:outline-none"
        >
          <option value="">Any Price</option>
          <option value="0-400">Under €400</option>
          <option value="400-600">€400 – €600</option>
          <option value="600-9999">€600+</option>
        </select>
        {hasFilters && (
          <button
            onClick={clearFilters}
            className="text-orange-400 hover:text-orange-300 text-sm font-medium px-3 py-2 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Product Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-slate-400 text-lg">
            No boards match your filters.
          </p>
          <button
            onClick={clearFilters}
            className="mt-4 text-orange-400 hover:text-orange-300 font-medium"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-fade-in">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse space-y-4">
            <div className="h-8 w-48 bg-slate-800 rounded" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-slate-800 rounded-xl h-80" />
              ))}
            </div>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
