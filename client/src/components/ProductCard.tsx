import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  index: number;
}

export default function ProductCard({ name, price, image, category, index }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group cursor-pointer flex flex-col gap-4"
    >
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <motion.img 
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
        
        <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1 text-xs font-mono uppercase">
          New Arrival
        </div>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-display text-xl uppercase font-bold tracking-tight">{name}</h3>
          <p className="font-sans text-xs text-muted-foreground uppercase tracking-widest mt-1">{category}</p>
        </div>
        <span className="font-sans font-medium text-lg">${price}</span>
      </div>
    </motion.div>
  );
}
