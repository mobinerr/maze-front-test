<script setup lang="ts">
  defineOptions({
    inheritAttrs: false,
  });

  type LinkType = 'internal' | 'external' | 'tel' | 'mail' | 'download';

  const props = withDefaults(
    defineProps<{
      type?: LinkType;
      to: string;
      target?: string;
      download?: boolean;
    }>(),
    {
      type: 'internal',
      target: '_blank',
      download: true,
    },
  );

  const href = computed(() => {
    switch (props.type) {
      case 'tel':
        return `tel:${props.to}`;

      case 'mail':
        return `mailto:${props.to}`;

      default:
        return props.to;
    }
  });

  const isInternal = computed(() => {
    return props.type === 'internal';
  });
</script>

<template>
  <!-- Nuxt Internal Link -->
  <NuxtLink v-if="isInternal" :to="to" v-bind="$attrs">
    <slot />
  </NuxtLink>

  <!-- Normal Anchor -->
  <a
    v-else
    :href="href"
    :target="type === 'external' ? target : undefined"
    :rel="type === 'external' ? 'noopener noreferrer nofollow' : undefined"
    :download="type === 'download' ? download : undefined"
    v-bind="$attrs"
  >
    <slot />
  </a>
</template>
