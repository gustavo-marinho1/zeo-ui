import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="h-full">
      <div className="h-full flex items-center justify-center">
        <span className="text-xl">Zeo</span>
      </div>
    </Link>
  )
}