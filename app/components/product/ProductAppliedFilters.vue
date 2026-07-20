<script setup lang="ts">
  import { computed } from 'vue';

  import { PRODUCT_SORT_OPTIONS, DEFAULT_PRODUCT_FILTERS } from '@/constants';

  import type { AppliedProductFilter, ProductFilters } from '@/types';
  import { PhCirclesFour, PhMagnifyingGlass, PhSortAscending, PhX } from '@/icons';

  const productFilters = defineModel<ProductFilters>({
    required: true,
  });

  const appliedFilters = computed<AppliedProductFilter[]>(() => {
    const items: AppliedProductFilter[] = [];

    if (productFilters.value.search) {
      items.push({
        id: productFilters.value.search,
        type: 'search',
        label: productFilters.value.search,
      });
    }

    for (const category of productFilters.value.categories) {
      items.push({
        id: category,
        type: 'category',
        label: category,
      });
    }

    if (productFilters.value.sort !== DEFAULT_PRODUCT_FILTERS.sort) {
      const selectedSort = PRODUCT_SORT_OPTIONS.find(
        option => option.value === productFilters.value.sort,
      );

      if (selectedSort) {
        items.push({
          id: selectedSort.value,
          type: 'sort',
          label: selectedSort.label,
        });
      }
    }

    return items;
  });

  const removeFilter = (filter: AppliedProductFilter): void => {
    switch (filter.type) {
      case 'search':
        productFilters.value.search = '';
        break;

      case 'category':
        productFilters.value.categories = productFilters.value.categories.filter(
          category => category !== filter.id,
        );
        break;

      case 'sort':
        productFilters.value.sort = DEFAULT_PRODUCT_FILTERS.sort;
        break;
    }
  };

  const filterIcons: Record<AppliedProductFilter['type'], Component> = {
    search: PhMagnifyingGlass,
    category: PhCirclesFour,
    sort: PhSortAscending,
  };
</script>

<template>
  <UiCard
    v-if="appliedFilters.length"
    class="flex items-center justify-between gap-6 w-full h-16 overflow-hidden"
  >
    <h2 class="text-sm font-medium text-text text-nowrap">فیلترهای اعمال شده</h2>
    <div
      class="scrollbar-thin w-full flex flex-1 flex-nowrap items-center justify-end gap-2 overflow-x-auto"
    >
      <div
        v-for="filter in appliedFilters"
        :key="`${filter.type}-${filter.id}`"
        class="inline-flex h-8 items-center gap-2 rounded-full bg-primary/10 pl-1 pr-2 text-sm text-text cursor-default"
      >
        <component :is="filterIcons[filter.type]" :size="14" weight="bold" />
        <span class="text-nowrap">
          {{ filter.label }}
        </span>
        <button
          class="size-6 rounded-full flex items-center justify-center text-text transition-colors hover:bg-primary/15"
          type="button"
          :aria-label="`حذف ${filter.label}`"
          @click="removeFilter(filter)"
        >
          <PhX :size="14" weight="bold" />
        </button>
      </div>
    </div>
  </UiCard>
</template>
