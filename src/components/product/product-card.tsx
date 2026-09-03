import { Link } from "react-router-dom"
import type { ProductType } from "../../lib/products"
import { currencyUS } from "../../services/format"

export default function ProductCard({ product, onlyImage = false }: {
  product: ProductType,
  onlyImage?: boolean
}) {
  return (
    <Link to={`/product/${product.id}`} data-testid={product.id + "-test"} className="w-full aspect-[4/4] flex flex-col gap-1">
      <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <img
            src={`/images/products/${product.id}/${product.images[0]}`}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {!onlyImage && (
        <div className="flex flex-col items-center px-2">
          <label data-testid={product.id + "-name-test"} className="text-sm font-semibold">{product.name}</label>
          <label data-testid={product.id + "-price-test"} className="text-sm">{currencyUS(product.price)}</label>
        </div>
      )}
    </Link>
  )
}