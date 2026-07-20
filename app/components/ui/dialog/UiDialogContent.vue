<script setup lang="ts">
  import { DialogClose, DialogContent, DialogOverlay, DialogPortal } from 'reka-ui';

  import { PhX } from '@/icons';
</script>

<template>
  <DialogPortal>
    <DialogOverlay
      class="fixed inset-0 z-50 bg-black/70 data-[state=open]:animate-in data-[state=closed]:animate-out"
    />

    <DialogContent
      class="fixed left-1/2 top-1/2 z-50 w-[95vw] max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl border bg-background p-6 shadow-lg outline-none"
    >
      <slot />

      <DialogClose class="absolute end-4 top-4 rounded-md p-2 transition hover:bg-muted">
        <PhX :size="18" />
      </DialogClose>
    </DialogContent>
  </DialogPortal>
</template>
