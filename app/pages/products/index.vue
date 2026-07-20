<script setup lang="ts">
  import { ref } from 'vue';

  import { DEFAULT_PRODUCT_FILTERS } from '@/constants';
  import { getProducts } from '@/services';
  import type { ProductFilters } from '@/types';
  import { useProductFilters, useProductCategories, useProductQuery } from '@/composables';

  useSeoMeta({
    title: 'صفحه محصولات',
    description: 'لیست محصولات وبسایت ما',
  });

  const { data: products, pending, error } = await useAsyncData('products', getProducts);

  const productFilters = ref<ProductFilters>(structuredClone(DEFAULT_PRODUCT_FILTERS));

  const { syncFiltersFromQuery, watchProductFilters, watchRouteQuery } =
    useProductQuery(productFilters);

  syncFiltersFromQuery();
  watchProductFilters();
  watchRouteQuery();

  const { categories } = useProductCategories(products);

  const { filteredProducts } = useProductFilters(products, productFilters);
</script>

<template>
  <div class="container mx-auto py-8">
    <div v-if="pending">Loading...</div>

    <div v-else-if="error" class="flex flex-1 items-center justify-center">
      <span class="text-red-500 text-base font-semibold">
        {{ error.message }}
      </span>
    </div>

    <div v-else class="relative flex gap-6">
      <ProductSidebar v-model="productFilters" :categories="categories" />
      <div class="flex w-full flex-1 flex-col gap-y-6 overflow-x-hidden">
        <ProductAppliedFilters v-model="productFilters" />
        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
