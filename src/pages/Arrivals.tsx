import Header from "../components/header/header";
import Product from "../components/product/product";
import { arrivals } from "../lib/products";

export default function Arrivals() {
  return (
    <>
      <Header />

      <main className="pt-17 flex justify-center">
        <div className="sm:w-3/4 md:w-5/6 lg:w-3/4 flex flex-col gap-4 p-10">
          {arrivals.map((product) => (
            <Product key={product.id} product={product} onlyImage />
          ))}
        </div>
      </main>
    </>
  )
}