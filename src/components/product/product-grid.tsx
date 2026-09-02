export const ProductGrid = ({ children }: {
  children: React.ReactNode
}) => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-8">
      {children}
    </div>
  )
}