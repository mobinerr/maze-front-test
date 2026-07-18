<script setup lang="ts">
  import { LINKS } from '@/constants/links';
</script>

<template>
  <!-- Mobile -->
  <div class="lg:hidden">
    <UiAccordion type="single" collapsible class="grid w-full">
      <UiAccordionItem
        v-for="section in LINKS.FOOTER"
        :key="section.id"
        :value="section.id"
        class="rounded-none border-0 border-b shadow-none"
      >
        <UiAccordionTrigger class="px-0 text-base font-semibold">
          {{ section.title }}
        </UiAccordionTrigger>

        <UiAccordionContent>
          <ul class="grid gap-4 border-t py-4">
            <li v-for="link in section.children" :key="link.id" class="group">
              <template v-if="link.disabled">
                <span class="select-none text-sm text-muted-foreground">
                  {{ link.title }} (به زودی)
                </span>
              </template>

              <template v-else>
                <CommonAppLink :to="link.to" class="text-sm transition-colors hover:text-primary">
                  {{ link.title }}
                </CommonAppLink>
              </template>
            </li>
          </ul>
        </UiAccordionContent>
      </UiAccordionItem>
    </UiAccordion>
  </div>

  <!-- Desktop -->
  <div class="hidden justify-between gap-8 lg:flex">
    <div v-for="section in LINKS.FOOTER" :key="section.id" class="space-y-4">
      <h3 class="text-base font-semibold">
        {{ section.title }}
      </h3>

      <ul class="space-y-4">
        <li v-for="link in section.children" :key="link.id" class="group">
          <template v-if="link.disabled">
            <span class="select-none text-sm text-text-muted"> {{ link.title }} (به زودی) </span>
          </template>
          <template v-else>
            <CommonAppLink
              :to="link.to"
              class="text-sm text-text transition-colors hover:text-primary"
            >
              {{ link.title }}
            </CommonAppLink>
          </template>
        </li>
      </ul>
    </div>
  </div>
</template>
