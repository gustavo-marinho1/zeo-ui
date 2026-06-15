import { Link } from "react-router-dom"

export const Categories = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full p-2 h-full grid grid-cols-2 md:grid-cols-4 gap-2">
        <Link to="/shop/tops">
          <div className="w-full relative aspect-square flex justify-center items-center overflow-hidden">
            <img src="/images/categories/tops.png" alt="TOPS" />
            <div className="absolute w-full bottom-0 z-10 bg-black/20 flex justify-center items-center py-2">
              <span className="text-white text-sm font-light">TOPS</span>
            </div>
          </div>
        </Link>
        <Link to="/shop/bottoms">
          <div className="w-full relative aspect-square flex justify-center items-center overflow-hidden">
            <img src="/images/categories/bottoms.png" alt="BOTTOMS" />
            <div className="absolute w-full bottom-0 z-10 bg-black/20 flex justify-center items-center py-2">
              <span className="text-white text-sm font-light">BOTTOMS</span>
            </div>
          </div>
        </Link>
        <Link to="/shop/footwear">
          <div className="w-full relative aspect-square flex justify-center items-center overflow-hidden">
            <img src="/images/categories/footwear.png" alt="FOOTWEAR" />
            <div className="absolute w-full bottom-0 z-10 bg-black/20 flex justify-center items-center py-2">
              <span className="text-white text-sm font-light">FOOTWEAR</span>
            </div>
          </div>
        </Link>
        <Link to="/shop/accessories">
          <div className="w-full relative aspect-square flex justify-center items-center overflow-hidden">
            <img src="/images/categories/accessories.png" alt="ACCESSORIES" />
            <div className="absolute w-full bottom-0 z-10 bg-black/20 flex justify-center items-center py-2">
              <span className="text-white text-sm font-light">ACCESSORIES</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}