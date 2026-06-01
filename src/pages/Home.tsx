import { useRef } from "react";
import Header from "../components/header/header";
import Hero from "../components/home/hero";
import ScrolldownButton from "../components/home/scrolldown-btn";
import Product from "../components/home/product";
import { arrivals } from "../lib/products";
import { ProductGroup } from "../components/home/product-group";
import Footer from "../components/footer/footer";

export default function Home() {
  const productsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="scroll-smooth">

      <section className="relative w-full min-h-screen">
        <Header />
        <Hero />
        <ScrolldownButton scrollToProducts={scrollToProducts} />
      </section>

      <section ref={productsRef} className="min-h-screen pt-21 pb-20 bg-gradient-to-r from-neutral-50 via-white to-neutral-200/50">
        <div className="flex flex-col gap-20">
          <ProductGroup title="Arrivals">
            <div className="sm:w-3/4 md:w-5/6 lg:w-3/4 flex flex-col md:flex-row gap-4">
              {arrivals.map((product) => (
                <Product key={product.id} name={product.name} name_url={product.name_url} price={product.price} />
              ))}
            </div>
          </ProductGroup>

          <div className="w-full mx-auto flex aspect-[7/3] overflow-hidden">
            <div className="w-1/2 h-full overflow-hidden flex items-center">
              <img src="/images/products/aa01.jpg" alt="" className="size-full object-cover" />
            </div>
            <div className="w-1/2 h-full overflow-hidden flex items-center">
              <img src="/images/products/aa01.jpg" alt="" className="size-full object-cover" />
            </div>
          </div>

          <center>
            <div className="sm:w-7/8 md:w-7/8 xl:w-6/7 grid grid-cols-2 lg:grid-cols-4 gap-2">
              <div><img src="/images/products/aa01.jpg" alt="" /></div>
              <div><img src="/images/products/aa01.jpg" alt="" /></div>
              <div><img src="/images/products/aa01.jpg" alt="" /></div>
              <div><img src="/images/products/aa01.jpg" alt="" /></div>
            </div>
          </center>
        </div>
      </section>

      <Footer />

    </main>
  )
}