import { hd07, jc04, ls01, ls02, ls03, pn06, type ProductType } from "./products";

export type CollectionType = {
  id: string,
  name: string,
  description: string,
  images: string[],
  products: ProductType[]
}

export const collection01: CollectionType = {
  id: "01",
  name: "Fierce All-Black Leather Night Out Ensemble",
  description: "This jacket is designed for standout evening wear. Its urban-chic aesthetic makes it an ideal choice for high-energy night clubs, edgy gallery openings, or warehouse parties. Pair it with leather shorts and tall boots for a sophisticated, bold silhouette that commands attention. Whether heading to a trendy cocktail bar or an underground music venue, this piece delivers a powerful, fashion-forward statement perfect for city nightlife.",
  images: ["01.jpg", "02.jpg"],
  products: [jc04]
}

export const collection02: CollectionType = {
  id: "02",
  name: "Edgy Goth Layering Long Sleeve Tee",
  description: "This long-sleeve tee excels as a versatile foundation for edgy and alternative nightlife styles. It's the perfect layering choice for underground music venues, rock clubs, and dark-themed parties where a gothic, punk, or industrial-influenced aesthetic is key. The tee’s minimalist design also makes it great for styling for urban streetwear events, art gallery openings with a rebellious twist, or simply hanging out at a late-night cafe. For a true statement, pair it as shown with a distressed outer layer, a miniskirt, and combat boots.",
  images: ["01.jpg"],
  products: [ls01]
}

export const collection03: CollectionType = {
  id: "03",
  name: "Total Black Distressed Tech-Grunge Hoodie Look",
  description: "This all-black, distressed look is designed for commanding attention in edgy urban spaces. It's perfectly suited for high-energy music clubs with a techno or industrial focus, warehouse parties, or underground art events. This ensemble thrives in dimly lit, industrial-themed cocktail bars and at alternative fashion gatherings. It offers a powerful, mysterious silhouette for anyone navigating a vibrant, modern city at night, ensuring you stand out in the dark.",
  images: ["01.jpg"],
  products: [hd07]
}

export const collection04: CollectionType = {
  id: "04",
  name: "Monochromatic Cyber-Grunge Long Sleeve Look",
  description: "The edgy, subculture-inspired aesthetic of this entire look makes it perfect for specific late-night venues. It excels at underground techno or electronic music clubs, dark warehouse parties, and alternative rock concerts. Its bold, monochromatic, and street-ready style is also ideal for urban art events, subterranean cocktail bars, or simply making a statement on city streets after dark.",
  images: ["01.jpg"],
  products: [ls02]
}

export const collection05: CollectionType = {
  id: "05",
  name: "Washed Charcoal Oversized Urban Utility Outfit Set",
  description: "This urban-ready ensemble is a masterclass in modern, distressed streetwear. Its powerful, oversized silhouette makes it perfect for commanding attention in high-energy nightlife settings, from alternative techno clubs and warehouse parties to art gallery openings. The rugged aesthetic also suits casual urban exploring or simply making a bold fashion statement on city streets after dark, offering a cohesive, powerful look for those who embrace alternative culture.",
  images: ["01.jpg"],
  products: [pn06, ls03]
}

export const collections: CollectionType[] = [
  collection01, collection02, collection03, collection04, collection05
];