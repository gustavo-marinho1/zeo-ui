import { ChevronDown } from "lucide-react"

interface Props {
  scrollToProducts: () => void
}

const ScrolldownButton = ({ scrollToProducts }: Props) => {
  return (
    <div className="absolute bottom-0 w-full flex justify-center text-white">
      <button
        onClick={scrollToProducts}
        className="flex flex-col items-center gap-2 text-sm tracking-wider transition-opacity hover:opacity-60 cursor-pointer mb-4"
        aria-label="See other products"
      >
        <span className="font-mono font-semibold">see all products</span>
        <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={1} />
      </button>
    </div>
  )
}

export default ScrolldownButton