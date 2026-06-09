import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { ProductGrid } from "../../components/home/product-group"
import Product from "../../components/product/product"
import { bottoms, type ProductType } from "../../lib/products"
import { useState } from "react"

export default function Bottoms() {
  const [filter, setFilter] = useState<string>("ALL");
  const [products, setProducts] = useState<ProductType[]>(bottoms);

  const filterOptions = [
    {
      label: "All",
      value: "ALL",
    },
    {
      label: "Pants",
      value: "PANTS",
    },
    {
      label: "Shorts",
      value: "SHORTS",
    },
  ];

  const applyFilter = (filter: string) => {
    setFilter(filter);

    let filtered = bottoms;

    if (filter !== "ALL") {
      filtered = bottoms.filter((product) => product.category.includes(filter));
    }

    setProducts(filtered);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen py-20 px-4">
        <div className="flex flex-col justify-center gap-10">

          <div className="flex flex-col gap-2">
            <label className="text-lg">Bottoms</label>
            <div className="">
              {filterOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => applyFilter(option.value)}
                  className={`border border-black/40 text-sm py-1 px-2 cursor-pointer mr-2 mb-2 ${filter === option.value ? "bg-black text-white" : ""}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {products.length === 0 ? (
            <div className="flex flex-col items-center justify-center">
              <label className="text-sm">No products found</label>
            </div>
          ) : (
            <ProductGrid>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </ProductGrid>
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}