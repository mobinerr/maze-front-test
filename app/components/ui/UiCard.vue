<script setup lang="ts">
  import { cn } from '@/utils/cn';

  defineOptions({
    inheritAttrs: false,
  });

  type Props = {
    padding?: boolean;
    hover?: boolean;
    class?: string;
  };

  const props = withDefaults(defineProps<Props>(), {
    padding: true,
    hover: false,
    class: '',
  });
</script>

<template>
  <div
    v-bind="$attrs"
    :class="
      cn(
        'rounded-xl border bg-white shadow-sm transition',
        props.padding && 'p-4',
        props.hover && 'hover:shadow-md',
        props.class,
      )
    "
  >
    <slot />
  </div>
</template>
