import { useState, type JSX } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element,
  open: boolean,
  setOpen: (v: boolean) => void
}

export const Search = ({ children, open, setOpen }: Props) => {
  const navigate = useNavigate();
  const [query, setQuery] = useState<string>("");

  const submit = (query: string) => {
    try {
      const q = query.trim();
      if (!q.length) return
      navigate(`/search?q=${q}`);
      setOpen(false);
      setQuery("");
    } catch {
      setQuery("");
      setOpen(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogTrigger className="flex items-center">
        {children}
      </DialogTrigger>

      <DialogContent className="sm:max-w-3xl ring-0 bg-white rounded-sm gap-1">
        <DialogHeader>
          <DialogTitle>
            <label className="font-light" htmlFor="search">Search</label>
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <form onSubmit={e => {
          e.preventDefault();
          submit(query);
        }}>
          <div className="flex items-center gap-1">
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
          </div>
        </form>
      </DialogContent>

    </Dialog>
  )
}