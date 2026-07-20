import type { ProductFilters } from '@/types';

const DEFAULT_PRODUCT_FILTERS: ProductFilters = {
  search: '',
  sort: 'price-asc',
  categories: [],
};

export { DEFAULT_PRODUCT_FILTERS };
