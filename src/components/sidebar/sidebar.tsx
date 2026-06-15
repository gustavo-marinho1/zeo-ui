import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Handbag, Menu, User } from "lucide-react"
import { Link } from "react-router-dom";

export const SideBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden" asChild>
        <Menu size={22} strokeWidth={1.3} />
      </SheetTrigger>

      <SheetContent side="left" className="bg-white border-none md:hidden gap-0">
        <SheetHeader>
          <SheetTitle>
            <Link to="/" className="text-md font-bold">
              ZEO
            </Link>
          </SheetTitle>
        </SheetHeader>

        <div className="border-b border-neutral-300 w-full" />

        <div className="p-1 flex gap-1">
          <Link to="/" className="w-full py-2 bg-neutral-100">
            <div className="flex items-center justify-center gap-1">
              <Handbag size={18} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
              <span className="text-sm">Bag</span>
            </div>
          </Link>
          <Link to="/" className="w-full py-2 bg-neutral-100">
            <div className="flex items-center justify-center gap-1">
              <User size={18} strokeWidth={1.3} className="hover:text-zinc-700 transition-colors" />
              <span className="text-sm">My account</span>
            </div>
          </Link>
        </div>

        <div className="border-b border-neutral-300 w-full" />

        <div className="p-2 flex">
          <Link to="/arrivals">
            <span className="text-sm font-semibold">ARRIVALS</span>
          </Link>
        </div>

        <div className="border-b border-neutral-300 w-full" />

        <div className="flex flex-col items-start gap-3 p-2">

          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">READY-TO-WEAR</span>
            <div className="ml-4 flex flex-col gap-1">
              <Link to="/shop/tops">
                <span className="text-sm">Tops</span>
              </Link>
              <Link to="/shop/bottoms">
                <span className="text-sm">Bottoms</span>
              </Link>
              <Link to="/shop/footwear">
                <span className="text-sm">Footwear</span>
              </Link>
              <Link to="/shop/accessories">
                <span className="text-sm">Accessories</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-sm font-semibold">COLLECTIONS</span>
            <div className="ml-4 flex flex-col gap-1">
              <Link to="/seasonal">
                <span className="text-sm">Seasonal</span>
              </Link>
            </div>
          </div>
        </div>

        <SheetFooter>
          <Link to="/about">
            <span className="text-sm">About</span>
          </Link>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}