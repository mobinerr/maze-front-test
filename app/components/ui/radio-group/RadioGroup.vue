<script setup lang="ts">
  import { RadioGroupRoot, type RadioGroupRootProps } from 'reka-ui';

  const model = defineModel<string>();

  const props = defineProps<RadioGroupRootProps>();
</script>

<template>
  <RadioGroupRoot v-bind="props" v-model="model" class="flex flex-col gap-3">
    <slot />
  </RadioGroupRoot>
</template>
