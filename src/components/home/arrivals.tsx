import { arrivals } from "../../lib/products"
import Product from "../product/product"

export const Arrivals = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6 lg:gap-10">
      <label className="text-lg">Arrivals</label>
      <div className="w-3/4 md:w-3/5 lg:w-4/5">
        <div className="flex grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {arrivals.map((product) => (
            <Product key={product.id} product={product} onlyImage />
          ))}
        </div>
      </div>
    </div>
  )
}