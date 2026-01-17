import { motion } from "framer-motion";
import { Link } from "wouter";
import hoodieImg from "@assets/generated_images/oversized_hoodie_front_view_studio.png";
import topsImg from "@assets/generated_images/oversized_black_t-shirt.png";
import bottomsImg from "@assets/generated_images/streetwear_model_walking_in_baggy_jeans.png";
import footwearImg from "@assets/generated_images/futuristic_sneakers_on_feet.png";
import accessoriesImg from "@assets/generated_images/silver_chrome_accessories.png";

const categories = [
  { 
    id: 1, 
    name: "Hoodies", 
    image: hoodieImg, 
    className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
    textSize: "text-4xl md:text-6xl"
  },
  { 
    id: 2, 
    name: "Tops", 
    image: topsImg, 
    className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2",
    textSize: "text-3xl md:text-5xl"
  },
  { 
    id: 3, 
    name: "Bottoms", 
    image: bottomsImg, 
    className: "col-span-1 row-span-1 md:col-span-2 md:row-span-1",
    textSize: "text-2xl md:text-4xl"
  },
  { 
    id: 4, 
    name: "Footwear", 
    image: footwearImg, 
    className: "col-span-2 row-span-1 md:col-span-1 md:row-span-1",
    textSize: "text-2xl md:text-3xl"
  },
];

export default function CategoryGrid() {
  return (
    <section id="categories" className="py-24 bg-black text-white px-6">
      <div className="max-w-[1800px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 border-b border-white/20 pb-6 flex justify-between items-end"
        >
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Shop By <span className="text-gray-500">Category</span>
          </h2>
          <span className="font-sans text-xs tracking-widest uppercase hidden md:block">
            Select Division
          </span>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[250px] gap-3 md:gap-4">
          {categories.map((cat, index) => (
            <Link key={cat.id} href={`/category/${cat.name.toLowerCase()}`}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative group overflow-hidden cursor-pointer bg-zinc-900 ${cat.className} h-full`}
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                  />
                </div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-8 z-10">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className={`font-display font-black uppercase tracking-tighter text-white mix-blend-overlay group-hover:mix-blend-normal transition-all ${cat.textSize}`}>
                      {cat.name}
                    </h3>
                    <div className="h-0.5 w-0 group-hover:w-full bg-white mt-3 transition-all duration-500 ease-out" />
                    <p className="font-sans text-xs tracking-widest uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                      View Products →
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
