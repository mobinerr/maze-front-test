<script setup lang="ts">
  import type { ProductType } from '@/types';

  type Props = {
    product: ProductType;
  };

  defineProps<Props>();
</script>

<template>
  <Card hover>
    <NuxtImg
      :src="product.image"
      :alt="product.title"
      width="300"
      height="300"
      class="mx-auto mb-4 h-48 object-contain"
    />
    <h2 class="mb-2 line-clamp-2 font-semibold">
      {{ product.title }}
    </h2>
    <p class="mb-3 text-sm text-gray-500">
      {{ product.category }}
    </p>
    <p class="font-bold">${{ product.price }}</p>
  </Card>
</template>
