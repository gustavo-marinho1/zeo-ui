import { Link } from "react-router-dom"
import type { ProductType } from "../../lib/products"
import { currencyBRL } from "../../services/format"

interface Props {
  product: ProductType,
  onlyImage?: boolean
}

const Product = ({ product, onlyImage = false }: Props) => {
  return (
    <Link to={`/product/${product.id}`} className="w-full aspect-[4/4] flex flex-col gap-1">
      <div className="bg-neutral-100 w-full aspect-[4/4] relative overflow-hidden">
        <div className="absolute top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <img
            src={`/images/products/${product.name_url}/${product.images[0]}`}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {!onlyImage && (
        <div className="flex flex-col items-center px-2">
          <label className="text-sm font-semibold">{product.name}</label>
          <label className="text-sm">{currencyBRL(product.price)}</label>
        </div>
      )}
    </Link>
  )
}

export default Product