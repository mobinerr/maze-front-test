<script setup lang="ts">
  import { PhBookOpenText, PhChatDots, PhCirclesFour, PhPhone } from '@/icons';

  import { LINKS } from '@/constants/links';

  const icons = {
    products: PhCirclesFour,
    consultation: PhBookOpenText,
    faq: PhChatDots,
    contact: PhPhone,
  };
</script>

<template>
  <nav class="flex items-center gap-6 text-sm max-md:hidden">
    <HeaderNavItem v-for="item in LINKS.HEADER" :key="item.id" :to="item.to">
      <component :is="icons[item.icon]" :size="16" />
      <span>{{ item.title }}</span>
    </HeaderNavItem>
  </nav>
</template>
