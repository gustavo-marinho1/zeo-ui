import { Link } from "react-router-dom";
import { useState } from "react";
import { SideBar } from "../sidebar/sidebar";
import { Shop } from "./shop";

export const LeftCorner = ({ textBlack }: { textBlack?: boolean }) => {
  const [shopOpen, setShopOpen] = useState(false);

  const styleBtn = `
    cursor-pointer px-1.5 py-0.5
    ${textBlack ? "border border-black/30 hover:border-black/60" : "text-white"}
    transition-colors
  `;

  return (
    <div className="flex items-center">
      <SideBar />

      <div className="hidden md:flex items-center gap-1">
        <Link to="/arrivals">
          <button className={styleBtn}>
            <span className="text-sm">Arrivals</span>
          </button>
        </Link>

        <Shop open={shopOpen} setOpen={setShopOpen}>
          <button className={styleBtn} onClick={() => setShopOpen(!shopOpen)}>
            <span className="text-sm">SHOP</span>
          </button>
        </Shop>

        <Link to="/about">
          <button className={styleBtn}>
            <span className="text-sm">About</span>
          </button>
        </Link>
      </div>
    </div>
  )
}