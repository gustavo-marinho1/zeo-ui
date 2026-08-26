import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const banners = [
    { url: "/collection/01", image_url: "01.jpg", image_url_m: "01/01.jpg", alt: "Banner 01", brightness: "brightness-80" },
    { url: "/collection/02", image_url: "02.jpg", image_url_m: "02/01.jpg", alt: "Banner 02", brightness: "brightness-90" }
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
          <Link to={banner.url} key={`banner-${i}`}>
            <img
              src={`./images/collections/${banner.image_url_m}`}
              alt={banner.alt}
              className={`
                absolute inset-0
                size-full object-cover ${banner.brightness}
                transition-opacity duration-500 ease-in-out
                ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
              `}
            />
          </Link>
        ))}
      </div>

      {/* big */}
      <div className="hidden md:block">
        {banners.map((banner, i) => (
          <Link to={banner.url} key={`banner-${i}`}>
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
          </Link>
        ))}
      </div>

    </div>
  )
}
export default Hero