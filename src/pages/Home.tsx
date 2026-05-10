import { useRef } from "react";
import Header from "../components/home/header";
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

      <section ref={productsRef} className="min-h-screen py-24 px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <Product name="Produto 1" name_url="t-shirt-01.png" price={180} />
          <Product name="Produto 2" name_url="t-shirt-02.png" price={210} />
          <Product name="Produto 1" name_url="t-shirt-01.png" price={180} />
          <Product name="Produto 2" name_url="t-shirt-02.png" price={210} />
          <Product name="Produto 1" name_url="t-shirt-01.png" price={180} />
          <Product name="Produto 2" name_url="t-shirt-02.png" price={210} />
          <Product name="Produto 1" name_url="t-shirt-01.png" price={180} />
          <Product name="Produto 2" name_url="t-shirt-02.png" price={210} />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-[30vh]">
        <h1 className="text-2xl">Soon there will be more...</h1>
      </section>

    </main>
  )
}