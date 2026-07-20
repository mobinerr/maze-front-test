<script setup lang="ts">
  import type { ProductCategory, ProductFilters } from '@/types';

  const open = defineModel<boolean>('open', {
    required: true,
  });

  const filters = defineModel<ProductFilters>({
    required: true,
  });

  defineProps<{
    categories: ProductCategory[];
  }>();
</script>

<template>
  <UiDrawer v-model:open="open">
    <UiDrawerContent>
      <UiDrawerHeader>
        <UiDrawerTitle> فیلتر محصولات </UiDrawerTitle>
      </UiDrawerHeader>
      <ProductFilters v-model="filters" :categories="categories" />
    </UiDrawerContent>
  </UiDrawer>
</template>
