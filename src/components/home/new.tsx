import { arrivals } from "@/lib/products"
import Product from "../product/product"

export const New = () => {
  return (
    <div className="flex flex-col justify-center gap-4">

      <label className="text-xl font-semibold">New Arrivals</label>

      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-16 2xl:gap-20">
        {arrivals.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>

    </div>
  )
}