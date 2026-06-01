type ProductType = {
  id: string,
  name: string
  name_url: string
  price: number
  category: string[]
}

const PACK_AA01: ProductType = {
  id: "PACK_AA01",
  name: "PACK AA01",
  name_url: "aa01.jpg",
  price: 180,
  category: ["PACKS"]
}

export const products: ProductType[] = [
  PACK_AA01,
  PACK_AA01,
  PACK_AA01,
  PACK_AA01,
  PACK_AA01,
  PACK_AA01,
  PACK_AA01,
  PACK_AA01
];

export const arrivals: ProductType[] = [
  PACK_AA01,
  PACK_AA01,
  PACK_AA01
];