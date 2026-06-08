import { useRef } from "react";
import Header from "../components/header/header";
import ScrolldownButton from "../components/home/scrolldown-btn";
import Footer from "../components/footer/footer";
import { Arrivals } from "../components/home/arrivals";
import { Seasonal } from "../components/home/seasonal";
import { Explore } from "../components/home/explore";

export default function Home() {
  const arrivalsRef = useRef<HTMLElement>(null);
  const seasonalRef = useRef<HTMLElement>(null);
  const exploreRef = useRef<HTMLElement>(null);

  const scrollToArrivals = () => {
    arrivalsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSeasonal = () => {
    seasonalRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full min-h-[100vh] flex flex-col justify-between">
        <Header />
        <div className="w-full flex-[1] flex items-center">
          Hero
        </div>
        <div className="">
          <ScrolldownButton label="Arrivals" scroll={scrollToArrivals} />
        </div>
      </div>

      <main>
        <section className="relative w-full min-h-[100vh] flex flex-col justify-between" ref={arrivalsRef}>
          <div className="w-full flex-[1] flex items-center py-20 pb-12">
            <Arrivals />
          </div>
          <div className="hidden md:block">
            <ScrolldownButton label="Seasonal" scroll={scrollToSeasonal} />
          </div>
        </section>

        <section className="relative w-full min-h-[100vh] flex flex-col justify-between" ref={seasonalRef}>
          <div className="w-full flex-[1] flex items-center py-20 pb-12">
            <Seasonal />
          </div>
          <div className="hidden md:block">
            <ScrolldownButton label="Explore more" scroll={scrollToExplore} />
          </div>
        </section>

        <section className="relative w-full min-h-[100vh] flex flex-col justify-between" ref={exploreRef}>
          <div className="w-full flex-[1] flex items-center py-20 pb-12">
            <Explore />
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}