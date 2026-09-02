import Header from "../components/header/header";
import ProductCard from "../components/product/product-card";
import { arrivals } from "../lib/products";

export default function Arrivals() {
  return (
    <>
      <Header textBlack />

      <main className="pt-10 flex justify-center">
        <div className="sm:w-3/4 md:w-5/6 lg:w-3/4 xl:w-3/5 2xl:w-3/6 p-10">
          <div className="mb-2">
            <p className="text-center font-semibold">Arrivals</p>
          </div>
          <div className="grid md:grid-cols-2">
            {arrivals.map((product) => (
              <ProductCard key={product.id} product={product} onlyImage />
            ))}
          </div>
        </div>
      </main>
    </>
  )
}