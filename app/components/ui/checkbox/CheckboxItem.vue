<script setup lang="ts">
  import { computed } from 'vue';

  const props = withDefaults(
    defineProps<{
      value: string;
      disabled?: boolean;
    }>(),
    {
      disabled: false,
    },
  );

  const model = defineModel<string[]>({
    default: () => [],
  });

  const checked = computed<boolean>({
    get() {
      return model.value.includes(props.value);
    },

    set(isChecked) {
      if (isChecked) {
        if (!model.value.includes(props.value)) {
          model.value = [...model.value, props.value];
        }
      } else {
        model.value = model.value.filter(item => item !== props.value);
      }
    },
  });
</script>

<template>
  <label
    class="group flex cursor-pointer items-center gap-3"
    :class="{ 'pointer-events-none opacity-50': disabled }"
  >
    <UiCheckbox v-model="checked" :disabled="disabled" />
    <div
      class="flex-1 text-sm text-text-muted transition-colors group-has-[_[data-state=checked]]:text-text"
    >
      <slot />
    </div>
  </label>
</template>
