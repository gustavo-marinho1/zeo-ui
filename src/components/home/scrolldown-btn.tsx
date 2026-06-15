import { ChevronDown } from "lucide-react"

interface Props {
  label: string,
  scroll: () => void
}

const ScrolldownButton = ({ label, scroll }: Props) => {
  return (
    <div className="h-16 flex justify-center items-center text-black">
      <button
        onClick={scroll}
        className="flex flex-col items-center gap-2 tracking-wider transition-opacity hover:opacity-60 cursor-pointer"
        aria-label={label}
      >
        <span className="text-xs md:text-sm font-mono font-light tracking-wider">{label}</span>
        <ChevronDown className="size-5 md:size-6 animate-bounce" strokeWidth={1} />
      </button>
    </div>
  )
}

export default ScrolldownButton