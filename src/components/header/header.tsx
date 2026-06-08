import { LeftCorner } from "./left-corner";
import { Logo } from "./logo";
import { RightCorner } from "./right-corner";

const Header = () => {
  return (
    <header className="fixed w-full h-16 z-10 backdrop-blur">
      <div className="h-full flex justify-between items-center px-4 bg-white/50">

        <div className="w-1/3">
          <div className="h-full flex items-center">
            <LeftCorner />
          </div>
        </div>

        <div className="h-full absolute text-center left-1/2 -translate-x-1/2 overflow-hidden">
          <Logo />
        </div>

        <div className="w-1/3">
          <div className="h-full flex justify-end items-center">
            <RightCorner />
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header;