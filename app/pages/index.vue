<script setup lang="ts">
  useSeoMeta({
    title: 'فروشگاهِ من',
    description: 'فروشگاهِ من',
  });
</script>

<template>
  <div class="container flex flex-col items-center justify-center gap-8 my-28">
    <div class="space-y-2 text-center">
      <h1 class="text-lg font-bold">فروشگاهِ من</h1>
      <p class="text-sm text-text-muted">برای مشاهده محصولات روی دکمه زیر کلیک کنید.</p>
    </div>

    <CommonAppLink
      to="/products"
      class="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition hover:bg-primary/90"
    >
      مشاهده محصولات
    </CommonAppLink>
  </div>
</template>
