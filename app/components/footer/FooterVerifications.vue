<script setup lang="ts">
  import { ORGANIZATION } from '@/constants/organization';

  const verifications = Object.values(ORGANIZATION.VERIFICATION);
</script>

<template>
  <div class="flex items-center justify-center gap-1 lg:justify-end sm:gap-2 mt-4 sm:mt-8">
    <CommonAppLink
      v-for="verification in verifications"
      :key="verification.ID"
      type="external"
      :to="verification.URL"
      :aria-label="verification.TITLE"
      rel=""
      referrerpolicy="origin"
      class="flex size-[4.5rem] items-center justify-center rounded-sm border p-1 sm:size-20"
    >
      <img
        :src="verification.LOGO"
        :alt="verification.TITLE"
        class="h-16 sm:h-[4.5rem] w-auto"
        loading="lazy"
      />
      <span class="sr-only">
        {{ verification.TITLE }}
      </span>
    </CommonAppLink>
  </div>
</template>
