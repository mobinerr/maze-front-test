<script setup lang="ts">
  import { ref } from 'vue';

  import { PhMagnifyingGlass } from '@/icons';

  const model = defineModel<string>({
    default: '',
  });

  const keyword = ref('');

  const handleSearch = () => {
    const value = keyword.value.trim();
    model.value = value;
    keyword.value = '';
  };
</script>

<template>
  <UiCard>
    <div class="flex flex-col gap-4">
      <span class="text-sm font-medium text-text"> فیلتر و جستجو </span>

      <UiInput v-model="keyword" type="text" placeholder="جستجوی محصول" @keyup.enter="handleSearch">
        <template #icon>
          <PhMagnifyingGlass :size="18" />
        </template>
      </UiInput>

      <button
        type="button"
        class="h-11 w-full rounded bg-primary text-sm font-normal text-primary-foreground transition hover:bg-primary/90"
        @click="handleSearch"
      >
        جستجو
      </button>
    </div>
  </UiCard>
</template>
