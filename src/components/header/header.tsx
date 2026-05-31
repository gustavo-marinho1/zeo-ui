import { LeftCorner } from "./left-corner";
import { Logo } from "./logo";
import { RightCorner } from "./right-corner";

const Header = () => {
  return (
    <header className="fixed w-full h-17 z-10 backdrop-blur shadow-sm flex justify-between items-center">

      <div className="h-full flex items-center">
        <LeftCorner />
      </div>

      <div className="h-full absolute text-center left-1/2 -translate-x-1/2">
        <Logo />
      </div>

      <div className="h-full flex items-center">
        <RightCorner />
      </div>

    </header>
  )
}

export default Header;