import { Link } from "react-router-dom";
import { SideBar } from "../sidebar/sidebar";
import { Shop } from "./shop";
import { useWindowWidth } from "@/hooks/useWindowWidth";

export const LeftCorner = ({ textBlack }: { textBlack?: boolean }) => {
  const { isMobile } = useWindowWidth();

  const styleBtn = `
    cursor-pointer px-1.5 py-0.5
    ${textBlack ? "border border-black/30 hover:border-black/60" : "text-white"}
    transition-colors
  `;

  return (
    <div className="flex items-center">
      <SideBar textBlack={textBlack} />

      {!isMobile && (
        <div data-testid="header-left-corner-desktop-options" className="flex items-center gap-1">
          <Link to="/arrivals" data-testid="arrivals-link">
            <button className={styleBtn}>
              <span className="text-sm">Arrivals</span>
            </button>
          </Link>

          <Shop>
            <div className={styleBtn}>
              <span className="text-sm">SHOP</span>
            </div>
          </Shop>

          <Link to="/about" data-testid="about-link">
            <button className={styleBtn}>
              <span className="text-sm">About</span>
            </button>
          </Link>
        </div>
      )}
    </div>
  )
}