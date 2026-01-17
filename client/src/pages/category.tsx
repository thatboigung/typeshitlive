import { useRoute, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";

// Import images
import jeansImg from "@assets/generated_images/baggy_black_denim_jeans.png";
import teeImg from "@assets/generated_images/oversized_black_t-shirt.png";
import sneakerImg from "@assets/generated_images/designer_chunky_sneakers.png";
import hoodieImg from "@assets/generated_images/oversized_hoodie_front_view_studio.png";

// Mock Data Database
const allProducts = [
  {
    id: "1",
    name: "Void Denim V1",
    price: 180,
    category: "bottoms",
    image: jeansImg,
  },
  {
    id: "2",
    name: "Heavyweight Box Tee",
    price: 65,
    category: "tops",
    image: teeImg,
  },
  {
    id: "3",
    name: "Cyber-Runner 2099",
    price: 450,
    category: "footwear",
    image: sneakerImg,
  },
  {
    id: "4",
    name: "Utility Cargo",
    price: 195,
    category: "bottoms",
    image: jeansImg, 
  },
  {
    id: "5",
    name: "Oversized Hoodie No.1",
    price: 120,
    category: "hoodies",
    image: hoodieImg,
  },
  {
    id: "6",
    name: "Distressed Zip-Up",
    price: 140,
    category: "hoodies",
    image: hoodieImg,
  },
  {
    id: "7",
    name: "Graphic Tee 'CHAOS'",
    price: 55,
    category: "tops",
    image: teeImg,
  },
  {
    id: "8",
    name: "Chunky Loafer",
    price: 320,
    category: "footwear",
    image: sneakerImg,
  },
];

export default function CategoryPage() {
  const [match, params] = useRoute("/category/:category");
  const category = params?.category;
  
  // Filter products
  const products = category 
    ? allProducts.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <div className="mb-12">
            <Link href="/">
              <a className="inline-flex items-center gap-2 text-sm font-mono text-gray-500 hover:text-white transition-colors mb-6 uppercase tracking-widest group">
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </a>
            </Link>
            
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-8">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="font-display text-6xl md:text-9xl font-black uppercase tracking-tighter"
              >
                {category}
              </motion.h1>
              
              <div className="flex items-center gap-4 mt-4 md:mt-0">
                 <button className="flex items-center gap-2 px-4 py-2 border border-white/20 hover:bg-white hover:text-black transition-colors font-mono text-xs uppercase">
                    <Filter className="w-4 h-4" />
                    Filter
                 </button>
                 <span className="font-mono text-xs text-gray-500">
                    {products.length} Products
                 </span>
              </div>
            </div>
          </div>

          {/* Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
              {products.map((product, index) => (
                <ProductCard 
                  key={product.id} 
                  {...product} 
                  category={category || "Unknown"} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-32 border border-dashed border-white/10">
              <h3 className="font-display text-2xl uppercase mb-2">No Products Found</h3>
              <p className="text-gray-500 font-mono text-sm">This collection is currently empty.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
