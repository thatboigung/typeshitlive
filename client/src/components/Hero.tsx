import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/edgy_streetwear_hero_image.png";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Right-scrolling marquee banner */}
      <div className="absolute top-24 left-0 w-full z-20 px-6">
        <div className="marquee bg-black/40 backdrop-blur-sm py-2 rounded-md border border-white/10">
          <div className="marquee__inner text-sm md:text-base uppercase tracking-wider text-white/90">
            The new season available now — The new season available now — The new season available now —
          </div>
        </div>
      </div>
      {/* Background Image with Parallax-like scale */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={heroBg} 
          alt="Streetwear Hero" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end h-full px-6 pb-20 md:pb-32 max-w-[1800px] mx-auto">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase mb-4 text-gray-400">
            Est. 2025 — Global Underground
          </h2>
          <h1 className="font-display text-6xl md:text-[8rem] leading-[0.85] font-black uppercase tracking-tighter mix-blend-overlay">
            Redefine <br />
            <span className="text-white mix-blend-normal">Silhouette</span>
          </h1>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between border-t border-white/20 pt-8"
        >
          <p className="max-w-md font-sans text-sm md:text-base text-gray-300 leading-relaxed">
            Rejecting the standard fit. Embracing the void. 
            A collection of brutalist essentials for the modern anomalies.
            Oversized. Heavyweight. Eternal.
          </p>
          
          <button className="group relative px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-wider text-sm overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">Shop The Drop</span>
            <div className="absolute inset-0 bg-black transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
