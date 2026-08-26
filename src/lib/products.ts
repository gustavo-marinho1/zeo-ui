export type ProductType = {
  id: string,
  name: string,
  name_url: string,
  price: number,
  description: string,
  sizes: string[],
  category: string[],
  images: string[],
}

const hd01: ProductType = {
  id: "hd01",
  name: "HOODIE 01",
  name_url: "hd-01",
  description: "HOODIE 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png", "02.png"],
  price: 60.00,
  category: ["TOPS", "HOODIES"]
}

const hd02: ProductType = {
  id: "hd02",
  name: "HOODIE 02",
  name_url: "hd-02",
  description: "HOODIE 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 55.00,
  category: ["TOPS", "HOODIES"]
}

const hd03: ProductType = {
  id: "hd03",
  name: "HOODIE 03",
  name_url: "hd-03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "HOODIE 03",
  price: 55.00,
  category: ["TOPS", "HOODIES"]
}

const hd04: ProductType = {
  id: "hd04",
  name: "HOODIE 04",
  name_url: "hd-04",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "HOODIE 04",
  price: 50.00,
  category: ["TOPS", "HOODIES"]
}

const hd05: ProductType = {
  id: "hd05",
  name: "HOODIE 05",
  name_url: "hd-05",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "HOODIE 05",
  price: 58.00,
  category: ["TOPS", "HOODIES"]
}

const hd06: ProductType = {
  id: "hd06",
  name: "HOODIE 06",
  name_url: "hd-06",
  description: "HOODIE 06",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 58.00,
  category: ["TOPS", "HOODIES"]
}

export const hd07: ProductType = {
  id: "hd07",
  name: "HOODIE 07",
  name_url: "hd-07",
  description: "Crafted from heavyweight premium cotton, this oversized black hooded jacket boasts a unique concealed button-front. The standout feature is its intentional distressed finish, with strategic fraying and minor holes throughout, offering a rugged, aged appeal. It includes deep front pockets, a structured integrated hood, and generous ribbed cuffs. This garment combines utilitarian tech details with an edgy, worn-in aesthetic, creating a powerful contemporary piece.",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.jpg"],
  price: 78.00,
  category: ["TOPS", "HOODIES"]
}

const jc01: ProductType = {
  id: "jc01",
  name: "JACKET 01",
  name_url: "jc-01",
  description: "JACKET 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 85.00,
  category: ["TOPS", "JACKETS"]
}

const jc02: ProductType = {
  id: "jc02",
  name: "JACKET 02",
  name_url: "jc-02",
  description: "JACKET 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 85.00,
  category: ["TOPS", "JACKETS"]
}

const jc03: ProductType = {
  id: "jc03",
  name: "JACKET 03",
  name_url: "jc-03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "JACKET 03",
  price: 60.00,
  category: ["TOPS", "JACKETS"]
}

export const jc04: ProductType = {
  id: "jc04",
  name: "JACKET 04",
  name_url: "jc-04",
  description: "Elevate your outerwear with this black, bomber-style leather jacket. Crafted from a soft, subtly shiny leather, it offers a sophisticated take on a classic. Key details include a classic point collar, a clean concealed front closure, and two functional, large bellow pockets with structured flaps. Rib-knit cuffs and a matching ribbed hem provide a defined, sporty silhouette. A versatile piece that balances timeless style with contemporary design.",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 87.00,
  category: ["TOPS", "JACKETS"]
}

export const ls01: ProductType = {
  id: "ls01",
  name: "LONG SLEEVE 01",
  name_url: "ls-01",
  description: "This essential layering piece is a classic, soft-jersey cotton long-sleeve t-shirt in deep black. It features a fitted, comfortable silhouette and clean seams. Designed for maximum versatility, this tee is a core wardrobe staple. The fine rib-knit collar and cuffs provide a structured look that holds its shape, making it perfect for building complex, edgy outfits. Pair it under oversized t-shirts, jackets, or leather pieces for a modern, gothic, or alternative vibe.",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 44.00,
  category: ["TOPS", "LONG-SLEEVES"]
}

export const ls02: ProductType = {
  id: "ls02",
  name: "LONG SLEEVE 02",
  name_url: "ls-02",
  description: "This long-sleeved tee features a unique charcoal gray vintage pigment wash, giving it a soft, lived-in feel. A subtle, vertical tonal graphic, resembling abstract tribal or circuit-like lines, runs down the front and the length of the sleeves. Made from premium cotton, it offers a relaxed, slightly oversized fit and is designed for layering, blending a worn-in aesthetic with precise technical detail, perfect for the modern cyber-grunge look.",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 50.00,
  category: ["TOPS", "LONG-SLEEVES"]
}

