import { useRef } from "react";
import Header from "../components/header/header";
import ScrolldownButton from "../components/home/scrolldown-btn";
import Footer from "../components/footer/footer";
import { Arrivals } from "../components/home/arrivals";
import { Categories } from "../components/home/categories";
import Hero from "../components/home/hero";
import { New } from "@/components/home/new";

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

      <main className="pt-16 flex flex-col" ref={exploreRef}>
        <section>
          <Arrivals />
        </section>

        <section>
          <Categories />
        </section>

        <section className="py-4 md:py-8">
          <New />
        </section>
      </main>

      <Footer />
    </>
  )
}