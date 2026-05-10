interface Props {
  name: string
  name_url: string
  price: number
}

const Product = ({ name, name_url, price }: Props) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="bg-neutral-100 w-full aspect-[3/4]">
        <img src={`/images/products/${name_url}`} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-center px-2">
        <label className="text-sm font-semibold">{name}</label>
        <label className="text-sm">R$ {price}</label>
      </div>
    </div>
  )
}

export default Product