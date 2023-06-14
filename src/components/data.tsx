export const images = [
  {
    id: "01",
    src: "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-crew-neck-sleeveless-built-in-shapewear-maxi-dress-bodycon-summer-dress-black-s-sy220012-bk1p-s-32939852857520_540x@2x.jpg?v=1677826057",
    alt: "Awesome watch",
  },
  {
    id: "02",
    src: "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-crew-neck-sleeveless-built-in-shapewear-maxi-dress-bodycon-summer-dress-black-s-sy220012-bk1p-s-32939852857520_540x@2x.jpg?v=1677826057",
    alt: "Awesome watch",
  },
  {
    id: "03",
    src: "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-crew-neck-sleeveless-built-in-shapewear-maxi-dress-bodycon-summer-dress-black-s-sy220012-bk1p-s-32939852857520_540x@2x.jpg?v=1677826057",
    alt: "Awesome watch",
  },
  {
    id: "04",
    src: "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-crew-neck-sleeveless-built-in-shapewear-maxi-dress-bodycon-summer-dress-black-s-sy220012-bk1p-s-32939852857520_540x@2x.jpg?v=1677826057",
    alt: "Awesome watch",
  },
  {
    id: "05",
    src: "https://images.unsplash.com/photo-1565440962783-f87efdea99fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=936&q=80",
    alt: "Awesome watch",
  },
  {
    id: "06",
    src: "https://images.unsplash.com/photo-1548169874-53e85f753f1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1420&q=80",
    alt: "Awesome watch",
  },
];

export const products = [
  {
    id: "1",
    name: "Built-in Shapewear Sexy Lace Slip Split Maxi Dress",
    currency: "USD",
    price: 119.99,
    flag: "new",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/popilush-built-in-shapewear-sexy-lace-slip-split-maxi-dress-bodycon-summer-dress-33114665320624_540x@2x.jpg?v=1685619297",
    rating: 4,
    ratingCount: 1,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "2",
    name: "Iconic Turquoise",
    currency: "USD",
    price: 199,
    salePrice: 179.99,
    flag: "on-sale",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-built-in-shapewear-modal-soft-lounge-dresses-bodycon-dress-33008112173232_540x@2x.jpg?v=1681439827",
    rating: 4,
    ratingCount: 12,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "3",
    name: "Marble Leather",
    currency: "USD",
    price: 199,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0607/2398/6608/files/popilush-built-in-shapewear-wide-straps-mini-lounge-dress-black-s-33066047176880_540x@2x.jpg?v=1683335750",
    rating: 4,
    ratingCount: 12,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
  {
    id: "4",
    name: "Silve wolf",
    currency: "GBP",
    price: 199,
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0607/2398/6608/products/popilush-built-in-shapewear-modal-sculpting-dresses-32909880885424_720x.jpg?v=1681804824",
    rating: 5,
    ratingCount: 1,
    description:
      "With a sleek design and a captivating essence, this is a modern Classic made for every occasion.",
    images,
  },
];

export type ElementType<T extends ReadonlyArray<unknown>> =
  T extends ReadonlyArray<infer ElementType> ? ElementType : never;

export type Product = ElementType<typeof products>;
export type ProductImage = ElementType<typeof images>;
