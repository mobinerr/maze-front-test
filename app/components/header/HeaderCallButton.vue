<script setup lang="ts">
  import { PhPhoneCall } from '@/icons';
  import { ORGANIZATION } from '@/constants/organization';
  const { PHONE } = ORGANIZATION;
</script>

<template>
  <CommonAppLink
    type="tel"
    :to="PHONE"
    class="flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-7 py-3 text-sm font-medium transition-all cursor-pointer hover:bg-primary/80 max-md:size-10 max-md:text-primary max-md:bg-transparent max-md:rounded-md max-md:p-0 max-md:justify-center max-md:border-2 max-md:border-primary max-md:hover:text-white"
  >
    <span class="max-md:hidden">تماس</span>
    <PhPhoneCall :size="18" />
  </CommonAppLink>
</template>
