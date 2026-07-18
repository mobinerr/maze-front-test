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
    <h1 class="mb-6 text-3xl font-bold">Products</h1>

    <div v-if="pending">Loading...</div>

    <div v-else-if="error" class="text-red-500">
      {{ error.message }}
    </div>

    <div v-else class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>
