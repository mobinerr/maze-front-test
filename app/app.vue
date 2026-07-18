<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
  });
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
