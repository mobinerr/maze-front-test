<script setup lang="ts">
  import { PhWarningCircle } from '@/icons';

  defineProps<{
    message?: string;
  }>();
</script>

<template>
  <div class="flex min-h-96 flex-1 items-center justify-center">
    <div class="flex flex-col items-center gap-3 text-center">
      <div class="flex size-12 items-center justify-center rounded-full">
        <PhWarningCircle :size="64" class="text-red-500" />
      </div>
      <h1 class="text-xl font-bold text-red-500">خطایی رخ داد!</h1>
      <span class="text-sm font-medium text-red-500">
        {{ message || 'خطایی رخ داده است' }}
      </span>
    </div>
  </div>
</template>
