import { SearchIcon, User, Handbag } from "lucide-react";
import { useState } from "react";
import { Search } from "./search";

export const RightCorner = ({ textBlack, hideSearch }: { textBlack?: boolean, hideSearch?: boolean }) => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);

  return (
    <div className="h-full flex justify-end items-center">
      <div className="flex gap-3 items-center">
        
        {!hideSearch && (
          <Search open={searchOpen} setOpen={setSearchOpen}>
            <button className="cursor-pointer" onClick={() => setSearchOpen(!searchOpen)}>
              <SearchIcon size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
            </button>
          </Search>
        )}

        <button className="flex cursor-pointer">
          <Handbag size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>

        <button className="flex cursor-pointer">
          <User size={22} strokeWidth={1.3} color={textBlack ? "black" : "white"} className="hover:text-zinc-300 transition-colors" />
        </button>

      </div>
    </div>
  )
}