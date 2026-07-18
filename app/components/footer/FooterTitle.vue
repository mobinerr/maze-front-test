<script setup lang="ts">
  import { ORGANIZATION } from '@/constants/organization';

  const title = ORGANIZATION.NAME;
</script>

<template>
  <div class="flex flex-col gap-2">
    <h1 class="font-bold text-lg max-lg:text-center">{{ title }}</h1>
    <span class="font-normal text-xs text-text max-lg:text-center">
      هفت روز هفته از ۸ صبح تا ۱۲ شب پاسخگو هستیم
    </span>
  </div>
</template>
