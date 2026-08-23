import type { JSX } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

interface Props {
  children: JSX.Element,
  open: boolean,
  setOpen: (v: boolean) => void
}

export const Shop = ({ children, open, setOpen }: Props) => {
  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>

      <DropdownMenuTrigger>
        {children}
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-fit backdrop-blur-xs bg-olive-900/55 hover:bg-olive-900/70 transition-colors rounded-md p-3 shadow-2xl ring-0">
        <div className="flex gap-6 text-white">

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
      </DropdownMenuContent>

    </DropdownMenu>
  )
}