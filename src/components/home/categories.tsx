import { Link } from "react-router-dom"

export const Categories = () => {
  return (
    <div className="flex justify-center">
      <div className="w-full py-0.5 h-full grid grid-cols-2 md:grid-cols-4 gap-0.5">
        <BoxCategory name="tops" link="/shop/tops" />
        <BoxCategory name="bottoms" link="/shop/bottoms" />
        <BoxCategory name="footwear" link="/shop/footwear" />
        <BoxCategory name="accessories" link="/shop/accessories" />
      </div>
    </div>
  )
}

export const BoxCategory = ({ name, link }: { name: string, link: string }) => {
  return (
    <Link to={link}>
      <div className="w-full relative aspect-square flex justify-center items-center overflow-hidden">
        <img src={`/images/categories/${name}.png`} alt={name.toUpperCase()} />
        <div className="absolute bottom-2 right-2 z-10">
          <span className="text-white text-md tracking-[.2em]">{name.toUpperCase()}</span>
        </div>
      </div>
    </Link>
  )
}