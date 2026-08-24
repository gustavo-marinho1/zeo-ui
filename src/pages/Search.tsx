import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { ProductGrid } from "@/components/home/product-group";
import Product from "@/components/product/product";
import { Input } from "@/components/ui/input";
import { products, type ProductType } from "@/lib/products";
import { SearchIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const query_params = searchParams.get("q");
  const [loading, setLoading] = useState<boolean>(false);
  const [results, setResults] = useState<ProductType[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    if (query_params) {
      find(query_params);
      setQuery(query_params);
    }
  }, [query_params]);

  const submit = (query: string) => {
    try {
      if (query === query_params) return;

      const q = query.trim();
      if (!q.length) return;

      navigate(`/search?q=${q}`);
    } catch {
      alert("Something went wrong");
    }
  }

  const find = (query: string) => {
    try {
      setLoading(true);
      const q = query.trim();

      if (!q.length) {
        setLoading(false);
        setResults([]);
        return
      };

      const filtered: ProductType[] = products.filter(product => {
        const parts = q.split(" ");
        const mapping = parts.map(part => product.name.toLowerCase().includes(part.toLowerCase()));
        const includes = !!mapping.filter(i => i === true).length;
        return includes;
      });


      setResults(filtered);
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header textBlack hideSearch />

      <main className="min-h-screen mt-5 mb-20 px-4">
        <div className="flex flex-col justify-center gap-10">

          <div className="flex flex-col gap-4">
            <label className="text-md">Search results</label>

            <form className="flex items-center gap-1" onSubmit={e => {
              e.preventDefault();
              submit(query);
            }}>
              <Input
                id="search"
                className="h-10 border-neutral-400 focus:border-black rounded-none"
                placeholder="What are you looking for?"
                value={query}
                onChange={e => {
                  setQuery(e.target.value)
                }}
              />
              <button
                type="button"
                className="size-10 border border-neutral-400 hover:border-black rounded-none flex justify-center items-center cursor-pointer"
                onClick={() => {
                  submit(query);
                }}
              >
                <SearchIcon strokeWidth={1.3} size={20} />
              </button>
            </form>
          </div>

          {loading ? (
            <div>Loading</div>
          ) : (
            (results.length === 0) ? (
              <div className="flex flex-col items-center justify-center">
                <label className="text-sm">No products found</label>
              </div>
            ) : (
              <ProductGrid>
                {results.map((p) => (
                  <Product key={p.id} product={p} />
                ))}
              </ProductGrid>
            )
          )}

        </div>
      </main>

      <Footer />
    </>
  )
}