import { useRef } from "react";
import Header from "../components/header/header";
import Hero from "../components/home/hero";
import ScrolldownButton from "../components/home/scrolldown-btn";
import Product from "../components/home/product";

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

      <section ref={productsRef} className="min-h-screen px-6 pt-21 pb-20 md:px-6 bg-gradient-to-r from-neutral-100 via-white to-neutral-300/70">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold">PACKS</h2>
          <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            <Product name="PACK AA01" name_url="aa01.jpg" price={180} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={210} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={180} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={210} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={180} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={210} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={180} />
            <Product name="PACK AA01" name_url="aa01.jpg" price={210} />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[30vh]">
        <h1 className="text-2xl">Soon there will be more...</h1>
      </section>

    </main>
  )
}