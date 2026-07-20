<script setup lang="ts">
  import { cn } from '@/utils';
  defineProps<{
    label: string;
    value: string | number;
    multiline?: boolean;
  }>();
</script>

<template>
  <div class="grid md:grid-cols-[180px_1fr] md:gap-4">
    <UiCard
      class="flex justify-start items-center bg-input p-6 border-none rounded-l-sm max-md:hidden"
    >
      <span class="font-medium text-sm text-text-muted">
        {{ label }}
      </span>
    </UiCard>

    <UiCard
      :class="
        cn(
          'relative flex bg-input p-6 border-none md:rounded-r-sm max-md:justify-center',
          multiline ? 'items-center min-h-40 max-md:pt-10' : 'items-center',
        )
      "
    >
      <span class="text-xs text-text-muted absolute top-4 right-4 md:hidden">
        {{ label }}
      </span>
      <p
        class="text-right leading-8 font-bold text-sm text-text"
        :class="{
          'whitespace-pre-line': multiline,
        }"
      >
        {{ value }}
      </p>
    </UiCard>
  </div>
</template>
