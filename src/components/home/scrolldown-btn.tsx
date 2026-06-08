import { ChevronDown } from "lucide-react"

interface Props {
  label: string,
  scroll: () => void
}

const ScrolldownButton = ({ label, scroll }: Props) => {
  return (
    <div className="h-min flex justify-center text-black">
      <button
        onClick={scroll}
        className="flex flex-col items-center gap-2 text-sm tracking-wider transition-opacity hover:opacity-60 cursor-pointer mb-4"
        aria-label={label}
      >
        <span className="font-mono font-semibold">{label}</span>
        <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={1} />
      </button>
    </div>
  )
}

export default ScrolldownButton