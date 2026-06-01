export const ProductGroup = ({ title, children }: { title: string, children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <h2 className="text-xl font-semibold tracking-tighter">{title}</h2>
      {children}
    </div>
  )
}

export const ProductGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {children}
    </div>
  )
}