<script setup lang="ts">
  import { FOOTER_SOCIAL_MEDIA } from '@/constants/social-media';

  import { PhInstagramLogo, PhLinkedinLogo, PhYoutubeLogo } from '@/icons';

  const icons = {
    instagram: PhInstagramLogo,
    linkedin: PhLinkedinLogo,
    youtube: PhYoutubeLogo,
  };
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-2">
    <span class="text-xs text-text-muted lg:hidden"> شبکه‌های اجتماعی </span>

    <div class="flex flex-wrap justify-center gap-4">
      <CommonAppLink
        v-for="item in FOOTER_SOCIAL_MEDIA"
        :key="item.id"
        type="external"
        :to="item.href"
        class="flex size-10 items-center justify-center text-foreground transition-colors hover:text-primary lg:size-11"
      >
        <component :is="icons[item.icon]" :size="24" weight="fill" />

        <span class="sr-only">
          {{ item.title }}
        </span>
      </CommonAppLink>
    </div>
  </div>
</template>