export const ls03: ProductType = {
  id: "ls03",
  name: "LONG SLEEVE 03",
  name_url: "ls-03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "This oversized crewneck long-sleeved tee features a unique, heavily washed charcoal black finish, giving it a worn-in, vintage appearance. The dropped shoulder design enhances the relaxed silhouette, while exposed tonal seams along the shoulders and sleeves add a technical, edge-driven detail. Crafted from a premium heavy cotton, it offers a comfortable, structured drape, perfect for a high-concept streetwear aesthetic.",
  price: 48.00,
  category: ["TOPS", "LONG-SLEEVES"]
}

const ct01: ProductType = {
  id: "ct01",
  name: "COAT 01",
  name_url: "ct-01",
  description: "COAT 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 150.00,
  category: ["TOPS", "COATS"]
}

const ct02: ProductType = {
  id: "ct02",
  name: "COAT 02",
  name_url: "ct-02",
  description: "COAT 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 145.00,
  category: ["TOPS", "COATS"]
}

const ct03: ProductType = {
  id: "ct03",
  name: "COAT 03",
  name_url: "ct-03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "COAT 03",
  price: 152.00,
  category: ["TOPS", "COATS"]
}

const ct04: ProductType = {
  id: "ct04",
  name: "COAT 04",
  name_url: "ct-04",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png", "02.png"],
  description: "COAT 04",
  price: 172.00,
  category: ["TOPS", "COATS"]
}

const ts01: ProductType = {
  id: "ts01",
  name: "T-SHIRT 01",
  name_url: "ts-01",
  description: "T-SHIRT 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 40.00,
  category: ["TOPS", "T-SHIRTS"]
}

const ts02: ProductType = {
  id: "ts02",
  name: "T-SHIRT 02",
  name_url: "ts-02",
  description: "T-SHIRT 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 38.00,
  category: ["TOPS", "T-SHIRTS"]
}

const ts03: ProductType = {
  id: "ts03",
  name: "T-SHIRT 03",
  name_url: "ts-03",
  description: "T-SHIRT 03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png", "02.png"],
  price: 38.00,
  category: ["TOPS", "T-SHIRTS"]
}

const ts04: ProductType = {
  id: "ts04",
  name: "T-SHIRT 04",
  name_url: "ts-04",
  description: "T-SHIRT 04",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 35.00,
  category: ["TOPS", "T-SHIRTS"]
}

const ts05: ProductType = {
  id: "ts05",
  name: "T-SHIRT 05",
  name_url: "ts-05",
  description: "T-SHIRT 05",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 40.00,
  category: ["TOPS", "T-SHIRTS"]
}

const ts06: ProductType = {
  id: "ts06",
  name: "T-SHIRT 06",
  name_url: "ts-06",
  description: "T-SHIRT 06",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 39.00,
  category: ["TOPS", "T-SHIRTS"]
}

const ts07: ProductType = {
  id: "ts07",
  name: "T-SHIRT 07",
  name_url: "ts-07",
  description: "T-SHIRT 07",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 41.00,
  category: ["TOPS", "T-SHIRTS"]
}

const pn01: ProductType = {
  id: "pn01",
  name: "PANTS 01",
  name_url: "pn-01",
  description: "PANTS 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 60.00,
  category: ["BOTTOMS", "PANTS"]
}

const pn02: ProductType = {
  id: "pn02",
  name: "PANTS 02",
  name_url: "pn-02",
  description: "PANTS 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png", "02.png"],
  price: 62.00,
  category: ["BOTTOMS", "PANTS"]
}

const pn03: ProductType = {
  id: "pn03",
  name: "PANTS 03",
  name_url: "pn-03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "PANTS 03",
  price: 68.00,
  category: ["BOTTOMS", "PANTS"]
}

const pn04: ProductType = {
  id: "pn04",
  name: "PANTS 04",
  name_url: "pn-04",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "PANTS 04",
  price: 59.00,
  category: ["BOTTOMS", "PANTS"]
}

const pn05: ProductType = {
  id: "pn05",
  name: "PANTS 05",
  name_url: "pn-05",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "PANTS 05",
  price: 50.00,
  category: ["BOTTOMS", "PANTS"]
}

export const pn06: ProductType = {
  id: "pn06",
  name: "PANTS 06",
  name_url: "pn-06",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "Matching the tee in its distressed character, these super-oversized cargo pants are made from heavily washed, light-grey denim. They feature an extremely baggy fit for ultimate comfort and a rebellious, anti-fit profile. Multiple large cargo pockets with flap closures are strategically placed on the legs, providing utilitarian storage and adding a rugged, dimensional look that defines the contemporary tech-wear style.",
  price: 54.00,
  category: ["BOTTOMS", "PANTS"]
}

const pn07: ProductType = {
  id: "pn07",
  name: "PANTS 07",
  name_url: "pn-07",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  description: "PANTS 07",
  price: 61.00,
  category: ["BOTTOMS", "PANTS"]
}

const sn01: ProductType = {
  id: "sn01",
  name: "SNEAKERS 01",
  name_url: "sn-01",
  description: "SNEAKERS 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 110.00,
  category: ["FOOTWEAR", "SNEAKERS"]
}

