import { computed, type Ref } from 'vue';

import type { ProductFilters, ProductType } from '@/types';

const useProductFilters = (
  products: Ref<ProductType[] | null | undefined>,
  filters: Ref<ProductFilters>,
) => {
  const filteredProducts = computed(() => {
    if (!products.value) {
      return [];
    }

    let result = [...products.value];

    // Search
    if (filters.value.search.trim()) {
      const keyword = filters.value.search.trim().toLowerCase();

      result = result.filter(product => product.title.toLowerCase().includes(keyword));
    }

    // Categories
    if (filters.value.categories.length > 0) {
      result = result.filter(product => filters.value.categories.includes(product.category));
    }

    // Sort
    switch (filters.value.sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;

      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;

      case 'rating-asc':
        result.sort((a, b) => a.rating.rate - b.rating.rate);
        break;

      case 'rating-desc':
        result.sort((a, b) => b.rating.rate - a.rating.rate);
        break;
    }

    return result;
  });

  return {
    filteredProducts,
  };
};

export { useProductFilters };
