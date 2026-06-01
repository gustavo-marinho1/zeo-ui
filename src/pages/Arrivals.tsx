import Header from "../components/header/header";
import Product from "../components/home/product";
import { arrivals } from "../lib/products";

export default function Arrivals() {
  return (
    <main className="scroll-smooth">

      <section className="relative w-full">
        <Header />
      </section>

      <section className="pt-17 flex justify-center">
        <div className="sm:w-3/4 md:w-5/6 lg:w-3/4 flex flex-col gap-4 p-10">
          {arrivals.map((product) => (
            <Product key={product.id} name={product.name} name_url={product.name_url} price={product.price} />
          ))}
        </div>
      </section>

    </main>
  )
}