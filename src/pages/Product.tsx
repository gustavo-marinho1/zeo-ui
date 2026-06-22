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
  const [selectedSize, setSelectedSize] = useState<string>('');

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
      setTimeout(() => setLoading(false), 500);
    }
  }

  return (
    <>
      <Header />

      <main className="min-h-screen pt-16 flex">
        {loading ? (
          <div className="flex-1 flex justify-center items-center">
            <span className="text-lg animate-pulse">Loading...</span>
          </div>
        ) : product ? (
          <div className="flex-[1] flex flex-col md:flex-row sm:px-10 md:px-15 lg:px-20 py-10">

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
              <div className="sticky top-16 p-4 md:p-10 flex flex-col gap-4">
                {/* Name */}
                <div className="text-2xl font-semibold">{product.name}</div>
                {/* Price */}
                <div className="text-lg">{currencyBRL(product.price)}</div>
                {/* Size */}
                <div className="flex flex-col">
                  <h4 className="text-md font-semibold">Size</h4>
                  <div className="">
                    {product.sizes.map((size) => (
                      <BtnSize
                        key={size}
                        size={size}
                        selected={size === selectedSize}
                        onClick={() => setSelectedSize(size)}
                      />
                    ))}
                  </div>
                </div>
                {/* Buy button */}
                <button className="bg-neutral-900 hover:bg-black text-white p-2 md:mt-2 cursor-pointer">
                  ADD TO BAG
                </button>

                {/* Information */}
                <div className="flex flex-col gap-2 bg-neutral-100 p-5 mt-6">
                  <h4 className="text-md font-semibold">Product information</h4>
                  <span className="text-md text-neutral-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, eius? Nemo laboriosam illo id, excepturi earum quam ullam incidunt, minima similique repudiandae nostrum aspernatur sit! Quod nam labore aliquid soluta!</span>
                </div>
              </div>
            </div>

          </div>
        ) : (
          <div className="flex-1 flex justify-center items-center">
            <span className="text-lg">Not found</span>
          </div>
        )}
      </main>

      <Footer />
    </>
  )
}

const BtnSize = ({ size, selected, onClick }: { size: string, selected: boolean, onClick: () => void }) => {
  return (
    <button
      className={`
        border border-black/40 text-sm h-10 w-10 cursor-pointer mr-2 mb-2
        ${selected ? "bg-black text-white" : ""}
      `}
      onClick={onClick}
    >
      {size}
    </button>
  )
}