import { ShoppingCart, Search, User } from "lucide-react";

export const RightCorner = () => {
  return (
    <div className="w-fit">
      <div className="bg-white/20 hover:bg-white/70 transition-colors py-2 px-2.5 rounded-l-md shadow-md">
        <div className="flex gap-4 items-center text-zinc-800 hover:text-zinc-700">
          {/* <div className="border-r-[1px] border-neutral-400/70 pr-2 -m-1">
            <ChevronRight size={17} strokeWidth={1.8} />
          </div> */}

          <button className="cursor-pointer">
            <Search size={21} strokeWidth={1.8} className="hover:text-black transition-colors" />
          </button>

          <button className="cursor-pointer">
            <ShoppingCart size={21} strokeWidth={1.8} className="hover:text-black transition-colors" />
          </button>

          <button className="cursor-pointer">
            <User size={21} strokeWidth={1.8} className="hover:text-black transition-colors" />
          </button>
        </div>
      </div>
    </div>
  )
}