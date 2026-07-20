<script setup lang="ts"></script>

<template>
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    <UiCard v-for="item in 6" :key="item" class="overflow-hidden">
      <div class="aspect-square animate-pulse bg-muted rounded" />
      <div class="flex flex-col gap-3 p-4">
        <div class="h-5 w-3/4 animate-pulse rounded bg-muted" />
        <div class="h-4 w-full animate-pulse rounded bg-muted" />
        <div class="h-4 w-2/3 animate-pulse rounded bg-muted" />
        <div class="mt-2 h-6 w-1/3 animate-pulse rounded bg-muted" />
      </div>
    </UiCard>
  </div>
</template>
