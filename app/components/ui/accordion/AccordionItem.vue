<script setup lang="ts">
  import { AccordionItem, type AccordionItemProps, useForwardProps } from 'reka-ui';
  import { cn } from '@/utils';

  defineOptions({
    inheritAttrs: false,
  });

  const props = defineProps<AccordionItemProps>();
  const forwarded = useForwardProps(props);
</script>

<template>
  <AccordionItem
    v-bind="forwarded"
    :class="cn('rounded-sm border shadow-sm', $attrs.class as string)"
  >
    <slot />
  </AccordionItem>
</template>
