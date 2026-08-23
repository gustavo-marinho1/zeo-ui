import { Logo } from "../header/logo";


const Header = () => {
  return (
    <header className="w-full h-17 z-10 shadow flex justify-center items-center gap-3">
      Gustavo Marinho <Logo textBlack />
    </header>
  )
}

export default Header;