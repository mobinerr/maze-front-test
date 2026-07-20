<script setup lang="ts">
  import type { ProductCategory } from '@/types';

  const modelValue = defineModel<string[]>({
    default: () => [],
  });

  defineProps<{
    categories: ProductCategory[];
  }>();
</script>

<template>
  <UiCard class="p-0">
    <UiAccordion type="single" collapsible default-value="category">
      <UiAccordionItem value="category" class="border-none shadow-none">
        <UiAccordionTrigger class="px-4 py-4 text-sm font-medium text-text">
          دسته‌بندی
        </UiAccordionTrigger>

        <UiAccordionContent>
          <div class="flex flex-col gap-4 px-4 pb-4">
            <UiCheckboxItem
              v-for="category in categories"
              :key="category.value"
              v-model="modelValue"
              :value="category.value"
            >
              <div class="flex w-full items-center justify-between">
                <span>
                  {{ category.value }}
                </span>

                <span class="rounded-md bg-muted-background px-2 py-0.5 text-xs">
                  {{ category.count }}
                </span>
              </div>
            </UiCheckboxItem>
          </div>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </UiCard>
</template>
