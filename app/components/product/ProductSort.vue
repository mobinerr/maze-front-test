<script setup lang="ts">
  import { PRODUCT_SORT_OPTIONS } from '@/constants/product-sort';
  import type { ProductSortValue } from '@/types';

  const sort = defineModel<ProductSortValue>({
    default: 'stock-asc',
  });
</script>

<template>
  <UiCard class="p-0">
    <UiAccordion type="single" collapsible default-value="sort">
      <UiAccordionItem value="sort" class="border-none shadow-none">
        <UiAccordionTrigger class="px-4 py-4 text-sm text-text font-medium">
          مرتب سازی
        </UiAccordionTrigger>

        <UiAccordionContent>
          <div class="flex flex-col gap-4 px-4 pb-4">
            <UiRadioGroup v-model="sort">
              <UiRadioGroupItem
                v-for="option in PRODUCT_SORT_OPTIONS"
                :key="option.value"
                :value="option.value"
              >
                {{ option.label }}
              </UiRadioGroupItem>
            </UiRadioGroup>
          </div>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </UiCard>
</template>
