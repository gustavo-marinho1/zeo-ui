import Header from "../components/header/header";
import Product from "../components/product/product";
import { arrivals } from "../lib/products";

export default function Arrivals() {
  return (
    <>
      <Header />

      <main className="pt-17 flex justify-center">
        <div className="sm:w-3/4 md:w-5/6 lg:w-3/4 xl:w-3/5 2xl:w-3/6 p-10">
          <div className="grid md:grid-cols-2">
            {arrivals.map((product) => (
              <Product key={product.id} product={product} onlyImage />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}