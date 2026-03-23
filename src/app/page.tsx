import Link from "next/link";
import { products, brands } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl" />
        </div>
        {/* CSS Mountain Art */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 200" className="w-full text-slate-950" fill="currentColor">
            <path d="M0,200 L200,80 L400,140 L600,40 L800,120 L1000,20 L1200,100 L1440,60 L1440,200 Z" opacity="0.3" />
            <path d="M0,200 L300,120 L500,160 L720,80 L900,140 L1100,60 L1300,130 L1440,90 L1440,200 Z" opacity="0.5" />
            <path d="M0,200 L150,160 L400,180 L600,140 L800,170 L1000,130 L1200,160 L1440,140 L1440,200 Z" />
          </svg>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl animate-fade-in">
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider mb-3">
              2025/26 Season Collection
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Ride the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
                {" "}
                Mountain
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-300 max-w-lg">
              Premium snowboards from the world&apos;s best brands. Find your
              perfect ride for every condition and terrain.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Shop Snowboards
              </Link>
              <Link
                href="/products?category=Freestyle"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-lg backdrop-blur-sm transition-all duration-200 border border-white/20"
              >
                Freestyle Boards
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-center text-sm font-semibold text-slate-400 uppercase tracking-wider mb-8">
          Top Brands
        </h2>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {brands.map((brand) => (
            <Link
              key={brand}
              href={`/products?brand=${brand}`}
              className="bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-orange-500/50 rounded-xl px-6 py-4 text-slate-300 hover:text-orange-400 font-semibold transition-all duration-200 hover:-translate-y-0.5"
            >
              {brand}
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">Featured Boards</h2>
          <Link
            href="/products"
            className="text-orange-400 hover:text-orange-300 text-sm font-medium transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="text-2xl font-bold text-white mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              name: "All-Mountain",
              desc: "Versatile boards for every condition",
              gradient: "from-blue-600 to-cyan-500",
            },
            {
              name: "Freestyle",
              desc: "Park-ready twin shapes",
              gradient: "from-purple-600 to-pink-500",
            },
            {
              name: "Freeride",
              desc: "Powder-seeking directional shapes",
              gradient: "from-orange-600 to-amber-500",
            },
          ].map((cat) => (
            <Link
              key={cat.name}
              href={`/products?category=${cat.name}`}
              className={`relative bg-gradient-to-br ${cat.gradient} rounded-xl p-8 overflow-hidden group`}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="relative">
                <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                <p className="text-white/80 text-sm mt-1">{cat.desc}</p>
                <span className="inline-block mt-4 text-white font-medium text-sm group-hover:translate-x-1 transition-transform">
                  Browse &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
