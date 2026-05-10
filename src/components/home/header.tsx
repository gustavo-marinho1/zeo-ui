import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed w-full h-20 z-10 py-3 px-6 backdrop-blur flex justify-center">
      <Link to="/" className="h-full">
        <img
          src="./images/logo/logo-02.png"
          alt="Hero-01"
          className="h-full scale-300 object-cover"
        />
      </Link>
    </header>
  )
}
export default Header