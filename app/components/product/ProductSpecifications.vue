<script setup lang="ts">
  import type { ProductSpecification } from '@/types';

  defineProps<{
    items: ProductSpecification[];
  }>();
</script>

<template>
  <UiCard class="p-6">
    <h2 class="mb-6 text-xl font-semibold">مشخصات فنی</h2>

    <div class="flex flex-col gap-4">
      <ProductSpecificationRow
        v-for="item in items"
        :key="item.label"
        :label="item.label"
        :value="item.value"
        :multiline="item.multiline"
      />
    </div>
  </UiCard>
</template>
