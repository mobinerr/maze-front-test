type ProductRatingType = {
  rate: number;
  count: number;
};

type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  rating: ProductRatingType;
};

type ProductResponseType = ProductType[];

export type { ProductType, ProductResponseType };
