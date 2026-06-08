export type ProductType = {
  id: string,
  name: string
  name_url: string
  price: number
  description: string,
  category: string[]
  images: string[]
}

const hd01: ProductType = {
  id: "hd01",
  name: "HOODIE 01",
  name_url: "hd-01",
  description: "HOODIE 01",
  images: ["01.png"],
  price: 435.00,
  category: ["HOODIES"]
}

const hd02: ProductType = {
  id: "hd02",
  name: "HOODIE 02",
  name_url: "hd-02",
  description: "HOODIE 02",
  images: ["01.png"],
  price: 435.00,
  category: ["HOODIES"]
}

const hd03: ProductType = {
  id: "hd03",
  name: "HOODIE 03",
  name_url: "hd-03",
  images: ["01.png"],
  description: "HOODIE 03",
  price: 435.00,
  category: ["HOODIES", "HOODIES"]
}

const hd04: ProductType = {
  id: "hd04",
  name: "HOODIE 04",
  name_url: "hd-04",
  images: ["01.png"],
  description: "HOODIE 04",
  price: 435.00,
  category: ["HOODIES"]
}

const hd05: ProductType = {
  id: "hd05",
  name: "HOODIE 05",
  name_url: "hd-05",
  images: ["01.png"],
  description: "HOODIE 05",
  price: 435.00,
  category: ["HOODIES"]
}

const hd06: ProductType = {
  id: "hd06",
  name: "HOODIE 06",
  name_url: "hd-06",
  description: "HOODIE 06",
  images: ["01.png"],
  price: 435.00,
  category: ["HOODIES"]
}

const jc01: ProductType = {
  id: "jc01",
  name: "JACKET 01",
  name_url: "jc-01",
  description: "JACKET 01",
  images: ["01.png"],
  price: 435.00,
  category: ["JACKETS"]
}

const jc02: ProductType = {
  id: "jc02",
  name: "JACKET 02",
  name_url: "jc-02",
  description: "JACKET 02",
  images: ["01.png"],
  price: 435.00,
  category: ["JACKETS"]
}

const jc03: ProductType = {
  id: "jc03",
  name: "JACKET 03",
  name_url: "jc-03",
  images: ["01.png"],
  description: "JACKET 03",
  price: 435.00,
  category: ["JACKETS"]
}

const jc04: ProductType = {
  id: "jc04",
  name: "JACKET 04",
  name_url: "jc-04",
  description: "JACKET 04",
  images: ["01.png"],
  price: 435.00,
  category: ["JACKETS"]
}

// const ls01: ProductType = {
//   id: "ls01",
//   name: "LONG SLEEVE 01",
//   name_url: "ls-01",
//   description: "LONG SLEEVE 01",
//   images: ["01.png"],
//   price: 435.00,
//   category: ["LONG SLEEVES"]
// }

// const ls02: ProductType = {
//   id: "ls02",
//   name: "LONG SLEEVE 02",
//   name_url: "ls-02",
//   description: "LONG SLEEVE 02",
//   images: ["01.png"],
//   price: 435.00,
//   category: ["LONG SLEEVES"]
// }

// const ls03: ProductType = {
//   id: "ls03",
//   name: "LONG SLEEVE 03",
//   name_url: "ls-03",
//   images: ["01.png"],
//   description: "LONG SLEEVE 03",
//   price: 435.00,
//   category: ["LONG SLEEVES"]
// }

// const ls04: ProductType = {
//   id: "ls04",
//   name: "LONG SLEEVE 04",
//   name_url: "ls-04",
//   images: ["01.png"],
//   description: "LONG SLEEVE 04",
//   price: 435.00,
//   category: ["LONG SLEEVES"]
// }

// const ls05: ProductType = {
//   id: "ls05",
//   name: "LONG SLEEVE 05",
//   name_url: "ls-05",
//   images: ["01.png"],
//   description: "LONG SLEEVE 05",
//   price: 435.00,
//   category: ["LONG SLEEVES"]
// }

const pn01: ProductType = {
  id: "pn01",
  name: "PANTS 01",
  name_url: "pn-01",
  description: "PANTS 01",
  images: ["01.png"],
  price: 435.00,
  category: ["PANTS"]
}

