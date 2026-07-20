<script setup lang="ts">
  import type { ProductCategory, ProductFilters } from '@/types';

  const filters = defineModel<ProductFilters>({
    default: () => ({
      search: '',
      sort: 'stock-asc',
      categories: [],
    }),
  });

  defineProps<{
    categories: ProductCategory[];
  }>();
</script>

<template>
  <div class="w-[266px] shrink-0 max-lg:hidden">
    <div class="sticky top-6 flex flex-col gap-4">
      <ProductSearch v-model="filters.search" />
      <ProductSort v-model="filters.sort" />
      <ProductCategory v-model="filters.categories" :categories="categories" />
    </div>
  </div>
</template>
