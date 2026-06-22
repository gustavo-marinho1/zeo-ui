import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Arrivals = () => {
  const banners = [
    { image_url: "01.png", link: "/shop/tops" },
    { image_url: "02.png", link: "/shop/bottoms" }
  ];

  const [index, setIndex] = useState(0);

  const goLeft = () => setIndex(index > 0 ? index - 1 : banners.length - 1);
  const goRight = () => setIndex(index < banners.length - 1 ? index + 1 : 0);

  const styleBtn = `
    w-9 h-9 bg-white/40 hover:bg-white/50 backdrop-blur
    flex justify-center items-center
    border border-neutral-600 hover:border-neutral-900
    transition-colors cursor-pointer
  `;

  return (
    <div className="flex flex-col justify-between">
      <div className="w-full relative flex">
        {/* Slides */}
        <div className="relative w-[100vw] aspect-[3/4] md:aspect-[16/6] overflow-hidden">
          {banners.map((banner, i) => (
            <Link to={banner.link} key={"banner-" + i}>
              <img
                src={`images/arrivals/${banner.image_url}`}
                alt={`banner ${i}`}
                className={`
                absolute inset-0 size-full object-cover
                transition-opacity duration-500 ease-in-out
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
              />
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="absolute z-20 bottom-2 right-2 md:bottom-4 md:right-4">
          <div className="flex items-center gap-1 p-1">
            <button className={styleBtn} onClick={goLeft}>
              <ChevronLeft size={24} strokeWidth={1.3} className="text-neutral-900" />
            </button>
            <button className={styleBtn} onClick={goRight}>
              <ChevronRight size={24} strokeWidth={1.3} className="text-neutral-900" />
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

// a gritaria dos desperdícios, ódio da representação
// não podem se desconvecer pelo adestramento cultural