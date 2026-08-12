import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import { Arrivals } from "../components/home/arrivals";
import { BoxCategory } from "../components/home/categories";
import { New } from "@/components/home/new";
import { Collections } from "@/components/home/collections";

export default function Home() {

  return (
    <>
      <div className="fixed z-30 w-full backdrop-blur-sm bg-white/60 hover:bg-white/95 transition-all duration-300 ease-in-out">
        <Header />
      </div>

      <main className="flex flex-col mb-20">
        <div className="mt-20"></div>

        <section className="px-8 sm:px-12 md:px-16 xl:px-24 2xl:px-36">
          <New />
        </section>

        <section className="mt-16 w-full flex flex-col gap-1">
          <div className="col-span-full">
            <Arrivals />
          </div>

          <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-1">
            <BoxCategory name="tops" link="/shop/tops" />
            <BoxCategory name="bottoms" link="/shop/bottoms" />
            <BoxCategory name="footwear" link="/shop/footwear" />
            <BoxCategory name="accessories" link="/shop/accessories" />
          </div>
        </section>

        <section className="px-8 sm:px-12 md:px-16 xl:px-24 2xl:px-36 mt-16">
          <Collections />
        </section>
      </main>

      <Footer />
    </>
  )
}