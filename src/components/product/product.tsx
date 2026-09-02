import { Link } from "react-router-dom"
import type { ProductType } from "../../lib/products"
import { currencyUS } from "../../services/format"

export default function Product({ product, onlyImage = false }: { product: ProductType, onlyImage?: boolean }) {
  return (
    <Link to={`/product/${product.id}`} className="w-full aspect-[4/4] flex flex-col gap-1">
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
          <label className="text-sm font-semibold">{product.name}</label>
          <label className="text-sm">{currencyUS(product.price)}</label>
        </div>
      )}
    </Link>
  )
}

export const ProductGroup = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-xl font-semibold tracking-tighter">{title}</h2>
      {children}
    </div>
  )
}

export const ProductGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {children}
    </div>
  )
}