const pn02: ProductType = {
  id: "pn02",
  name: "PANTS 02",
  name_url: "pn-02",
  description: "PANTS 02",
  images: ["01.png"],
  price: 435.00,
  category: ["PANTS"]
}

const pn03: ProductType = {
  id: "pn03",
  name: "PANTS 03",
  name_url: "pn-03",
  images: ["01.png"],
  description: "PANTS 03",
  price: 435.00,
  category: ["PANTS"]
}

const pn04: ProductType = {
  id: "pn04",
  name: "PANTS 04",
  name_url: "pn-04",
  images: ["01.png"],
  description: "PANTS 04",
  price: 435.00,
  category: ["PANTS"]
}

const sn01: ProductType = {
  id: "sn01",
  name: "SNEAKERS 01",
  name_url: "sn-01",
  images: ["01.png"],
  description: "SNEAKERS 01",
  price: 435.00,
  category: ["SNEAKERS"]
}

const sn02: ProductType = {
  id: "sn02",
  name: "SNEAKERS 02",
  name_url: "sn-02",
  images: ["01.png"],
  description: "SNEAKERS 02",
  price: 435.00,
  category: ["SNEAKERS"]
}

const sn03: ProductType = {
  id: "sn03",
  name: "SNEAKERS 03",
  name_url: "sn-03",
  images: ["01.png"],
  description: "SNEAKERS 03",
  price: 435.00,
  category: ["SNEAKERS"]
}

const sn04: ProductType = {
  id: "sn04",
  name: "SNEAKERS 04",
  name_url: "sn-04",
  images: ["01.png"],
  description: "SNEAKERS 04",
  price: 435.00,
  category: ["SNEAKERS"]
}

const ts01: ProductType = {
  id: "ts01",
  name: "T-SHIRT 01",
  name_url: "ts-01",
  images: ["01.png"],
  description: "T-SHIRT 01",
  price: 435.00,
  category: ["T-SHIRTS"]
}

const ts02: ProductType = {
  id: "ts02",
  name: "T-SHIRT 02",
  name_url: "ts-02",
  images: ["01.png"],
  description: "T-SHIRT 02",
  price: 435.00,
  category: ["T-SHIRTS"]
}

const ts03: ProductType = {
  id: "ts03",
  name: "T-SHIRT 03",
  name_url: "ts-03",
  images: ["01.png"],
  description: "T-SHIRT 03",
  price: 435.00,
  category: ["T-SHIRTS"]
}

const ts04: ProductType = {
  id: "ts04",
  name: "T-SHIRT 04",
  name_url: "ts-04",
  description: "T-SHIRT 04",
  images: ["01.png"],
  price: 435.00,
  category: ["T-SHIRTS"]
}

const ha01: ProductType = {
  id: "ha01",
  name: "HAT 01",
  name_url: "ha-01",
  images: ["01.png"],
  description: "HAT 01",
  price: 435.00,
  category: ["HATS"]
}

const ha02: ProductType = {
  id: "ha02",
  name: "HAT 02",
  name_url: "ha-02",
  images: ["01.png"],
  description: "HAT 02",
  price: 435.00,
  category: ["HATS"]
}

export const hoodies: ProductType[] = [
  hd01,
  hd02,
  hd03,
  hd04,
  hd05,
  hd06,
];

export const jackets: ProductType[] = [
  jc01,
  jc02,
  jc03,
  jc04,
];

export const long_sleeves: ProductType[] = [];

export const pants: ProductType[] = [
  pn01,
  pn02,
  pn03,
  pn04,
];

export const shorts: ProductType[] = [];

export const sneakers: ProductType[] = [
  sn01,
  sn02,
  sn03,
  sn04,
];

export const tshirts: ProductType[] = [
  ts01,
  ts02,
  ts03,
  ts04,
];

export const glasses: ProductType[] = [];

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
  ...hats
];

export const arrivals: ProductType[] = [
  hd05,
  sn02,
];

export const seasonal: ProductType[] = [
  ts03,
  pn02,
  sn04,
];