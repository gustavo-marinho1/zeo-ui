import { SearchIcon } from "lucide-react";
import { Search } from "./search";

export const RightCorner = ({ textBlack, hideSearch }: { textBlack?: boolean, hideSearch?: boolean }) => {
  return (
    <div className="h-full flex justify-end items-center">
      <div className="flex gap-3 items-center">

        {!hideSearch && (
          <Search>
            <SearchIcon size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors cursor-pointer" />
          </Search>
        )}

        {/*<button className="flex cursor-pointer">
          <Handbag size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>

        <button className="flex cursor-pointer">
          <User size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>*/}

      </div>
    </div>
  )
}