<script setup lang="ts">
  import { CheckboxIndicator, CheckboxRoot } from 'reka-ui';
  import { cn } from '@/utils/cn';
  import { PhCheck } from '@/icons';

  const checked = defineModel<boolean>({
    default: false,
  });

  withDefaults(
    defineProps<{
      disabled?: boolean;
    }>(),
    {
      disabled: false,
    },
  );
</script>

<template>
  <CheckboxRoot
    v-model="checked"
    :disabled="disabled"
    :class="
      cn(
        'flex size-5 shrink-0 items-center justify-center rounded-sm border-2 border-border transition-colors',
        'data-[state=checked]:border-primary',
        'data-[state=checked]:bg-primary',
        'focus-visible:ring-2 focus-visible:ring-primary/20',
      )
    "
  >
    <CheckboxIndicator class="flex items-center justify-center text-white">
      <PhCheck :size="14" weight="bold" />
    </CheckboxIndicator>
  </CheckboxRoot>
</template>
