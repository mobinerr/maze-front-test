<script setup lang="ts">
  import { ref } from 'vue';

  import { DEFAULT_PRODUCT_FILTERS } from '@/constants';
  import { getProducts } from '@/services';
  import type { ProductFilters } from '@/types';
  import { useProductCategories, useProductFilters, useProductQuery } from '@/composables';

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

  const isFiltersDrawerOpen = ref(false);
</script>

<template>
  <div class="container mx-auto py-8">
    <CommonStateError v-if="error" :message="error.message" />

    <div v-else class="relative flex gap-6">
      <ProductSidebar v-model="productFilters" :categories="categories" />

      <div class="flex w-full flex-1 flex-col gap-y-6 overflow-x-hidden">
        <ProductFiltersTrigger @click="isFiltersDrawerOpen = true" />

        <ProductFiltersDrawer
          v-model:open="isFiltersDrawerOpen"
          v-model="productFilters"
          :categories="categories"
        />

        <ProductAppliedFilters v-model="productFilters" />

        <ProductSkeleton v-if="pending" />

        <template v-else-if="filteredProducts.length">
          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
          </div>
        </template>

        <ProductEmptyState v-else :search="productFilters.search" />
      </div>
    </div>
  </div>
</template>
