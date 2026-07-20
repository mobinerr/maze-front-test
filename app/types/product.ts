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

export type ProductSortValue = 'price-asc' | 'price-desc' | 'rating-desc' | 'rating-asc';

type ProductSortOption = {
  value: ProductSortValue;
  label: string;
};

type ProductCategory = {
  value: string;
  count: number;
};

type ProductFilters = {
  search: string;
  sort: ProductSortValue;
  categories: string[];
};

type AppliedProductFilter = {
  id: string;
  label: string;
  type: 'search' | 'category' | 'sort';
};

type ProductResponseType = ProductType[];

export type {
  AppliedProductFilter,
  ProductType,
  ProductResponseType,
  ProductSortOption,
  ProductCategory,
  ProductFilters,
};
