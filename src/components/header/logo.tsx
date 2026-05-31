import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="h-full">
      <img
        src="./images/logo/logo-02.png"
        alt="Hero-01"
        className="h-full scale-[1.90] object-cover"
      />
    </Link>
  )
}