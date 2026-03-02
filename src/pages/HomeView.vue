<template>
  <div class="min-h-screen p-4 flex flex-col">

    <div class="flex-1 flex items-center justify-center">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        <CardEpisodies
          v-for="epidodie in episodies"
          :key="epidodie.id"
          :name="epidodie.name"
          :episodie="epidodie.episode"
          :characters="epidodie.characters"
          :airDate="epidodie.air_date"
        />
      </div>
    </div>

    <div class="flex justify-center py-4">
      <div class="join">
        <button
          v-for="(_, index) in totalPages"
          :key="index"
          class="join-item btn"
          :class="{ 'btn-active': index + 1 === pages }"
          @click="setPagination(index + 1)"
        >
          {{ index + 1 }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>

import { getCharacters } from "../services/rickandmortyapi";

const episodies = ref([]);
const pages = ref(1);
const totalPages = ref(0);

onMounted(async () => {
  handleGetEpisodies();
});

async function handleGetEpisodies() {
  const data = await getCharacters(pages.value);
  episodies.value = data.results;
  totalPages.value = data.info.pages;
}

function setPagination(page) {
  pages.value = page;
  handleGetEpisodies();
} 
</script>
