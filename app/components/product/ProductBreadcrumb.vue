<script setup lang="ts">
  import { PhCaretLeft, PhHouse } from '@/icons';

  import type { BreadcrumbItem } from '@/types';

  defineProps<{
    items: BreadcrumbItem[];
  }>();
</script>

<template>
  <nav aria-label="Breadcrumb" class="flex items-center gap-2 text-sm leading-6">
    <template v-for="(item, index) in items" :key="item.label">
      <CommonAppLink
        v-if="item.to"
        :to="item.to"
        class="flex items-center text-text-muted transition-colors hover:text-primary"
      >
        <PhHouse v-if="index === 0" :size="18" />
        <span v-else class="text-nowrap">
          {{ item.label }}
        </span>
      </CommonAppLink>
      <span v-else class="truncate font-medium text-text-muted">
        {{ item.label }}
      </span>
      <PhCaretLeft v-if="index < items.length - 1" :size="14" class="text-text-muted" />
    </template>
  </nav>
</template>
