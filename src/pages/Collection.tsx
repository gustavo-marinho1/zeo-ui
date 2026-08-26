import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ProductGrid } from "@/components/home/product-group";
import Product from "@/components/product/product";
import { collections, type CollectionType } from "@/lib/collections";
import { Loader, SearchX } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Collection() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [loading, setLoading] = useState<boolean>(true);
  const [collection, setCollection] = useState<CollectionType>();

  useEffect(() => {
    if (id) {
      getCollection(id);
    } else {
      navigate("/");
    }
  }, [id]);

  const getCollection = async (id: string) => {
    try {
      setLoading(true);
      const col = collections.find(c => c.id === id);
      if (col) setCollection(col);
      else navigate("/");
    } catch {
      navigate("/");
    } finally {
      setTimeout(() => setLoading(false), 500);
    }
  }

  return (
    <>
      <Header textBlack />

      <main className="min-h-screen mb-20">
        {loading ? (
          <div className="w-full flex justify-center py-16">
            <Loader className="animate-spin" />
          </div>
        ) : (
          collection ? (
            <Item collection={collection} />
          ) : (
            <div className="w-full flex justify-center py-16">
              <SearchX className="animate-spin" />
            </div>
          )
        )}
      </main >

      <Footer />
    </>
  )
}

export const Item = ({ collection }: { collection: CollectionType }) => {
  return (
    <div className="flex flex-col gap-0">

      <div className="p-4 text-lg font-semibold">{collection.name}</div>

      <div className="flex-[1] grid grid-cols-2">
        {collection.images.map(img => (
          <img key={`collections-${img}`} src={`/images/collections/${collection.id}/${img}`} className="w-full" />
        ))}
      </div>

      <div className="flex-[1] p-4">
        <div className="bg-neutral-100 text-md p-4">{collection.description}</div>
      </div>

      <div className="mt-4 px-4">
        <div className="text-md font-semibold">Products</div>
        <div className="mt-4">
          <ProductGrid>
            {collection.products.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </ProductGrid>
        </div>
      </div>

    </div>
  )
}