import { LeftCorner } from "./left-corner";
import { Logo } from "./logo";
import { RightCorner } from "./right-corner";

const Header = () => {
  return (
    <header className="w-full h-16 px-4">
      <div className="h-full flex justify-between items-center">

        <div className="h-fit w-1/3">
          <LeftCorner />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
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