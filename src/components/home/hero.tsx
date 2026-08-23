const Hero = () => {
  {/*const banners = [
    { image_url: "01.png", alt: "Banner 01" },
    { image_url: "01.png", alt: "Banner 02" },
    { image_url: "01.png", alt: "Banner 03" }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(index < banners.length - 1 ? index + 1 : 0);
    }, 5000);
    return () => clearInterval(interval);
  }, [index]);*/}

  return (
    <div className="w-full aspect-3/4 md:aspect-5/3 lg:aspect-6/3 xl:aspect-16/6 min-h-[200px] flex justify-center items-end bg-neutral-50 relative overflow-hidden">

      {/* small */}
      <div className="md:hidden">
        <img
          src="./images/hero/01m.jpg"
          alt="Hero-01"
          className="absolute inset-0 size-full object-cover brightness-80"
        />
      </div>

      {/* big */}
      <div className="hidden md:block">
        <img
          src="./images/hero/01.jpg"
          alt="Hero-01"
          className="absolute inset-0 size-full object-cover brightness-80"
        />
      </div>


      {/*{banners.map((banner, i) => (
        <img
          key={`banner-${i}`}
          src={`./images/hero/eyes.png`}
          alt={banner.alt}
          className={`
            absolute inset-0 size-full object-cover
            transition-opacity duration-500 ease-in-out
            ${i === index ? "opacity-100 z-10" : "opacity-0 z-0"}
          `}
        />
      ))*/}

      {/* <img
        src="./images/banners/12.jpg"
        alt="Hero-02"
        className="w-full object-cover"
      />

      <img
        src="./images/banners/13.jpg"
        alt="Hero-02"
        className="w-full object-cover"
      />

      <img
        src="./images/banners/02.png"
        alt="Hero-02"
        className="w-full object-cover"
      />

      <img
        src="./images/banners/05.png"
        alt="Hero-02"
        className="w-full object-cover"
      /> */}
    </div>
  )
}
export default Hero