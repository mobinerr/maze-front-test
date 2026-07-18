<script setup lang="ts">
  import { PhCirclesFour, PhPhone, PhBookOpenText, PhChatDots, PhList } from '@/icons';
</script>

<template>
  <header class="border-b bg-white shadow-[0_2px_2px_hsl(var(--foreground)/0.08)] rounded-b-lg">
    <div class="container mx-auto flex h-[72px] md:h-28 items-center justify-between">
      <div>
        <button
          type="button"
          class="flex justify-center items-center size-10 rounded-md shrink-0 grow-0 border-2 border-primary text-primary md:hidden"
        >
          <PhList :size="18" />
        </button>
      </div>
      <nav class="flex items-center gap-6 text-sm max-md:hidden">
        <LayoutHeaderNavItem to="/products">
          <PhCirclesFour :size="16" />
          <span>لیست محصولات</span>
        </LayoutHeaderNavItem>
        <LayoutHeaderNavItem to="#">
          <PhBookOpenText :size="16" />
          <span>دریافت مشاوره</span>
        </LayoutHeaderNavItem>
        <LayoutHeaderNavItem to="#">
          <PhChatDots :size="16" />
          <span>سوالات متداول</span>
        </LayoutHeaderNavItem>
        <LayoutHeaderNavItem to="#">
          <PhPhone :size="16" />
          <span>تماس با ما</span>
        </LayoutHeaderNavItem>
      </nav>
      <CommonPhoneButton />
    </div>
  </header>
</template>
