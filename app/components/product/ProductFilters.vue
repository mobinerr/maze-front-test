<script setup lang="ts">
  import type { ProductCategory, ProductFilters } from '@/types';

  const filters = defineModel<ProductFilters>({
    required: true,
  });

  defineProps<{
    categories: ProductCategory[];
  }>();
</script>

<template>
  <div class="flex flex-col gap-4">
    <ProductSearch v-model="filters.search" />
    <ProductSort v-model="filters.sort" />
    <ProductCategory v-model="filters.categories" :categories="categories" />
  </div>
</template>
