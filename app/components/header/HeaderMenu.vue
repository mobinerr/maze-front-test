<script setup lang="ts">
  import { PhList } from '@/icons';
</script>

<template>
  <div>
    <button
      type="button"
      class="flex justify-center items-center size-10 rounded-md shrink-0 grow-0 border-2 border-primary text-primary md:hidden transition-all hover:bg-primary hover:text-primary-foreground"
    >
      <PhList :size="18" />
    </button>
  </div>
</template>
