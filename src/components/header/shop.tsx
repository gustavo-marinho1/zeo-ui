import type { JSX } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import { useWindowWidth } from "@/hooks/useWindowWidth";

interface Props {
  children: JSX.Element
}

export const Shop = ({ children }: Props) => {
  const { isMobile } = useWindowWidth();
  const [open, setOpen] = useState(false);

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>

      {!isMobile && (
        <DropdownMenuTrigger data-testid="shop-trigger">
          {children}
        </DropdownMenuTrigger>
      )}

      {(!isMobile && open) && (
        <DropdownMenuContent data-testid="shop-content" className="w-fit backdrop-blur-xs bg-olive-900/55 hover:bg-olive-900/70 transition-colors rounded-md p-3 shadow-2xl ring-0">
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
              <button data-testid="shop-close-trigger" className="cursor-pointer" onClick={() => setOpen(false)}>
                <X size={18} />
              </button>
            </div>

          </div>
        </DropdownMenuContent>
      )}

    </DropdownMenu>
  )
}