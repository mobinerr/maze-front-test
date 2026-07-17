type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
};

type ProductResponseType = ProductType[];

export type { ProductType, ProductResponseType };
