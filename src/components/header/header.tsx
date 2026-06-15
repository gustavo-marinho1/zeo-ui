import { LeftCorner } from "./left-corner";
import { Logo } from "./logo";
import { RightCorner } from "./right-corner";

const Header = () => {
  return (
    <header className="fixed w-full h-16 z-30 backdrop-blur">
      <div className="h-full flex justify-between items-center px-4 bg-white/20">

        <div className="w-1/3">
          <LeftCorner />
        </div>

        <div className="h-full absolute left-1/2 -translate-x-1/2 overflow-hidden">
          <Logo />
        </div>

        <div className="w-1/3">
          <RightCorner />
        </div>

      </div>
    </header>
  )
}

export default Header;