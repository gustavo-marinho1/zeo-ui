import { Link } from "react-router-dom";
import { ShopOptions } from "./shop-options";
import { useState } from "react";
import { SideBar } from "../sidebar/sidebar";

export const LeftCorner = () => {
  const [displayShopOptions, setDisplayShopOptions] = useState(false);

  const styleBtn = `
    cursor-pointer px-1.5 py-0.5
    border border-black/30 hover:border-black/60
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

        <button className={styleBtn} onClick={() => setDisplayShopOptions(!displayShopOptions)}>
          <span className="text-sm">SHOP</span>
        </button>

        <Link to="/about">
          <button className={styleBtn}>
            <span className="text-sm">About</span>
          </button>
        </Link>
      </div>

      {displayShopOptions && (
        <ShopOptions close={() => setDisplayShopOptions(false)} />
      )}
    </div>
  )
}