const sn02: ProductType = {
  id: "sn02",
  name: "SNEAKERS 02",
  name_url: "sn-02",
  description: "SNEAKERS 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 135.00,
  category: ["FOOTWEAR", "SNEAKERS"]
}

const sn03: ProductType = {
  id: "sn03",
  name: "SNEAKERS 03",
  name_url: "sn-03",
  description: "SNEAKERS 03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 126.00,
  category: ["FOOTWEAR", "SNEAKERS"]
}

const sn04: ProductType = {
  id: "sn04",
  name: "SNEAKERS 04",
  name_url: "sn-04",
  description: "SNEAKERS 04",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 126.00,
  category: ["FOOTWEAR", "SNEAKERS"]
}

const sn05: ProductType = {
  id: "sn05",
  name: "SNEAKERS 05",
  name_url: "sn-05",
  description: "SNEAKERS 05",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 130.00,
  category: ["FOOTWEAR", "SNEAKERS"]
}

const sn06: ProductType = {
  id: "sn06",
  name: "SNEAKERS 06",
  name_url: "sn-06",
  description: "SNEAKERS 06",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png", "02.png"],
  price: 125.00,
  category: ["FOOTWEAR", "SNEAKERS"]
}

export const bt01: ProductType = {
  id: "bt01",
  name: "BOOTS 01",
  name_url: "bt-01",
  description: "BOOTS 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 145.00,
  category: ["FOOTWEAR", "BOOTS"]
}

const bt02: ProductType = {
  id: "bt02",
  name: "BOOTS 02",
  name_url: "bt-02",
  description: "BOOTS 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 139.00,
  category: ["FOOTWEAR", "BOOTS"]
}

const bt03: ProductType = {
  id: "bt03",
  name: "BOOTS 03",
  name_url: "bt-03",
  description: "BOOTS 03",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 152.00,
  category: ["FOOTWEAR", "BOOTS"]
}

const ha01: ProductType = {
  id: "ha01",
  name: "HAT 01",
  name_url: "ha-01",
  description: "HAT 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png", "02.png"],
  price: 29.00,
  category: ["ACCESSORIES", "HATS"]
}

const ha02: ProductType = {
  id: "ha02",
  name: "HAT 02",
  name_url: "ha-02",
  description: "HAT 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 35.00,
  category: ["ACCESSORIES", "HATS"]
}

const gs01: ProductType = {
  id: "gs01",
  name: "GLASSES 01",
  name_url: "gs-01",
  description: "GLASSES 01",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 98.00,
  category: ["ACCESSORIES", "GLASSES"]
}

const gs02: ProductType = {
  id: "gs02",
  name: "GLASSES 02",
  name_url: "gs-02",
  description: "GLASSES 02",
  sizes: ["XS", "S", "M", "L", "XL", "XXL"],
  images: ["01.png"],
  price: 102.00,
  category: ["ACCESSORIES", "GLASSES"]
}

export const hoodies: ProductType[] = [
  hd01,
  hd02,
  hd03,
  hd04,
  hd05,
  hd06,
  hd07
];

export const coats: ProductType[] = [
  ct01,
  ct02,
  ct03,
  ct04
];

export const jackets: ProductType[] = [
  jc01,
  jc02,
  jc03,
  jc04,
];

export const long_sleeves: ProductType[] = [
  ls01,
  ls02,
  ls03
];

export const pants: ProductType[] = [
  pn01,
  pn02,
  pn03,
  pn04,
  pn05,
  pn06,
  pn07
];

export const shorts: ProductType[] = [];

export const boots: ProductType[] = [
  bt01,
  bt02,
  bt03
];

export const sneakers: ProductType[] = [
  sn01,
  sn02,
  sn03,
  sn04,
  sn05,
  sn06
];

export const tshirts: ProductType[] = [
  ts01,
  ts02,
  ts03,
  ts04,
  ts05,
  ts06,
  ts07
];

export const glasses: ProductType[] = [
  gs01,
  gs02
];

export const hats: ProductType[] = [
  ha01,
  ha02,
];

export const products: ProductType[] = [
  ...hoodies,
  ...jackets,
  ...long_sleeves,
  ...pants,
  ...shorts,
  ...sneakers,
  ...tshirts,
  ...glasses,
  ...hats,
  ...boots,
  ...coats,
];

export const tops: ProductType[] = [
  ...hoodies,
  ...jackets,
  ...long_sleeves,
  ...tshirts,
  ...coats
];

export const bottoms: ProductType[] = [
  ...pants,
  ...shorts,
];

export const footwear: ProductType[] = [
  ...sneakers,
  ...boots,
];

export const accessories: ProductType[] = [
  ...hats,
  ...glasses,
];

export const arrivals: ProductType[] = [
  hd06,
  jc04,
  ls01,
  ls02,
  pn05,
  pn06,
  ts05,
  ts07
];

export const seasonal: ProductType[] = [
  ts03,
  pn02,
  sn04,
];