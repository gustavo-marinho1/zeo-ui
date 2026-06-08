import { useEffect, useState } from "react";
import Header from "../components/header/header";
import { products, type ProductType } from "../lib/products";
import Footer from "../components/footer/footer";
import { useParams } from "react-router-dom";
import { currencyBRL } from "../services/format";

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [product, setState] = useState<ProductType>();

  useEffect(() => {
    getProductById(id);
  }, [id]);

  function getProductById(id: string) {
    setLoading(true);
    try {
      const result = products.find((p) => p.id === id);
      if (result) {
        setState(result);
      } else {
        setState(undefined);
      }
    } catch (error) {
      setState(undefined);
    } finally {
      setTimeout(() => setLoading(false), 1000);
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen pt-16 flex">
        {loading ? (
          <div className="flex-1 flex justify-center items-center">
            <span className="text-xl animate-pulse">Loading...</span>
          </div>
        ) : product ? (
          <div className="flex-[1] flex flex-col md:flex-row">

            <div className="flex-[1] flex flex-col">
              {product.images.map((image) => (
                <img
                  key={image}
                  src={`/images/products/${product.name_url}/${image}`}
                  alt={product.name}
                  className="w-full object-cover"
                />
              ))}
            </div>

            <div className="flex-[1]">
              <div className="sticky top-16 p-4 md:p-10">
                <div className="flex flex-col gap-4">
                  <div className="text-3xl font-semibold">{product.name}</div>
                  <div className="text-lg">{product.description}</div>
                  <div className="text-xl font-semibold">{currencyBRL(product.price)}</div>
                  <button className="bg-neutral-800 hover:bg-neutral-900 text-white p-2 md:mt-2 cursor-pointer">ADD TO BAG</button>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex justify-center items-center">
            <span className="text-xl">Not found</span>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}