<script setup lang="ts">
  import type { ProductType } from '@/types';
  import { PhCaretLeft } from '@/icons';
  import { PRODUCT_ROUTES } from '@/constants';

  defineProps<{
    product: ProductType;
  }>();
</script>

<template>
  <UiCard hover class="grid gap-2">
    <NuxtImg
      :src="product.image"
      :alt="product.title"
      class="w-full h-44 mx-auto rounded object-contain mb-2"
    />
    <div class="w-full flex items-center justify-between">
      <p class="text-sm text-text-muted leading-6">
        {{ product.category }}
      </p>
      <UiRating :rate="product.rating.rate" />
    </div>
    <h2 class="line-clamp-1 font-semibold">
      {{ product.title }}
    </h2>
    <div class="flex items-center justify-end">
      <span class="font-bold enum">${{ product.price }}</span>
    </div>
    <CommonAppLink
      :to="PRODUCT_ROUTES.DETAILS(product.id)"
      :aria-label="`مشاهده ${product.title}`"
      class="w-full flex items-center justify-center gap-2 text-primary font-semibold text-sm h-10 border border-border rounded transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
    >
      <span>مشاهده و جزئیات</span>
      <PhCaretLeft :size="16" weight="bold" />
    </CommonAppLink>
  </UiCard>
</template>
