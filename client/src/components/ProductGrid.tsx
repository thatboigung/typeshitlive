import ProductCard from "./ProductCard";
import jeansImg from "@assets/generated_images/baggy_black_denim_jeans.png";
import teeImg from "@assets/generated_images/oversized_black_t-shirt.png";
import sneakerImg from "@assets/generated_images/designer_chunky_sneakers.png";

const products = [
  {
    id: "1",
    name: "Void Denim V1",
    price: 180,
    category: "Bottoms",
    image: jeansImg,
  },
  {
    id: "2",
    name: "Heavyweight Box Tee",
    price: 65,
    category: "Tops",
    image: teeImg,
  },
  {
    id: "3",
    name: "Cyber-Runner 2099",
    price: 450,
    category: "Footwear",
    image: sneakerImg,
  },
  {
    id: "4",
    name: "Utility Cargo",
    price: 195,
    category: "Bottoms",
    image: jeansImg, // Reusing for layout
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-border pb-6">
          <h2 className="font-display text-4xl md:text-6xl font-black uppercase tracking-tighter">
            Latest <span className="text-muted-foreground">Archive</span>
          </h2>
          <span className="font-sans text-sm uppercase tracking-widest hidden md:block">Fall / Winter 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} {...product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
