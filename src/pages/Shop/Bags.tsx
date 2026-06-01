import Header from "../../components/header/header";
import Product from "../../components/home/product";
import { ProductGrid, ProductGroup } from "../../components/home/product-group";
import { products } from "../../lib/products";

export default function Bags() {
  return (
    <main className="scroll-smooth">
      <section className="relative w-full">
        <Header />
      </section>

      <section className="min-h-screen pt-21 pb-20 px-4 bg-gradient-to-r from-neutral-50 via-white to-neutral-200/50">
        <ProductGroup title="Bags">
          <ProductGrid>
            {products.map((product) => (
              <Product key={product.id} name={product.name} name_url={product.name_url} price={product.price} />
            ))}
          </ProductGrid>
        </ProductGroup>
      </section>
    </main>
  )
}