<script setup lang="ts">
  import { computed } from 'vue';

  import { getPositiveRouteParam } from '@/utils';
  import { useProduct } from '@/composables';
  import { getProduct } from '@/services';

  const route = useRoute();

  const productId = computed(() => getPositiveRouteParam(route.params.id, 'Product'));

  const {
    data: product,
    pending,
    error,
  } = await useAsyncData(
    () => `product-${productId.value}`,
    () => getProduct(productId.value),
  );

  const { hasProduct, breadcrumbItems, specifications } = useProduct(product);

  useSeoMeta({
    title: () => product.value?.title ?? 'جزئیات محصول',
    description: () => product.value?.description ?? 'مشاهده جزئیات محصول',
  });
</script>

<template>
  <div class="container mx-auto flex flex-col gap-6 py-6">
    <CommonStateError v-if="error" :message="error.message" />
    <ProductDetailSkeleton v-else-if="pending" />
    <div v-else-if="hasProduct" class="space-y-6">
      <ProductBreadcrumb :items="breadcrumbItems" />
      <ProductHero :product="product!" />
      <ProductSpecifications :items="specifications" />
    </div>
  </div>
</template>
