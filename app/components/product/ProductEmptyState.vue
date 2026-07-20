<script setup lang="ts">
  import { PhMagnifyingGlass } from '@/icons';

  defineProps<{
    search?: string;
  }>();
</script>

<template>
  <div class="flex min-h-96 flex-col items-center justify-center gap-4">
    <div class="flex size-14 items-center justify-center rounded-full bg-muted-background">
      <PhMagnifyingGlass :size="64" class="text-text-muted" />
    </div>

    <div class="flex flex-col items-center gap-2 text-center">
      <h3 class="text-base font-bold text-text">محصولی پیدا نشد!</h3>
      <p class="max-w-md text-sm text-text-muted">
        <template v-if="search"> برای کلمه "{{ search }}" محصولی پیدا نشد. </template>
        <template v-else> با فیلترهای انتخاب شده محصولی پیدا نشد. </template>
      </p>
    </div>
  </div>
</template>
