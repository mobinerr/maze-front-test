<script setup lang="ts">
  import { AccordionContent, type AccordionContentProps, useForwardProps } from 'reka-ui';

  import { cn } from '@/utils/cn';

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<AccordionContentProps>();

  const forwarded = useForwardProps(props);
</script>

<template>
  <AccordionContent
    v-bind="forwarded"
    :class="
      cn(
        'overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        $attrs.class as string,
      )
    "
  >
    <slot />
  </AccordionContent>
</template>
