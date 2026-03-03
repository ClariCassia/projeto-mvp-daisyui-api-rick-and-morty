<template>
  <NavBar />

  <div class="flex w-full min-h-screen pt-20 bg-base-200">

    <aside class="hidden xl:block w-1/5 relative">
      <div class="sticky top-20 h-[calc(100vh-5rem)] flex items-center justify-center p-4">
        <img src="/public/images/Desenhe-Rick-de-Rick-e-Morty.png" class="max-w-full object-contain opacity-50" />
      </div>
    </aside>

    <main class="flex-1 p-4 md:p-8">
      <RouterView />
    </main>

    <aside class="hidden xl:block w-1/5 relative">
      <div class="sticky top-20 h-[calc(100vh-5rem)] flex items-center justify-center p-4">
        <img src="/public/images/Desenhe-2-Rick-de-Rick-e-Morty.png" class="max-w-full object-contain opacity-50 scale-x-[-1]" />
      </div>
    </aside>

  </div>
</template>

<script setup>
import NavBar from "@/components/NavBar.vue";
</script>