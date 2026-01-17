import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Menu as MenuIcon, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, setLocation] = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "New Arrivals", href: "/" },
    { label: "Shop All", href: "/" },
    { label: "Tops", href: "/category/tops" },
    { label: "Hoodies", href: "/category/hoodies" },
    { label: "Bottoms", href: "/category/bottoms" },
    { label: "Footwear", href: "/category/footwear" },
    { label: "Accessories", href: "/category/accessories" },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 transition-colors duration-300 ${
          scrolled || isOpen ? "bg-black/50 backdrop-blur-md text-white" : "mix-blend-difference text-white"
        }`}
      >
        <div 
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon className="w-6 h-6 group-hover:opacity-70 transition-opacity" />
          <span className="hidden md:block font-sans text-xs tracking-widest uppercase group-hover:opacity-70 transition-opacity">Menu</span>
        </div>

        <Link href="/">
          <a className="font-display text-2xl md:text-4xl font-black tracking-tighter uppercase select-none cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            Type<span className="italic font-light">SHit</span>
          </a>
        </Link>

        <div className="flex items-center gap-4">
          <span className="hidden md:block font-sans text-xs tracking-widest uppercase">Cart (0)</span>
          <ShoppingBag className="w-6 h-6 cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
      </motion.nav>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-black text-white flex flex-col"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center px-6 py-6">
              <div 
                className="flex items-center gap-4 cursor-pointer group"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                <span className="hidden md:block font-sans text-xs tracking-widest uppercase">Close</span>
              </div>
              
              <div className="font-display text-2xl font-black tracking-tighter uppercase opacity-50">
                Menu
              </div>
            </div>

            {/* Menu Content */}
            <div className="flex-1 flex flex-col md:flex-row p-6 md:p-20 gap-12 md:gap-24 overflow-y-auto">
              {/* Navigation Links */}
              <div className="flex flex-col justify-center gap-2 md:gap-4 flex-1">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -50, opacity: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group"
                  >
                    <a 
                      onClick={() => {
                        setLocation(item.href);
                        setIsOpen(false);
                      }}
                      className="flex items-center gap-4 font-display text-5xl md:text-8xl font-black uppercase tracking-tighter hover:text-gray-400 transition-colors cursor-pointer"
                    >
                      {item.label}
                      <ArrowRight className="w-8 h-8 md:w-16 md:h-16 opacity-0 -translate-x-10 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
                    </a>
                  </motion.div>
                ))}
              </div>

              {/* Sidebar Info */}
              <div className="md:w-1/3 flex flex-col justify-center gap-12 border-t md:border-t-0 md:border-l border-white/10 pt-12 md:pl-12">
                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Account</h3>
                  <div className="flex flex-col gap-4 font-display text-xl uppercase font-bold">
                    <a href="#" className="hover:text-gray-400">Login</a>
                    <a href="#" className="hover:text-gray-400">Register</a>
                  </div>
                </div>

                <div>
                  <h3 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Contact</h3>
                  <p className="font-sans text-sm text-gray-400 leading-relaxed">
                    support@typeshit.com<br />
                    Los Angeles, CA<br />
                    Global Underground
                  </p>
                </div>

                <div className="mt-auto">
                   <div className="w-full h-32 bg-white/5 animate-pulse rounded-sm"></div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
