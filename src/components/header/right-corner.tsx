import { Search, User, Handbag } from "lucide-react";

export const RightCorner = ({ textBlack }: { textBlack?: boolean }) => {
  return (
    <div className="h-full flex justify-end items-center">
      <div className="flex gap-3 items-center">
        <button className="cursor-pointer">
          <Search size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>

        <button className="hidden md:flex cursor-pointer">
          <Handbag size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>

        <button className="hidden md:flex cursor-pointer">
          <User size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>
      </div>
    </div>
  )
}