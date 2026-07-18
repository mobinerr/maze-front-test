<script setup lang="ts">
  type Props = {
    padding?: boolean;
    hover?: boolean;
  };

  withDefaults(defineProps<Props>(), {
    padding: true,
    hover: false,
  });
</script>

<template>
  <article
    class="rounded-xl border bg-white shadow-sm transition"
    :class="{
      'p-4': padding,
      'hover:shadow-md': hover,
    }"
  >
    <slot />
  </article>
</template>
