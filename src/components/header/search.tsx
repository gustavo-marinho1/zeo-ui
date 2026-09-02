import { useState, type JSX } from "react";
import { Dialog, DialogClose, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { SearchIcon, XIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: JSX.Element
}

export const Search = ({ children }: Props) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
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

      <DialogTrigger data-testid="search-trigger" className="flex items-center">
        {children}
      </DialogTrigger>
      {open && (
        <DialogContent data-testid="search-content" className="sm:max-w-3xl ring-0 bg-white rounded-sm gap-3" showCloseButton={false}>
          <DialogHeader className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <DialogTitle>
                <label className="font-light" htmlFor="search">Search</label>
              </DialogTitle>
              <DialogClose data-testid="search-close-trigger" className="flex items-center cursor-pointer">
                <XIcon size={18} color="black" />
              </DialogClose>
            </div>
          </DialogHeader>

          <form onSubmit={e => {
            e.preventDefault();
            submit(query);
          }}>
            <div className="flex items-center gap-1">
              <Input
                id="search"
                data-testid="search-field"
                className="h-10 border-neutral-400 focus:border-black rounded-none"
                placeholder="What are you looking for?"
                value={query}
                onChange={e => {
                  setQuery(e.target.value)
                }}
              />
              <button
                data-testid="search-submit"
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
      )}

    </Dialog>
  )
}