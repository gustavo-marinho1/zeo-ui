import { Link } from "react-router-dom";

export const LeftCorner = () => {
  return (
    <div className="flex items-center gap-2 px-3">
      <Link to="/arrivals">
        <button className="cursor-pointer border border-neutral-500 hover:bg-neutral-300/50 transition-colors rounded-md px-1.5 py-0.5 text-sm">
          Arrivals
        </button>
      </Link>

      <button className="cursor-pointer border border-neutral-500 hover:bg-neutral-300/50 transition-colors rounded-md px-1.5 py-0.5 text-sm">
        SHOP+
      </button>

      <Link to="/about">
        <button className="cursor-pointer border border-neutral-500 hover:bg-neutral-300/50 transition-colors rounded-md px-1.5 py-0.5 text-sm">
          About
        </button>
      </Link>
    </div>
  )
}