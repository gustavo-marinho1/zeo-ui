import { useRef } from "react";
import Header from "../components/header/header";
import ScrolldownButton from "../components/home/scrolldown-btn";
import Footer from "../components/footer/footer";
import { Arrivals } from "../components/home/arrivals";
import { Categories } from "../components/home/categories";
import Hero from "../components/home/hero";

export default function Home() {
  const exploreRef = useRef<HTMLElement>(null);

  const scrollToExplore = () => {
    exploreRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full min-h-[100vh] flex flex-col justify-between">
        <Header />
        <div className="w-full flex-[1] flex items-center mt-16">
          <Hero />
        </div>
        <ScrolldownButton label="Explore" scroll={scrollToExplore} />
      </div>

      <main className="pt-16 flex flex-col gap-0.5" ref={exploreRef}>
        <section>
          <Arrivals />
        </section>

        <section>
          <Categories />
        </section>

        <section className="relative w-full min-h-[70vh] max-h-[80vh] flex">
          <div className="w-full flex-[1] flex items-center bg-gradient-to-br from-neutral-900 via-neutral-900/93 to-neutral-900/98">
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}