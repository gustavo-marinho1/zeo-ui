import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="h-full">
      <div className="h-full flex items-center justify-center gap-1">
        {/* <span className="text-6xl font-semibold uppercase text-neutral-200/50">New</span> */}
        <span className="text-4xl font-semibold">ZEO</span>
        {/* <span className="text-6xl font-semibold uppercase text-neutral-200/50">Era</span> */}
      </div>
    </Link>
  )
}