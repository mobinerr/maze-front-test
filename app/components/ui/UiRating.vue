<script setup lang="ts">
  import { PhStar } from '@/icons';

  defineProps<{
    rate: number;
  }>();
</script>

<template>
  <div class="flex h-6 items-center gap-1 rounded-full bg-muted px-2">
    <span class="text-xs font-bold leading-6 text-text">
      {{ rate }}
    </span>

    <PhStar :size="16" weight="fill" class="text-warning" />
  </div>
</template>
