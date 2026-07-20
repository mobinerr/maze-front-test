<script setup lang="ts">
  useHead({
    htmlAttrs: {
      lang: 'fa',
      dir: 'rtl',
    },
  });
</script>

<template>
  <NuxtLoadingIndicator color="hsl(var(--primary))" :height="3" :throttle="0" :duration="1500" />
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
