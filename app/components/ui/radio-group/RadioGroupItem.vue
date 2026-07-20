<script setup lang="ts">
  import { cn } from '@/utils/cn';

  import { RadioGroupIndicator, RadioGroupItem, type RadioGroupItemProps } from 'reka-ui';

  const props = defineProps<RadioGroupItemProps>();
</script>

<template>
  <label class="group flex cursor-pointer items-center gap-3" dir="rtl">
    <RadioGroupItem
      v-bind="props"
      :class="
        cn(
          'flex size-5 items-center justify-center rounded-full border-2 border-border transition-colors',
          'data-[state=checked]:border-primary',
          'focus-visible:ring-2 focus-visible:ring-primary/20',
        )
      "
    >
      <RadioGroupIndicator class="flex items-center justify-center">
        <div class="size-3 rounded-full bg-primary" />
      </RadioGroupIndicator>
    </RadioGroupItem>

    <span
      class="text-sm text-text-muted transition-colors group-has-[_[data-state=checked]]:text-text"
    >
      <slot />
    </span>
  </label>
</template>
