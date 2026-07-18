<script setup lang="ts">
import { getProducts } from '@/services';

const { data: products, pending, error } = await useAsyncData('products', getProducts);
</script>

<template>
  <div class="container mx-auto py-8">
    <h1 class="mb-6 text-3xl font-bold">Products</h1>

    <div v-if="pending">Loading...</div>

    <div v-else-if="error" class="text-red-500">
      {{ error.message }}
    </div>

    <pre v-else>{{ products }}</pre>
  </div>
</template>
