export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 px-6 border-t border-white/10">
      <div className="max-w-[1800px] mx-auto flex flex-col gap-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <a href="#" className="font-display text-4xl font-black tracking-tighter uppercase mb-6 block">
              Type<span className="italic font-light">SHit</span>
            </a>
            <p className="max-w-md font-sans text-sm text-gray-400">
              Engineered for the outliers. We create garments that challenge the norm and redefine the silhouette. 
              Designed in the void.
            </p>
          </div>
          
          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Collections</h4>
            <ul className="space-y-4 font-display text-lg uppercase font-bold tracking-tight">
              <li><a href="#" className="hover:text-gray-400 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Denim Program</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Essential Tees</a></li>
              <li><a href="#" className="hover:text-gray-400 transition-colors">Footwear</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] text-gray-500 mb-6">Legal</h4>
            <ul className="space-y-4 font-sans text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end border-t border-white/10 pt-12">
          <h1 className="font-display text-[12vw] leading-none font-black text-white/5 select-none -mb-8 -ml-4">
            TYPESHIT
          </h1>
          <div className="font-sans text-xs uppercase tracking-widest text-gray-600 pb-2">
            © 2025 TypeSHit Studios. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
