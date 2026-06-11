import { ShoppingCart, Search, User } from "lucide-react";

export const RightCorner = () => {
  return (
    <div className="w-fit">
      <div className="flex gap-3 items-center text-black">
        <button className="cursor-pointer">
          <Search size={22} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
        </button>

        <button className="cursor-pointer">
          <ShoppingCart size={22} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
        </button>

        <button className="cursor-pointer">
          <User size={22} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
        </button>
      </div>
    </div>
  )
}