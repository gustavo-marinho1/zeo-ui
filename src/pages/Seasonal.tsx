import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Seasonal() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-20 px-4">
        <div className="flex flex-col justify-center gap-10">
          <div className="flex items-center justify-center">
            <label className="text-xl">Seasonal</label>
          </div>
          <div className="flex flex-col items-center justify-center">
            <label className="text-sm">Coming soon</label>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}