import { arrivals } from "@/lib/products"
import Product from "../product/product"

export const Arrivals = () => {
  return (
    <div className="w-full flex flex-col gap-1">

      <div className="px-2 flex justify-center">
        <label className="text-md font-light tracking-wide">Arrivals</label>
      </div>

      <div className="px-8 sm:px-8 md:px-12 xl:px-16 2xl:px-24">
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 2xl:gap-12">
          {arrivals.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>

    </div>
  )
}