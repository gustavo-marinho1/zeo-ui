export const BtnProductSize = ({ size, selected, onClick }: {
  size: string,
  selected: boolean,
  onClick: () => void
}) => {
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