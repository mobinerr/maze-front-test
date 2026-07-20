<script setup lang="ts">
  import { ref, watch } from 'vue';

  import { PhMagnifyingGlass } from '@/icons';

  const model = defineModel<string>({
    default: '',
  });

  const keyword = ref(model.value);

  watch(model, value => {
    keyword.value = value;
  });

  const handleSearch = () => {
    const value = keyword.value.trim();

    keyword.value = value;
    model.value = value;
  };
</script>

<template>
  <UiCard>
    <div class="flex flex-col gap-4">
      <span class="text-sm text-text font-medium">فیلتر و جستجو</span>
      <UiInput v-model="keyword" type="text" placeholder="جستجوی محصول" @keyup.enter="handleSearch"
        ><template #icon>
          <PhMagnifyingGlass :size="18" />
        </template>
      </UiInput>

      <button
        type="button"
        class="rounded w-full bg-primary h-11 text-sm font-normal text-primary-foreground transition hover:bg-primary/90"
        @click="handleSearch"
      >
        جستجو
      </button>
    </div>
  </UiCard>
</template>
