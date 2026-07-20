<script setup lang="ts">
  import type { NuxtError } from '#app';

  defineProps<{
    error: NuxtError;
  }>();

  const handleError = () => clearError({ redirect: '/' });
</script>

<template>
  <div
    class="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
  >
    <h1 class="text-2xl font-bold">
      {{ error.status ?? 500 }}
    </h1>

    <h2 class="mt-4 text-lg font-semibold">
      {{ error.message || 'مشکلی پیش آمده است.' }}
    </h2>

    <p class="mt-2 text-text-muted">لطفاً دوباره تلاش کنید یا به صفحه اصلی بازگردید.</p>

    <CommonAppLink to="/" class="mt-8" @click="handleError"> بازگشت به صفحه اصلی </CommonAppLink>
  </div>
</template>
