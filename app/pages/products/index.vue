<script setup lang="ts">
  import { getProducts } from '@/services';

  useSeoMeta({
    title: 'صفحه محصولات',
    description: 'لیست محصولات وبسایت ما',
  });

  const { data: products, pending, error } = await useAsyncData('products', getProducts);
</script>

<template>
  <div class="container mx-auto py-8">
    <div v-if="pending">Loading...</div>

    <div v-else-if="error" class="flex flex-1 items-center justify-center">
      <span class="text-red-500 text-base font-semibold">{{ error.message }}</span>
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
