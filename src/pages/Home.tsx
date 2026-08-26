import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Categories } from "@/components/home/categories";
import { Arrivals } from "@/components/home/arrivals";
import { Collections } from "@/components/home/collections";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <>
      <div className="fixed z-30 w-full p-2">
        <div className="bg-olive-800/45 hover:bg-olive-800/60 transition-colors rounded-lg">
          <Header />
        </div>
      </div>

      <main className="flex flex-col">
        <section className="">
          <Hero />
        </section>

        <section className="mt-5">
          <Arrivals />
        </section>

        <section className="mt-10">
          <Collections />
        </section>

        <section className="mt-0.5">
          <Categories />
        </section>
      </main>

      <Footer />
    </>
  )
}