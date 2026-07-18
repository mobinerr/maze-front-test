<script setup lang="ts">
  type Props = {
    to: string;
  };

  defineProps<Props>();
</script>

<template>
  <CommonAppLink
    :to="to"
    class="group cursor-pointer relative flex items-center gap-2 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary"
  >
    <slot />
    <span
      class="absolute shrink-0 grow-0 overflow-hidden -bottom-1 left-1/2 h-[5px] w-[5px] -translate-x-1/2 scale-0 rounded-full bg-primary transition-transform duration-300 ease-[cubic-bezier(.34,1.56,.64,1)] group-hover:scale-100 group-hover:bottom-0"
    />
  </CommonAppLink>
</template>
