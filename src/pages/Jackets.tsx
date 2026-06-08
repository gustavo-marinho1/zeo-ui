import Product from "../components/product/product";
import { ProductGrid } from "../components/home/product-group";
import { jackets } from "../lib/products";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

export default function Jackets() {
  return (
    <>
      <Header />

      <main className="min-h-screen py-20 px-4">
        <div className="flex flex-col justify-center gap-10">
          <div className="text-center">
            <label className="text-2xl font-semibold">Jackets</label>
          </div>
          <ProductGrid>
            {jackets.map((product) => (
              <Product key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      </main>

      <Footer />
    </>
  )
}