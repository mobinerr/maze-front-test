import { computed, type Ref } from 'vue';

import type { ProductCategory, ProductType } from '@/types';

const useProductCategories = (products: Ref<ProductType[] | null | undefined>) => {
  const categories = computed<ProductCategory[]>(() => {
    if (!products.value) {
      return [];
    }

    const categoryMap = new Map<string, number>();

    for (const product of products.value) {
      categoryMap.set(product.category, (categoryMap.get(product.category) ?? 0) + 1);
    }

    return [...categoryMap.entries()].map(([value, count]) => ({
      value,
      count,
    }));
  });

  return {
    categories,
  };
};

export { useProductCategories };
