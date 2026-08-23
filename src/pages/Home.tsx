import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Categories } from "@/components/home/categories";
import { Arrivals } from "@/components/home/arrivals";
import { Collections } from "@/components/home/collections";
import Hero from "@/components/home/hero";

export default function Home() {

  return (
    <>
      {/*<div className="fixed z-30 w-full hover:backdrop-blur-sm bg-white/25 hover:bg-white/55 transition-all duration-300 ease-in-out">
        <Header />
      </div>*/}

      <div className="fixed z-30 w-full p-2">
        <div className="bg-olive-800/50 rounded-lg">
          <Header />
        </div>
      </div>

      <main className="flex flex-col">
        <section className="">
          <Hero />
        </section>

        <section className="mt-6">
          <Arrivals />
        </section>

        <section className="mt-6">
          <Collections />
        </section>

        <section className="mt-1">
          <Categories />
        </section>
      </main>

      <Footer />
    </>
  )
}