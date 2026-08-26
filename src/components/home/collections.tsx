import { collection03, collection04, collection05 } from "@/lib/collections"
import { Link } from "react-router-dom"

export const Collections = () => {
  return (
    <div className="w-full flex flex-col md:flex-row">
      <Link to={`/collection/${collection03.id}`} className="flex-[1] relative">
        <img
          src={`./images/collections/${collection03.id}/01.jpg`}
          alt={collection03.description}
          className="object-cover size-full"
          loading="lazy"
        />
        <ExploreBtn />
      </Link>

      <Link to={`/collection/${collection04.id}`} className="flex-[1] relative">
        <img
          src={`./images/collections/${collection04.id}/01.jpg`}
          alt={collection04.description}
          className="object-cover size-full"
          loading="lazy"
        />
        <ExploreBtn />
      </Link>

      <Link to={`/collection/${collection05.id}`} className="flex-[1] relative">
        <img
          src={`./images/collections/${collection05.id}/01.jpg`}
          alt={collection05.description}
          className="object-cover size-full"
          loading="lazy"
        />
        <ExploreBtn />
      </Link>
    </div>
  )
}

export const ExploreBtn = () => {
  return (
    <div className="absolute z-20 bottom-4 left-4 right-4">
      <div className="flex justify-end">
        <button className="mt-2 w-32 bg-white border border-neutral-300 hover:border-neutral-400 rounded-md px-2 py-1 text-black cursor-pointer">Explore</button>
      </div>
    </div>
  )
}