import { arrivals } from "../../lib/products"
import Product from "../product/product"

export const Arrivals = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <label className="text-2xl font-semibold">Arrivals</label>
      <div className="w-3/4 md:w-5/6 lg:w-3/4">
        <div className="flex flex-col md:flex-row gap-4">
          {arrivals.map((product) => (
            <Product key={product.id} product={product} onlyImage />
          ))}
        </div>
      </div>
    </div>
  )
}