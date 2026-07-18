<script setup lang="ts">
  import {
    AccordionHeader,
    AccordionTrigger,
    type AccordionTriggerProps,
    useForwardProps,
  } from 'reka-ui';

  import { PhCaretDown } from '@/icons';
  import { cn } from '@/utils/cn';

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<AccordionTriggerProps>();

  const forwarded = useForwardProps(props);
</script>

<template>
  <AccordionHeader class="flex">
    <AccordionTrigger
      v-bind="forwarded"
      :class="
        cn(
          'flex h-14 w-full items-center justify-between px-4 py-1 text-sm font-bold transition-all [&[data-state=open]>svg]:rotate-180',
          $attrs.class as string,
        )
      "
    >
      <slot />

      <PhCaretDown class="size-4 shrink-0 transition-transform duration-200" />
    </AccordionTrigger>
  </AccordionHeader>
</template>
