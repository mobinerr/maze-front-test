<template>
  <footer class="bg-white shadow-[0_-2px_2px_0_hsl(var(--foreground)/0.08)] rounded-t-lg">
    <section class="container flex flex-col gap-4 lg:gap-6">
      <div class="flex w-full justify-between gap-4 max-lg:flex-col lg:gap-8 my-8">
        <div class="basis-1/4">
          <FooterTitle />
          <FooterVerifications />
        </div>
        <div class="basis-1/2">
          <FooterLinks />
        </div>
      </div>
    </section>
    <section class="w-full bg-footer">
      <div class="container flex flex-col gap-4 lg:gap-6 bg-footer">
        <div class="flex w-full py-4 items-center justify-between gap-2 max-lg:flex-col-reverse">
          <FooterRights />
          <FooterSocialMedia />
        </div>
      </div>
    </section>
  </footer>
</template>
