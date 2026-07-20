<script setup lang="ts">
  import { ref } from 'vue';

  import { PhMagnifyingGlassPlus } from '@/icons';

  import type { ProductDetailResponseType } from '@/types';

  defineProps<{
    product: ProductDetailResponseType;
  }>();

  const isPreviewOpen = ref(false);
</script>

<template>
  <UiCard class="grid gap-6 p-6">
    <div class="flex flex-col">
      <p class="text-sm text-text-muted">
        {{ product.category }}
      </p>

      <h1 class="mt-1 text-3xl font-bold leading-tight">
        {{ product.title }}
      </h1>
    </div>

    <div class="relative flex items-center justify-center rounded bg-muted p-4">
      <button
        type="button"
        aria-label="بزرگنمایی تصویر"
        class="absolute right-2 top-2 z-10 flex size-10 items-center text-white justify-center rounded bg-black/50 transition hover:scale-105"
        @click="isPreviewOpen = true"
      >
        <PhMagnifyingGlassPlus :size="22" weight="bold" />
      </button>

      <NuxtImg
        :src="product.image"
        :alt="product.title"
        class="mx-auto h-80 w-full object-contain"
      />
    </div>

    <UiDialog v-model:open="isPreviewOpen">
      <UiDialogContent class="max-w-5xl">
        <NuxtImg
          :src="product.image"
          :alt="product.title"
          class="mx-auto max-h-[80vh] w-full object-contain"
        />
      </UiDialogContent>
    </UiDialog>
  </UiCard>
</template>
