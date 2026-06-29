import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Arrivals } from "../components/home/arrivals";
import { BoxCategory } from "../components/home/categories";
import Hero from "../components/home/hero";
import { New } from "@/components/home/new";

export default function Home() {
  return (
    <>
      <div className="fixed z-30 w-full bg-neutral-100">
        <Header />
      </div>

      <main className="flex flex-col mb-20">
        <div className="relative w-full flex flex-col justify-between">
          <Hero />
        </div>

        <div className="px-8 sm:px-12 md:px-16 xl:px-24 2xl:px-36">
          <section className="py-8 md:py-16">
            <New />
          </section>

          <section className="">
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-1">
              <div className="col-span-full">
                <Arrivals />
              </div>
              <BoxCategory name="tops" link="/shop/tops" />
              <BoxCategory name="bottoms" link="/shop/bottoms" />
              <BoxCategory name="footwear" link="/shop/footwear" />
              <BoxCategory name="accessories" link="/shop/accessories" />
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  )
}