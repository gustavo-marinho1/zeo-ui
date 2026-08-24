import { useEffect, useState } from "react";

const Hero = () => {
  const banners = [
    { image_url: "01.jpg", image_url_m: "01m.jpg", alt: "Banner 01", brightness: "brightness-80" },
    { image_url: "02.jpg", image_url_m: "02m.jpg", alt: "Banner 02", brightness: "brightness-90" }
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
          <img
            key={`banner-${i}`}
            src={`./images/hero/${banner.image_url_m}`}
            alt={banner.alt}
            className={`
            absolute inset-0
            size-full object-cover ${banner.brightness}
            transition-opacity duration-500 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          />
        ))}
      </div>

      {/* big */}
      <div className="hidden md:block">
        {banners.map((banner, i) => (
          <img
            key={`banner-${i}`}
            src={`./images/hero/${banner.image_url}`}
            alt={banner.alt}
            className={`
            absolute inset-0
            size-full object-cover ${banner.brightness}
            transition-opacity duration-500 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
          />
        ))}
      </div>

    </div>
  )
}
export default Hero