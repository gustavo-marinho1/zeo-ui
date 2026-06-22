import { arrivals } from "@/lib/products"
import Product from "../product/product"
import { ProductGrid } from "./product-group"

export const New = () => {
  return (
    <div className="flex flex-col justify-center px-4">
      <label className="text-md">New Arrivals</label>
      <ProductGrid>
        {arrivals.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </ProductGrid>
    </div>
  )
}