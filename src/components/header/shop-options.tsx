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
            <Link to="/shop/t-shirts" className="hover:underline">T-shirts</Link>
            <Link to="/shop/jackets" className="hover:underline">Jackets</Link>
            <Link to="/shop/hoodies" className="hover:underline">Hoodies</Link>
            <Link to="/shop/pants" className="hover:underline">Pants</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xs uppercase">Shoes</span>
          <div className="flex flex-col gap-0.5 text-sm">
            <Link to="/shop/sneakers" className="hover:underline">Sneakers</Link>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold text-xs uppercase">Accessories</span>
          <div className="flex flex-col gap-0.5 text-sm">
            {/* <Link to="/shop/glasses" className="hover:underline">Glasses</Link> */}
            <Link to="/shop/hats" className="hover:underline">Hats</Link>
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