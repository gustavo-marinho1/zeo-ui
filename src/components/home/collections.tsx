import { Link } from "react-router-dom"

export const Collections = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <Link to="/collection/03" className="flex-[1]">
        <img
          src={`./images/collections/03/01.jpg`}
          alt="Collection 03"
          className="object-cover size-full"
          loading="lazy"
        />
      </Link>

      <Link to="/collection/04" className="flex-[1]">
        <img
          src={`./images/collections/04/01.jpg`}
          alt="Collection 04"
          className="object-cover size-full"
          loading="lazy"
        />
      </Link>

      <Link to="/collection/05" className="flex-[1]">
        <img
          src={`./images/collections/05/01.jpg`}
          alt="Collection 05"
          className="object-cover size-full"
          loading="lazy"
        />
      </Link>
    </div>
  )
}