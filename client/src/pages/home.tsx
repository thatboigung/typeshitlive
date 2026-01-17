import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-white selection:text-black">
      <Navbar />
      <main>
        <Hero />
        
        <CategoryGrid />
        
        <ProductGrid />
        
        {/* Marquee Section */}
        <div className="py-12 bg-white text-black overflow-hidden border-y border-black">
          <div className="flex whitespace-nowrap animate-marquee">
            <span className="font-display text-8xl font-black uppercase tracking-tighter px-8">New Season Available Now —</span>
            <span className="font-display text-8xl font-black uppercase tracking-tighter px-8">New Season Available Now —</span>
            <span className="font-display text-8xl font-black uppercase tracking-tighter px-8">New Season Available Now —</span>
            <span className="font-display text-8xl font-black uppercase tracking-tighter px-8">New Season Available Now —</span>
            <span className="font-display text-8xl font-black uppercase tracking-tighter px-8">New Season Available Now —</span>
            <span className="font-display text-8xl font-black uppercase tracking-tighter px-8">New Season Available Now —</span>
          </div>
        </div>

        <section className="py-32 px-6 flex items-center justify-center bg-zinc-900 text-center">
            <div className="max-w-2xl">
                <h2 className="font-display text-5xl md:text-7xl font-black uppercase mb-8">Join the Cult</h2>
                <p className="font-sans text-gray-400 mb-10">Get early access to drops, exclusive pieces, and secret sales.</p>
                <div className="flex flex-col md:flex-row gap-0">
                    <input 
                        type="email" 
                        placeholder="ENTER EMAIL" 
                        className="bg-transparent border border-white/20 px-6 py-4 flex-1 text-white font-mono placeholder:text-gray-600 focus:outline-none focus:border-white transition-colors"
                    />
                    <button className="bg-white text-black px-8 py-4 font-bold font-display uppercase hover:bg-gray-200 transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
