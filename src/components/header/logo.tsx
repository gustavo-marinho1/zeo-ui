import { Link } from "react-router-dom";

export const Logo = ({ textBlack }: { textBlack?: boolean }) => {
  return (
    <Link to="/" className="h-full">
      <div className="h-full flex items-center justify-center gap-1">
        {textBlack ? (
          <span className="text-3xl text-black font-semibold">ZEO</span>
        ) : (
          <span className="text-3xl text-white font-semibold">ZEO</span>
        )}
      </div>
    </Link>
  )
}