import { Search, User, Handbag } from "lucide-react";

export const RightCorner = () => {
  return (
    <div className="h-full flex justify-end items-center">
      <div className="flex gap-3 items-center text-black">
        <button className="cursor-pointer">
          <Search size={22} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
        </button>

        <button className="hidden md:flex cursor-pointer">
          <Handbag size={22} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
        </button>

        <button className="hidden md:flex cursor-pointer">
          <User size={22} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
        </button>
      </div>
    </div>
  )
}