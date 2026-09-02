export const ProductGroup = ({ title, children }: {
  title: string,
  children: React.ReactNode
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-xl font-semibold tracking-tighter">{title}</h2>
      {children}
    </div>
  )
}