import { Product } from "./types";

export const products: Product[] = [
  {
    id: "burton-custom",
    name: "Custom Camber",
    brand: "Burton",
    price: 599,
    description:
      "The Burton Custom has been the most popular board in snowboarding for years. Its versatile flex and camber profile make it the go-to for riders who want one board that does everything. From groomers to park to powder, the Custom delivers consistent performance in all conditions.",
    category: "All-Mountain",
    specs: { length: "156 cm", width: "25.1 cm", flex: "6/10" },
    gradient: "from-blue-600 via-blue-400 to-cyan-300",
    image: "https://images.evo.com/imgp/700/250185/1061498/burton-custom-camber-snowboard-2026-.pi.jpg",
    sizes: ["150", "154", "156", "158", "162"],
  },
  {
    id: "burton-process",
    name: "Process Flying V",
    brand: "Burton",
    price: 499,
    description:
      "The Burton Process is a true twin freestyle board built for park laps and creative riding. The Flying V profile blends rocker and camber zones for a playful, catch-free feel that still holds an edge when you need it.",
    category: "Freestyle",
    specs: { length: "152 cm", width: "24.8 cm", flex: "4/10" },
    gradient: "from-purple-600 via-pink-500 to-red-400",
    image: "https://images.evo.com/imgp/700/250185/1061504/burton-process-flying-v-snowboard-2026-.pi.jpg",
    sizes: ["148", "150", "152", "155", "157"],
  },
  {
    id: "ride-warpig",
    name: "Warpig",
    brand: "Ride",
    price: 449,
    description:
      "The Ride Warpig is a short, wide volume-shifted board that floats effortlessly in powder and rips on groomers. Its unique shape lets you ride a shorter board without sacrificing surface area, giving you more agility and fun on the mountain.",
    category: "All-Mountain",
    specs: { length: "148 cm", width: "26.4 cm", flex: "5/10" },
    gradient: "from-green-600 via-emerald-400 to-teal-300",
    image: "https://images.evo.com/imgp/700/233498/984484/ride-warpig-snowboard-2025-.pi.jpg",
    sizes: ["142", "148", "151", "154", "158"],
  },
  {
    id: "ride-algorhythm",
    name: "Algorhythm",
    brand: "Ride",
    price: 529,
    description:
      "The Ride Algorhythm is an aggressive all-mountain board designed for riders who charge hard. Its directional shape and camber profile deliver precise edge hold and powerful turns at speed.",
    category: "All-Mountain",
    specs: { length: "157 cm", width: "25.3 cm", flex: "7/10" },
    gradient: "from-slate-700 via-slate-500 to-zinc-400",
    image: "https://images.evo.com/imgp/700/233498/984488/ride-algorhythm-snowboard-2025-.pi.jpg",
    sizes: ["152", "155", "157", "160", "163"],
  },
  {
    id: "jones-mountain-twin",
    name: "Mountain Twin",
    brand: "Jones",
    price: 549,
    description:
      "The Jones Mountain Twin is a directional twin built for all-mountain freestyle riding. It charges hard on steep terrain and performs equally well in the park. Sustainable construction with eco-friendly materials throughout.",
    category: "Freestyle",
    specs: { length: "155 cm", width: "25.0 cm", flex: "6/10" },
    gradient: "from-amber-600 via-orange-500 to-yellow-400",
    image: "https://images.evo.com/imgp/700/233498/988776/jones-mountain-twin-snowboard-2025-.pi.jpg",
    sizes: ["150", "153", "155", "157", "160"],
  },
  {
    id: "jones-stratos",
    name: "Stratos",
    brand: "Jones",
    price: 649,
    description:
      "The Jones Stratos is a directional freeride board that excels in deep powder and variable conditions. Its tapered shape and camber profile provide exceptional float and powerful edge-to-edge transitions.",
    category: "Freeride",
    specs: { length: "159 cm", width: "25.6 cm", flex: "7/10" },
    gradient: "from-sky-600 via-blue-500 to-indigo-600",
    image: "https://images.evo.com/imgp/700/233498/988780/jones-stratos-snowboard-2025-.pi.jpg",
    sizes: ["153", "156", "159", "162", "165"],
  },
  {
    id: "capita-doa",
    name: "Defenders of Awesome",
    brand: "Capita",
    price: 499,
    description:
      "The Capita DOA is the most award-winning board in snowboarding history. This all-mountain freestyle weapon features a true twin shape with a medium flex that destroys everything from park features to powder stashes.",
    category: "All-Mountain",
    specs: { length: "155 cm", width: "25.2 cm", flex: "5/10" },
    gradient: "from-red-600 via-orange-500 to-yellow-500",
    image: "https://images.evo.com/imgp/700/233498/985952/capita-defenders-of-awesome-snowboard-2025-.pi.jpg",
    sizes: ["148", "150", "153", "155", "157", "159"],
  },
  {
    id: "capita-mega-merc",
    name: "Mega Mercury",
    brand: "Capita",
    price: 899,
    description:
      "The Capita Mega Mercury is a high-performance all-mountain charger with advanced construction and premium materials. Carbon fiber stringers and a sintered base deliver unmatched speed and response for expert riders.",
    category: "All-Mountain",
    specs: { length: "160 cm", width: "25.5 cm", flex: "8/10" },
    gradient: "from-violet-700 via-purple-600 to-fuchsia-500",
    image: "https://images.evo.com/imgp/700/233498/985960/capita-mega-mercury-snowboard-2025-.pi.jpg",
    sizes: ["155", "157", "160", "162", "165"],
  },
  {
    id: "gnu-headspace",
    name: "Head Space",
    brand: "GNU",
    price: 399,
    description:
      "The GNU Head Space is an entry-level all-mountain board that makes learning easy without holding you back as you progress. Forgiving flex and a hybrid profile offer stability and control at all speeds.",
    category: "All-Mountain",
    specs: { length: "153 cm", width: "24.9 cm", flex: "3/10" },
    gradient: "from-lime-500 via-green-500 to-emerald-600",
    image: "https://images.evo.com/imgp/700/233498/985946/gnu-head-space-snowboard-2025-.pi.jpg",
    sizes: ["147", "150", "153", "156", "159"],
  },
  {
    id: "gnu-riders-choice",
    name: "Riders Choice",
    brand: "GNU",
    price: 579,
    description:
      "The GNU Riders Choice is an asymmetric twin built with Magne-Traction for unreal edge hold on ice and hardpack. Its C2X profile blends camber and rocker for versatile all-mountain freestyle performance.",
    category: "Freestyle",
    specs: { length: "154 cm", width: "25.1 cm", flex: "5/10" },
    gradient: "from-teal-500 via-cyan-400 to-blue-500",
    image: "https://images.evo.com/imgp/700/233498/985948/gnu-riders-choice-snowboard-2025-.pi.jpg",
    sizes: ["148", "151", "154", "157", "160"],
  },
];

export const brands = ["Burton", "Ride", "Jones", "Capita", "GNU"];
export const categories = ["All-Mountain", "Freestyle", "Freeride"];

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function filterProducts(filters: {
  brand?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
}): Product[] {
  return products.filter((p) => {
    if (filters.brand && p.brand !== filters.brand) return false;
    if (filters.category && p.category !== filters.category) return false;
    if (filters.minPrice && p.price < filters.minPrice) return false;
    if (filters.maxPrice && p.price > filters.maxPrice) return false;
    if (filters.search) {
      const q = filters.search.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    return true;
  });
}
