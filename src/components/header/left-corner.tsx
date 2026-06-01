import { Link } from "react-router-dom";
import { ShopOptions } from "./shop-options";
import { useState } from "react";

export const LeftCorner = () => {
  const [displayShopOptions, setDisplayShopOptions] = useState(false);

  const styleBtn = `cursor-pointer border border-neutral-500/50 hover:border-neutral-800/50 transition-colors rounded-md px-1.5 py-0.5`;

  return (
    <>
      <div className="flex items-center gap-2 px-3">
        <Link to="/arrivals">
          <button className={styleBtn}>
            <span className="text-sm font-semibold">Arrivals</span>
          </button>
        </Link>

        <button className={styleBtn} onClick={() => setDisplayShopOptions(!displayShopOptions)}>
          <span className="text-sm font-semibold">SHOP</span>
        </button>

        <Link to="/about">
          <button className={styleBtn}>
            <span className="text-sm font-semibold">About</span>
          </button>
        </Link>
      </div>

      {displayShopOptions && (
        <ShopOptions close={() => setDisplayShopOptions(false)} />
      )}
    </>
  )
}