import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import { ProductGrid } from "../../components/home/product-group"
import Product from "../../components/product/product"
import { accessories, type ProductType } from "../../lib/products"
import { useState } from "react"

export default function Accessories() {
  const [filter, setFilter] = useState<string>("ALL");
  const [products, setProducts] = useState<ProductType[]>(accessories);

  const filterOptions = [
    {
      label: "All",
      value: "ALL",
    },
    {
      label: "Hats",
      value: "HATS",
    },
    {
      label: "Glasses",
      value: "GLASSES",
    },
    {
      label: "Bags",
      value: "BAGS",
    },
  ];

  const applyFilter = (filter: string) => {
    setFilter(filter);

    let filtered = accessories;

    if (filter !== "ALL") {
      filtered = accessories.filter((product) => product.category.includes(filter));
    }

    setProducts(filtered);
  };

  return (
    <>
      <Header />

      <main className="min-h-screen py-20 px-4">
        <div className="flex flex-col justify-center gap-10">

          <div className="flex flex-col gap-2">
            <label className="text-lg">Accessories</label>
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