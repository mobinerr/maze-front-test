<script setup lang="ts">
  import { PhSlidersHorizontal } from '@/icons';

  defineEmits<{
    click: [];
  }>();
</script>

<template>
  <div class="flex lg:hidden">
    <button
      type="button"
      class="flex h-8 bg-white items-center gap-2 rounded-full border border-border pr-2 pl-4"
      @click="$emit('click')"
    >
      <PhSlidersHorizontal :size="18" />
      <span class="text-sm">فیلترها</span>
    </button>
  </div>
</template>
