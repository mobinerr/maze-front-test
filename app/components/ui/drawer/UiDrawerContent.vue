<script setup lang="ts">
  import { DrawerContent, DrawerOverlay, DrawerPortal } from 'vaul-vue';
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay class="fixed inset-0 z-50 bg-black/60" />
    <DrawerContent
      class="fixed inset-x-0 bottom-0 z-50 rounded-t-xl border border-border bg-background p-4 outline-none"
    >
      <slot />
    </DrawerContent>
  </DrawerPortal>
</template>
