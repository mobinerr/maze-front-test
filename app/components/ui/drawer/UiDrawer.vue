<script setup lang="ts">
  import { DrawerRoot, type DrawerRootEmits, type DrawerRootProps } from 'vaul-vue';
  import { useForwardPropsEmits } from 'reka-ui';

  const props = defineProps<DrawerRootProps>();
  const emits = defineEmits<DrawerRootEmits>();

  const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <DrawerRoot v-bind="forwarded">
    <slot />
  </DrawerRoot>
</template>
