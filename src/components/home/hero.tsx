import { collection01, collection02 } from "@/lib/collections";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  const banners = [
    {
      image_url: "01.jpg",
      alt: "Banner 01",
      brightness: "brightness-80",
      collection: collection01
    },
    {
      image_url: "02.jpg",
      alt: "Banner 02",
      brightness: "brightness-90",
      collection: collection02
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index < banners.length - 1 ? index + 1 : 0);
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="w-full aspect-3/4 md:aspect-5/3 lg:aspect-6/3 xl:aspect-16/6 min-h-[200px] flex justify-center items-end bg-neutral-50 relative overflow-hidden">

      {/* small */}
      <div className="md:hidden">
        {banners.map((banner, i) => (
          <Link to={`/collection/${banner.collection.id}`} key={`banner-${i}`}>
            <img
              src={`./images/collections/${banner.collection.id}/${banner.collection.images[0]}`}
              alt={banner.alt}
              className={`
                absolute inset-0
                size-full object-cover ${banner.brightness}
                transition-opacity duration-500 ease-in-out
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            />

            {i === index && (
              <div className="absolute z-20 bottom-6 left-6 right-6">
                <div className="w-full flex flex-col items-center gap-2 bg-neutral-900/30 hover:bg-neutral-900/40 rounded-lg py-3 px-4">
                  <div className="text-lg text-white">
                    {banner.collection.name}
                  </div>
                  <ExploreBtn />
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

      {/* big */}
      <div className="hidden md:block">
        {banners.map((banner, i) => (
          <Link to={`/collection/${banner.collection.id}`} key={`banner-${i}`}>
            <img
              src={`./images/hero/${banner.image_url}`}
              alt={banner.alt}
              className={`
                absolute inset-0
                size-full object-cover ${banner.brightness}
                transition-opacity duration-500 ease-in-out
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            />

            {i === index && (
              <div className="absolute z-20 bottom-6 left-6">
                <div className="w-fit xl:w-[600px] flex flex-col gap-2 bg-neutral-900/40 hover:bg-neutral-900/50 rounded-lg py-3 px-4">
                  <div className="text-lg text-white">
                    {banner.collection.name}
                  </div>
                  <div className="hidden xl:block text-sm text-neutral-200 font-light">
                    {banner.collection.description}
                  </div>
                  <ExploreBtn />
                </div>
              </div>
            )}
          </Link>
        ))}
      </div>

    </div>
  )
}

const ExploreBtn = () => {
  return (
    <button className="mt-2 w-64 bg-neutral-100 hover:bg-white border border-neutral-300 rounded-md px-2 py-1 text-black cursor-pointer">Explore</button>
  )
}