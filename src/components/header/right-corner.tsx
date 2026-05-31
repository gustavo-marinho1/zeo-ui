import { ShoppingCart, Search, User } from "lucide-react";

export const RightCorner = () => {
  return (
    <div className="w-fit">
      <div className="bg-white/25 hover:bg-white/60 transition-colors py-2.75 px-3 pl-3.5 rounded-l-xl shadow-md">
        <div className="flex gap-4 items-center">
          {/* <div className="border-r-[1px] border-neutral-400/70 pr-2 -m-1">
            <ChevronRight size={17} strokeWidth={1.8} />
          </div> */}

          <button className="cursor-pointer">
            <Search size={20} strokeWidth={1.8} className="hover:text-zinc-700 transition-colors" />
          </button>

          <button className="cursor-pointer">
            <ShoppingCart size={20} strokeWidth={1.8} className="hover:text-zinc-700 transition-colors" />
          </button>

          <button className="cursor-pointer">
            <User size={20} strokeWidth={1.8} className="hover:text-zinc-700 transition-colors" />
          </button>
        </div>
      </div>
    </div>
  )
}