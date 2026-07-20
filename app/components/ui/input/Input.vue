<script setup lang="ts">
  import { PhX } from '@/icons';
  import { cn } from '@/utils/cn';

  defineOptions({
    inheritAttrs: false,
  });

  const model = defineModel<string>({
    default: '',
  });

  const props = withDefaults(
    defineProps<{
      class?: string;
      clearable?: boolean;
    }>(),
    {
      class: '',
      clearable: true,
    },
  );

  const clearInput = () => {
    model.value = '';
  };
</script>

<template>
  <div
    :class="
      cn(
        'group relative flex h-11 w-full items-center rounded border border-border bg-input transition-colors',
        'focus-within:border-primary',
        props.class,
      )
    "
  >
    <!-- Right Icon -->
    <div
      class="absolute right-0 flex items-center border-l border-border px-4 text-text-muted transition-colors group-focus-within:text-primary"
    >
      <slot name="icon" />
    </div>

    <!-- Clear Button -->
    <button
      v-if="clearable && model"
      type="button"
      class="absolute left-3 flex items-center justify-center text-text-muted transition-colors hover:text-primary"
      @click="clearInput"
    >
      <PhX :size="16" />
    </button>

    <!-- Text Input -->
    <input
      v-model="model"
      v-bind="$attrs"
      :class="
        cn(
          'h-full w-full bg-transparent px-4 pr-16 text-sm text-foreground',
          'placeholder:text-text-muted outline-none',
          'disabled:pointer-events-none disabled:opacity-50',
          clearable && model && 'pl-10',
        )
      "
    />
  </div>
</template>
