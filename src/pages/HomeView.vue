<template>
  <div class="h-screen p-4">
    <p>{{ episodies }}</p>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { getCharacters } from "../services/rickandmortyapi";

const episodies = ref([]);

onMounted(async () => {
  const data = await getCharacters();
  episodies.value = data.results;
});
</script>
