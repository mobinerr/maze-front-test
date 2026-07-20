import type { ProductSortOption } from '@/types';

const PRODUCT_SORT_OPTIONS: ProductSortOption[] = [
  {
    value: 'price-asc',
    label: 'قیمت: کم به زیاد',
  },
  {
    value: 'price-desc',
    label: 'قیمت: زیاد به کم',
  },
  {
    value: 'rating-desc',
    label: 'امتیاز: زیاد به کم',
  },
  {
    value: 'rating-asc',
    label: 'امتیاز: کم به زیاد',
  },
];

export { PRODUCT_SORT_OPTIONS };
