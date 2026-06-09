import { X } from "lucide-react";
import { Link } from "react-router-dom"

export const ShopOptions = ({ close }: { close: () => void }) => {
  return (
    <div
      id="shop-options"
      className="absolute top-18 left-3 bg-white/80 hover:bg-white/97 transition-colors backdrop-blur rounded-md p-3 shadow-xl"
    >
      <div className="flex gap-6">

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xs uppercase">READY-TO-WEAR</span>
          <div className="flex flex-col gap-0.5 text-sm">
            <Link to="/shop/tops" className="hover:underline">Tops</Link>
            <Link to="/shop/bottoms" className="hover:underline">Bottoms</Link>
            <Link to="/shop/footwear" className="hover:underline">Footwear</Link>
            <Link to="/shop/accessories" className="hover:underline">Accessories</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xs uppercase">Collections</span>
          <div className="flex flex-col gap-0.5 text-sm">
            <Link to="/seasonal" className="hover:underline">Seasonal</Link>
          </div>
        </div>

        <div className="flex items-start">
          <button className="cursor-pointer" onClick={() => close()}>
            <X size={18} />
          </button>
        </div>

      </div>
    </div>
  )
}