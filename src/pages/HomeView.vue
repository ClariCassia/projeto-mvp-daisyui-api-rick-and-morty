<template>
  <div class=" p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center" >
      <CardEpisodies :episodies="episodies" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { getCharacters } from "../services/rickandmortyapi";
import CardEpisodies from "@/components/CardEpisodies.vue";

const episodies = ref([]);

onMounted(async () => {
  const data = await getCharacters();
  episodies.value = data.results;
});
</script>
